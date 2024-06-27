document.addEventListener('DOMContentLoaded', () => { 
  // Menunggu hingga seluruh konten HTML telah dimuat

  const sections = {
    'Informasi-Obat': document.getElementById('Informasi-Obat')
  };
  // Mendefinisikan sebuah objek yang berisi referensi ke elemen dengan ID 'Informasi-Obat'

  const showSection = (sectionId) => {
    const section = sections[sectionId];
    if (section) {
      section.style.display = 'block';
    }
  };
  // Fungsi untuk menampilkan sebuah bagian (section) berdasarkan ID yang diberikan

  const hideAllSectionsExcept = (exceptSection) => {
    Object.entries(sections).forEach(([key, section]) => {
      if (key !== exceptSection && section) {
        section.style.display = 'none';
      }
    });
  };
  // Fungsi untuk menyembunyikan semua bagian kecuali bagian yang diberikan

  // Inisialisasi tampilan default
  hideAllSectionsExcept('Informasi-Obat'); // Hanya menampilkan bagian 'Informasi-Obat' pada awalnya
});
