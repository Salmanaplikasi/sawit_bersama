import TheHealthcareSourceMedicine from "./data/healthcaredb-source-medicine";

document.addEventListener("DOMContentLoaded", async () => {
  const drugGrid = document.querySelector(".drug-grid");

  // Fungsi untuk menampilkan data obat
  const showMedicines = async (params = {}) => {
    try {
      const medicinesData = await TheHealthcareSourceMedicine.getMedicines(params);

      if (medicinesData) {
        const medicines = medicinesData.medicines;
        const medicinesInfo = {
          page: medicinesData.page,
          totalPages: medicinesData.totalPages
        };

        // Kosongkan konten drugGrid sebelum menambahkan data obat
        drugGrid.innerHTML = '';

        medicines.forEach((medicine) => {
          const medicineElement = document.createElement("div");
          medicineElement.className = "medicine-item";
          medicineElement.innerHTML = `
            <h3>${medicine.name}</h3>
            <p><strong>Class Therapy:</strong> ${medicine.class_therapy}</p>
          `;

          medicineElement.addEventListener("click", async () => {
            const detail = await TheHealthcareSourceMedicine.getDetailMedicineById(medicine.id);
            if (detail) {
              document.getElementById("popup-medicine-name").textContent = detail.name;
              document.getElementById("popup-class-therapy").textContent = detail.class_therapy;
              document.getElementById("popup-subclass_therapy1").textContent = detail.subclass_therapy1;
              document.getElementById("popup-subclass_therapy2").textContent = detail.subclass_therapy2;
              document.getElementById("popup-subclass_therapy3").textContent = detail.subclass_therapy3;
              document.getElementById("popup-power").textContent = detail.power;
              document.getElementById("popup-unit").textContent = detail.unit;
              document.getElementById("popup-type").textContent = detail.type;
              document.getElementById("popup-composition").textContent = detail.composition;
              document.getElementById("popup-drug_restrictions").textContent = detail.drug_restrictions;
              document.getElementById("popup-maximum_prescription").textContent = detail.maximum_prescription;
              document.getElementById("medicine-detail-popup").style.display = "flex";
            } else {
              alert("Gagal mengambil detail obat.");
            }
          });

          drugGrid.appendChild(medicineElement);
        });

        // Perbarui elemen pagination
        const paginationContainer = document.querySelector('.paginationObat');
        paginationContainer.innerHTML = `
          <span>Showing ${((medicinesInfo.page - 1) * 10) + 1} - ${Math.min(medicinesInfo.page * 10, medicinesData.totalPages * 10)}</span>
          <div class="pagination-buttons-obat">
            <button class="prev-btn">&lt;</button>
            <span>Page ${medicinesInfo.page} of ${medicinesInfo.totalPages}</span>
            <button class="next-btn">&gt;</button>
          </div>
        `;

        // Event listener untuk tombol "Next" dan "Back"
        const nextButton = paginationContainer.querySelector('.next-btn');
        const prevButton = paginationContainer.querySelector('.prev-btn');

        if (nextButton) {
          nextButton.addEventListener('click', () => {
            if (medicinesInfo.page < medicinesInfo.totalPages) {
              showMedicines({ ...params, page: medicinesInfo.page + 1 });
            }
          });
        }

        if (prevButton) {
          prevButton.addEventListener('click', () => {
            if (medicinesInfo.page > 1) {
              showMedicines({ ...params, page: medicinesInfo.page - 1 });
            }
          });
        }
      } else {
        drugGrid.innerHTML = "<p>Gagal mengambil data obat.</p>";
      }
    } catch (error) {
      drugGrid.innerHTML = "<p>Terjadi kesalahan saat mengambil data obat.</p>";
    }
  };

  // Inisialisasi data obat pertama kali
  showMedicines();

  // Event listener untuk menutup popup
  document.querySelector(".close-button").addEventListener("click", () => {
    document.getElementById("medicine-detail-popup").style.display = "none";
  });

  // Event listener untuk menutup popup ketika klik di luar konten
  window.addEventListener("click", (event) => {
    const popup = document.getElementById("medicine-detail-popup");
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  // Event listener untuk tombol pencarian
  const searchButton = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-text");

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", (event) => {
      event.preventDefault();
      const searchText = searchInput.value;
      showMedicines({ search: searchText });
    });
  }
});
