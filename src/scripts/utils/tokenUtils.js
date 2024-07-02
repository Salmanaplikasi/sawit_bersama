// function decodeToken(token) {
//   try {
//     const base64Url = token.split('.')[1]; // Ambil bagian payload dari token JWT
//     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Ganti karakter - dan _ dengan + dan /
//     const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); // Decode base64 dan ubah karakter menjadi UTF-8
//     }).join(''));
//     return JSON.parse(jsonPayload); // Parse payload JSON dari token
//   } catch (error) {
//     console.error('Invalid token:', error); // Tangkap error jika token tidak valid
//     return null;
//   }
// }

// function isTokenExpired(token) {
//   const decoded = decodeToken(token); // Decode token
//   if (!decoded || !decoded.exp) {
//     console.log('Token tidak valid atau tidak memiliki waktu kadaluarsa.'); // Periksa apakah token tidak valid atau tidak memiliki waktu kadaluarsa
//     return true; // Menganggap token kadaluarsa jika tidak valid
//   }
//   const currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
//   return decoded.exp < currentTime; // Periksa apakah waktu kadaluarsa token lebih kecil dari waktu saat ini
// }

// function validateToken(token) {
//   if (!token) {
//     console.log('Token tidak ditemukan.'); // Periksa apakah token ada
//     return false;
//   }

//   if (isTokenExpired(token)) {
//     console.log('Token sudah kadaluarsa.'); // Periksa apakah token sudah kadaluarsa
//     return false;
//   }

//   console.log('Token masih valid.'); // Jika token masih valid
//   return true;
// }

// export { decodeToken, isTokenExpired, validateToken }; // Ekspor fungsi-fungsi untuk digunakan di luar modul
