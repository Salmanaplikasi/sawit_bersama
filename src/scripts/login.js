import TheHealthcareSourceUser from "./data/healthcaredb-source-user";
import { showDashboard, } from "./kelola-obat";
import { showSuccessMessage, showErrorMessage } from "./utils/popup";

// Event listener untuk memastikan DOM sudah sepenuhnya dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', async () => {
  const login = document.getElementById('login-form');
  const signup = document.getElementById('signup-form');
  const app_drawer = document.querySelector('.nav-ul');
  const navObat = document.querySelector('.kelola');
  // console.log('DOM fully loaded and parsed');

  // Menambahkan event listener untuk link Sign Up
  const signUpLink = document.getElementById('signUpLink');
  if (signUpLink) {
    signUpLink.addEventListener('click', function(event) {
      event.preventDefault();
      signup.style.display = 'block';
      login.style.display = 'none';
    });
  }

  // Menambahkan event listener untuk link Sign In
  const signInLink = document.getElementById('signInLink');
  if (signInLink) {
    signInLink.addEventListener('click', function(event) {
      event.preventDefault();
      login.style.display = 'block';
      signup.style.display = 'none';
    });
  }

  // Menambahkan event listener untuk formulir registrasi saat dikirim
  const registrationForm = document.getElementById('signup-form');
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
  
        }
        
        // Setelah login berhasil, ubah tampilan menjadi logo "user.jpg"
        const loginLink = document.getElementById('loginLink');

        if (loginLink) {
          loginLink.innerHTML = '<img src="user.jpg" alt="User" style="width: 80px; height: auto;">';
          loginLink.style.display = 'none'
        }
      } catch (error) {
        console.error('Registrasi gagal:', error.message);
        showErrorMessage('Registrasi gagal: ' + error.message);
      }
    });
  }

  // Menambahkan event listener untuk formulir login saat dikirim
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      // Mengambil nilai input dari formulir login
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
        // Menjalankan proses login dengan menggunakan objek TheHealthcareSourceUser
        const response = await TheHealthcareSourceUser.login(email, password);
        if (response) {
        const loginLink = document.getElementById('loginLink');
        if (loginLink){
          loginLink.style.display = 'none';
          window.location.reload();
        }
      }
    });
  }


      // Periksa apakah token akses masih valid
      const user = await TheHealthcareSourceUser.getUser();
      if (user) {
        const loginLink = document.getElementById('loginLink');
        if (loginLink) {
          loginLink.style.display = 'none'
          // Sembunyikan tulisan login
          loginLink.style.color = 'transparent';
          // Sembunyikan latar belakang login
          loginLink.style.background = 'none';
          loginForm.style.display = 'none';
          // Buat elemen <li> baru
          const liLogout = document.createElement('li');
          

          navObat.style.display = 'block';

          // Buat elemen <button> baru
          const logoutButton = document.createElement('button');

          // Tambahkan kelas ke elemen <button>
          logoutButton.classList.add('logout-button');

          // Set atribut href untuk link
          logoutButton.textContent = 'Logout'; // Teks yang ditampilkan di dalam tombol

          // Tambahkan event listener untuk event klik
          logoutButton.addEventListener('click', async () => {
              try {
                  const response = await TheHealthcareSourceUser.logout();
                  window.location.reload();
                  if (response) {
                      window.location.href = '/login'; // Ganti '/login' dengan URL halaman login yang benar
                      
                  }
              } catch (error) {
                  console.error('Logout gagal:', error.message);
              }
          });

          // Masukkan elemen <button> ke dalam elemen <li>
          liLogout.appendChild(logoutButton);

          // Masukkan elemen <li> ke dalam .app-bar__navigation
          app_drawer.appendChild(liLogout);


          showDashboard();

        }
        ;
      } else {
        navObat.style.display = 'none';
      }
});