document.addEventListener('DOMContentLoaded', () => { // Menunggu hingga seluruh konten halaman selesai dimuat
  const sections = { // Mendefinisikan objek untuk menyimpan referensi ke elemen-elemen dengan ID 'Edukasi'
    Edukasi: document.getElementById('Edukasi')
  };

  const showSection = (sectionId) => { // Fungsi untuk menampilkan bagian yang sesuai dengan ID yang diberikan
    const section = sections[sectionId];
    if (section) {
      section.style.display = 'block'; // Mengubah gaya tampilan elemen menjadi 'block' agar terlihat
    }
  };

  const hideAllSectionsExcept = (exceptSection) => { // Fungsi untuk menyembunyikan semua bagian kecuali bagian yang dikecualikan
    Object.entries(sections).forEach(([key, section]) => { // Melakukan iterasi pada setiap pasangan kunci dan nilai dalam objek sections
      if (key !== exceptSection && section) { // Jika kunci tidak sama dengan bagian yang dikecualikan dan elemen tersebut ada
        section.style.display = 'none'; // Mengubah gaya tampilan elemen menjadi 'none' agar tidak terlihat
      }
    });
  };

  // Inisialisasi tampilan default
  hideAllSectionsExcept('Edukasi'); // Hanya menampilkan bagian 'Edukasi' pada awalnya
});
