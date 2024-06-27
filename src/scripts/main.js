// Menambahkan event listener ketika konten DOM sudah dimuat
document.addEventListener('DOMContentLoaded', () => {
  // Mendeklarasikan objek sections untuk menyimpan elemen dengan id 'mainContent'
  const sections = {
    MainContent: document.getElementById('mainContent')
  };

  // Fungsi untuk menampilkan sebuah section berdasarkan id
  const showSection = (sectionId) => {
    const section = sections[sectionId];
    if (section) {
      section.style.display = 'block';
    }
  };

  // Fungsi untuk menyembunyikan semua section kecuali section yang dikecualikan
  const hideAllSectionsExcept = (exceptSection) => {
    Object.entries(sections).forEach(([key, section]) => {
      if (key !== exceptSection && section) {
        section.style.display = 'none';
      }
    });
  };

  // Menginisialisasi tampilan default
  hideAllSectionsExcept('MainContent'); // Hanya menampilkan section MainContent pada awalnya
});

// Menambahkan event listener ketika konten DOM sudah dimuat untuk logika paginasi
document.addEventListener('DOMContentLoaded', () => {
  const videosPerPage = 3; // Jumlah video per halaman
  let currentPage = 1; // Halaman saat ini

  const videoItems = document.querySelectorAll('.video-item'); // Mengambil semua elemen dengan kelas 'video-item'
  const totalPages = Math.ceil(videoItems.length / videosPerPage); // Menghitung total halaman

  const prevButton = document.getElementById('prev'); // Mengambil elemen tombol 'prev'
  const nextButton = document.getElementById('next'); // Mengambil elemen tombol 'next'
  const currentPageIndicator = document.getElementById('current'); // Mengambil elemen indikator halaman saat ini

  // Fungsi untuk memperbarui tampilan paginasi
  const updatePagination = () => {
    // Menyembunyikan semua video
    videoItems.forEach(item => item.classList.add('hidden'));

    // Menampilkan video untuk halaman saat ini
    const start = (currentPage - 1) * videosPerPage;
    const end = start + videosPerPage;
    for (let i = start; i < end && i < videoItems.length; i++) {
      videoItems[i].classList.remove('hidden');
    }

    // Memperbarui status tombol paginasi
    currentPageIndicator.textContent = currentPage;
    prevButton.style.display = currentPage === 1 ? 'none' : 'inline';
    nextButton.style.display = currentPage === totalPages ? 'none' : 'inline';
  };

  // Menambahkan event listener pada tombol 'prev' dan 'next' jika elemen-elemen tersebut ada
  if (prevButton && nextButton && currentPageIndicator) {
    prevButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentPage > 1) {
        currentPage--; // Mengurangi nomor halaman saat ini
        updatePagination(); // Memperbarui tampilan paginasi
      }
    });

    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentPage < totalPages) {
        currentPage++; // Menambah nomor halaman saat ini
        updatePagination(); // Memperbarui tampilan paginasi
      }
    });

    // Pemanggilan awal untuk mengatur tampilan paginasi
    updatePagination();
  }
});
