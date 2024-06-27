import CONFIG from "../globals/config";
import { showErrorMessage } from "../utils/popup";

class TheHealthcareSourceUser {
    static async register(name, email, password, confPassword) {
        if (password !== confPassword) { // Periksa apakah password dan konfirmasi password sama
            return showErrorMessage("Password dan Konfirmasi Password tidak sama");
        }

        try {
            const response = await fetch(`${CONFIG.BASE_URL}/users`, { // Kirim permintaan POST untuk registrasi pengguna baru
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    confpassword: confPassword, // Sesuaikan dengan key yang diharapkan di backend
                }),
            });

            const responseJson = await response.json(); // Ambil respons dalam bentuk JSON

            if (!response.ok) { // Tangani respons tidak ok
                throw new Error(responseJson.msg || 'Registrasi gagal');
            }

            return responseJson;
        } catch (error) {
            showErrorMessage(error.message); // Tangani kesalahan dengan menampilkan pesan kesalahan
            return null;
        }
    }

    static async login(email, password) {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/login`, { // Kirim permintaan POST untuk login
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const responseJson = await response.json(); // Ambil respons dalam bentuk JSON

            if (!response.ok) { // Tangani respons tidak ok
                throw new Error(responseJson.msg || 'Login gagal');
            }

            localStorage.setItem('accessToken', responseJson.accessToken); // Simpan token akses dalam local storage

            return responseJson;
        } catch (error) {
            showErrorMessage(error.message); // Tangani kesalahan dengan menampilkan pesan kesalahan
            return null;
        }
    }
    static async refreshToken() {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/token`, { // Kirim permintaan GET untuk memperbarui token akses
                method: 'GET',
                credentials: 'include', // Ini menyertakan cookie dalam permintaan
            });

            const responseJson = await response.json(); // Ambil respons dalam bentuk JSON

            if (!response.ok) { // Tangani respons tidak ok
                throw new Error(responseJson.msg || 'Gagal memperbarui token');
            }

            localStorage.setItem('accessToken', responseJson.accessToken); // Simpan token akses baru dalam local storage

            return responseJson.accessToken;
        } catch (error) {
            console.error(error); // Tangani kesalahan dengan menampilkan pesan kesalahan
            // Tangani kesalahan atau arahkan ulang ke halaman login
        }
    }
    static async logout() {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) { // Periksa apakah token akses ada
                throw new Error('Token akses tidak ditemukan');
            }
            localStorage.removeItem('accessToken'); // Hapus token akses dari local storage
        } catch (error) {
            console.log(error.message); // Tangani kesalahan dengan menampilkan pesan kesalahan
            return null;
        }
    }
    
    static async getUser() {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) throw new Error('User is not authenticated'); // Periksa apakah pengguna telah terautentikasi

            const response = await fetch(`${CONFIG.BASE_URL}/users`, { // Kirim permintaan GET untuk mendapatkan data pengguna
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`, // Sertakan token akses dalam header autorisasi
                    'Content-Type': 'application/json',
                },
            });

            const responseJson = await response.json(); // Ambil respons dalam bentuk JSON

            if (!response.ok) { // Tangani respons tidak ok
                throw new Error(responseJson.msg || 'Gagal mendapatkan data pengguna');
            }

            return responseJson;
        } catch (error) {
            // showErrorMessage(error.message);
            return null;
        }
    }
}

export default TheHealthcareSourceUser;
