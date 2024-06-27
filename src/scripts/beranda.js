// Menambahkan event listener yang akan dijalankan ketika DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  // Mendefinisikan objek 'sections' yang berisi elemen DOM dengan id 'Beranda'
  const sections = {
    Beranda: document.getElementById('Beranda')
  };

  // Fungsi untuk menampilkan section tertentu berdasarkan id
  const showSection = (sectionId) => {
    const section = sections[sectionId];
    if (section) {
      section.style.display = 'block';
    }
  };

  // Fungsi untuk menyembunyikan semua section kecuali yang ditentukan
  const hideAllSectionsExcept = (exceptSection) => {
    Object.entries(sections).forEach(([key, section]) => {
      if (key !== exceptSection && section) {
        section.style.display = 'none';
      }
    });
  };

  // Inisialisasi tampilan default
  hideAllSectionsExcept('Beranda'); // Hanya menampilkan section 'Beranda' pada awalnya
});
