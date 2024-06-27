function decodeToken(token) {
  try {
      // Memisahkan token menjadi tiga bagian, dan mengambil bagian payload (bagian kedua)
      const base64Url = token.split('.')[1];
      // Mengganti karakter URL-unsafe dengan karakter yang sesuai untuk base64
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      // Mendekode base64 ke string JSON
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      // Mengubah string JSON menjadi objek JavaScript
      return JSON.parse(jsonPayload);
  } catch (error) {
      // Menangkap kesalahan jika token tidak valid
      console.error('Invalid token:', error);
      return null;
  }
}

function isTokenExpired(token) {
  // Mendekode token untuk mendapatkan payload
  const decoded = decodeToken(token);
  // Memeriksa apakah token valid dan memiliki waktu kadaluarsa
  if (!decoded || !decoded.exp) {
      console.log('Token tidak valid atau tidak memiliki waktu kadaluarsa.');
      return true; // Menganggap token kadaluarsa jika tidak valid
  }
  // Mendapatkan waktu saat ini dalam detik
  const currentTime = Math.floor(Date.now() / 1000);
  // Membandingkan waktu kadaluarsa token dengan waktu saat ini
  return decoded.exp < currentTime;
}

function validateToken(token) {
  // Memeriksa apakah token ada
  if (!token) {
      console.log('Token tidak ditemukan.');
      return false;
  }

  // Memeriksa apakah token sudah kadaluarsa
  if (isTokenExpired(token)) {
      console.log('Token sudah kadaluarsa.');
      return false;
  }

  // Jika token masih valid
  console.log('Token masih valid.');
  return true;
}

// Mengekspor fungsi-fungsi untuk digunakan di tempat lain
export { decodeToken, isTokenExpired, validateToken };
