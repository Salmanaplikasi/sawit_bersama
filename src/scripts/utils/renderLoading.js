// renderLoading.js

// Fungsi untuk membuat elemen loading
const renderLoading = () => {
    const loadingContainer = document.createElement('div');
    loadingContainer.classList.add('loading-container');
    loadingContainer.innerHTML = `
      <div class="spinner"></div>
      <p>Loading...</p>
    `;
    return loadingContainer;
  };
  
  // Export fungsi renderLoading agar bisa diimpor di file lain
  export default renderLoading;
  




  

  import TheHealthcareSourceUser from "./data/healthcaredb-source-user";
import { showDashboard } from "./kelola-obat";
import { showSuccessMessage, showErrorMessage } from "./utils/popup";

// Event listener untuk memastikan DOM sudah sepenuhnya dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', async () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const navObat = document.querySelector('.kelola');

  // Menambahkan event listener untuk link Sign Up
  const signUpLink = document.getElementById('signUpLink');
  if (signUpLink) {
    signUpLink.addEventListener('click', function(event) {
      event.preventDefault();
      signupForm.style.display = 'block';
      loginForm.style.display = 'none';
    });
  }

  // Menambahkan event listener untuk link Sign In
  const signInLink = document.getElementById('signInLink');
  if (signInLink) {
    signInLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
    });
  }

  // Menambahkan event listener untuk formulir registrasi saat dikirim
  const registrationForm = document.getElementById('signUpForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      // Mengambil nilai input dari formulir registrasi
      const name = document.getElementById('new-name').value;
      const email = document.getElementById('new-email').value;
      const password = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      // Validasi password dan konfirmasi password harus sama
      if (password !== confirmPassword) {
        showErrorMessage('Password dan Konfirmasi Password tidak cocok.');
        return;
      }

      try {
        // Menjalankan registrasi dengan menggunakan objek TheHealthcareSourceUser
        const response = await TheHealthcareSourceUser.register(name, email, password, confirmPassword);
        if (response) {
          showSuccessMessage('Registrasi berhasil!');
          loginForm.style.display = 'block';
          signupForm.style.display = 'none';
        }
      } catch (error) {
        console.error('Registrasi gagal:', error.message);
        showErrorMessage('Registrasi gagal: ' + error.message);
      }
    });
  }

  // Menambahkan event listener untuk formulir login saat dikirim
  const loginFormElement = document.getElementById('signInForm');
  if (loginFormElement) {
    loginFormElement.addEventListener('submit', async (event) => {
      event.preventDefault();
      // Mengambil nilai input dari formulir login
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        // Menjalankan proses login dengan menggunakan objek TheHealthcareSourceUser
        const response = await TheHealthcareSourceUser.login(email, password);
        if (response) {
          showSuccessMessage('Login berhasil!');
          loginForm.style.display = 'none';
          window.location.reload();
        }
      } catch (error) {
        console.error('Login gagal:', error.message);
        showErrorMessage('Login gagal: ' + error.message);
      }
    });
  }

  // Periksa apakah token akses masih valid
  const user = await TheHealthcareSourceUser.getUser();
  if (user) {
    const loginLink = document.getElementById('loginLink');
    if (loginLink) {
      // Sembunyikan link login dan tampilkan dashboard
      loginLink.style.display = 'none';
      navObat.style.display = 'block';

      // Buat elemen <li> dan <button> untuk logout
      const liLogout = document.createElement('li');
      const logoutButton = document.createElement('button');
      logoutButton.classList.add('logout-button');
      logoutButton.textContent = 'Logout';

      // Tambahkan event listener untuk event klik logout
      logoutButton.addEventListener('click', async () => {
        try {
          const response = await TheHealthcareSourceUser.logout();
          if (response) {
            window.location.href = '/login'; // Ganti '/login' dengan URL halaman login yang benar
          }
        } catch (error) {
          console.error('Logout gagal:', error.message);
        }
      });

      liLogout.appendChild(logoutButton);
      document.querySelector('.nav-ul').appendChild(liLogout);

      showDashboard();
    }
  } else {
    navObat.style.display = 'none';
  }
});
