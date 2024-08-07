// Menampilkan form login saat tombol login diklik
document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleForms("login");
  });

// Menampilkan form signup saat link "Sign Up" diklik
document.getElementById("signUpLink").addEventListener("click", function () {
  toggleForms("signup");
});

// Kembali ke form login dari form signup
document.getElementById("signInLink").addEventListener("click", function () {
  toggleForms("login");
});

// Fungsi untuk menampilkan atau menyembunyikan form login/signup
function toggleForms(formType) {
  document.getElementById("login-form").style.display =
    formType === "login" ? "block" : "none";
  document.getElementById("signup-form").style.display =
    formType === "signup" ? "block" : "none";
}

// Menyimpan status login dan memperbarui tampilan navigasi
function setLoginStatus(isLoggedIn) {
  localStorage.setItem("isLoggedIn", isLoggedIn);
  if (!isLoggedIn) {
    localStorage.removeItem("loginTime");
  }
  updateNav();
}

// Memperbarui tampilan navigasi berdasarkan status login
function updateNav() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  document.getElementById("loginButton").style.display = isLoggedIn
    ? "none"
    : "inline";
  document.getElementById("logoutButton").style.display = isLoggedIn
    ? "inline"
    : "none";
}

// Menangani proses login
document
  .getElementById("signInButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Menghilangkan pengecekan kredensial
    alert("Login successful!");
    setLoginStatus(true);
    localStorage.setItem("email", email);
    document.getElementById("login-form").style.display = "none";
    window.location.href = "home-user.html";
  });

// Menangani proses signup
document
  .getElementById("signUpButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let name = document.getElementById("new-name").value;
    let email = document.getElementById("new-email").value;
    let password = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    alert("Signup successful!");
    toggleForms("login");
    setLoginStatus(true);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  });

// Menangani proses logout
document.getElementById("logoutButton").addEventListener("click", function () {
  setLoginStatus(false);
  localStorage.removeItem("name");
  localStorage.removeItem("email");
});

// Menampilkan section sesuai dengan tombol menu yang diklik
function showSection(sectionId) {
  const sections = document.querySelectorAll(".showcase");
  sections.forEach((section) => (section.style.display = "none"));

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
  }
}

// Event listener untuk menu klik
document.querySelectorAll("button[data-target]").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const target = button.getAttribute("data-target").substring(1); // Remove '#' from target
    showSection(target);
  });
});

// Tampilkan section 'home' saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
  updateNav(); // Perbarui tampilan navigasi berdasarkan status login
});

// Fungsi untuk mengelola tampilan menu pada layar kecil
function toggleMenu() {
  const navbarLinks = document.querySelector(".navbar-links");
  navbarLinks.classList.toggle("active");
}

// Menambahkan event listener untuk tombol toggle menu
document.querySelector(".burger-menu").addEventListener("click", toggleMenu);

// Menutup form login/signup
function closeForm(formId) {
  document.getElementById(formId).style.display = "none";
}

// Efek 3D pada gambar
document.addEventListener("DOMContentLoaded", function () {
  const image3D = document.querySelector(".image-3d");

  if (image3D) {
    image3D.addEventListener("click", function () {
      if (image3D.classList.contains("image-3d-clicked")) {
        image3D.classList.remove("image-3d-clicked");
      } else {
        image3D.classList.add("image-3d-clicked");
      }
    });
  }
});

//MENU KE 1

document.addEventListener("DOMContentLoaded", () => {
  // Pilih gambar dengan class .image-1 dan .image-2
  const images = document.querySelectorAll(".image-1, .image-2");

  images.forEach((image) => {
    // Tambahkan event listener untuk klik
    image.addEventListener("click", () => {
      // Toggle class .image-3d-clicked untuk efek tambahan saat diklik
      image.classList.toggle("image-3d-clicked");
    });
  });
});

// TULISAN UNTUK DI MENU KE 2
// 1
function toggleDetails() {
  var details = document.getElementById("details");
  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}

//2
function toggleUniqueDetails() {
  var details = document.getElementById("uniqueDetails12345");
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

// 3
// Fungsi untuk menampilkan atau menyembunyikan detail
function toggleNewDetails() {
  var details = document.getElementById("uniqueDetails");
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

// Menyembunyikan detail saat halaman web di refresh
window.onload = function () {
  document.getElementById("uniqueDetails").style.display = "none";
};
