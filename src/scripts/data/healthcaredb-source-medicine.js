import CONFIG from "../globals/config";

// Kelas untuk mengelola operasi CRUD terhadap data obat dari sumber Healthcare

class TheHealthcareSourceMedicine {
    // Metode untuk membuat entri obat baru
    static async createMedicine(medicineData, accessToken) {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/medicines`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`, // Tambahkan token akses di sini
                },
                body: JSON.stringify(medicineData),
            });

            const responseJson = await response.json();

            if (!response.ok) {
                throw new Error(responseJson.msg || 'Gagal menambahkan obat');
            }

            return responseJson;
        } catch (error) {
            console.error(error);
            // Tangani kesalahan dengan tepat, misalnya dengan menampilkan pesan kesalahan kepada pengguna
            return null;
        }
    }

    // Metode untuk mendapatkan daftar obat dengan opsi pencarian dan penyesuaian halaman
    static async getMedicines(params = {}) {
        try {
            const { limit = 10, page = 1, search = '' } = params;

            const url = new URL(`${CONFIG.BASE_URL}/medicines`);
            url.searchParams.append('limit', limit);
            url.searchParams.append('page', page);
            url.searchParams.append('search', search);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Tambahkan token akses jika diperlukan
                    // 'Authorization': `Bearer ${accessToken}`,
                },
            });

            const responseJson = await response.json();

            if (!response.ok) {
                throw new Error(responseJson.msg || 'Gagal mengambil data obat');
            }

            return responseJson;
        } catch (error) {
            console.error(error);
            // Tangani kesalahan dengan tepat, misalnya dengan menampilkan pesan kesalahan kepada pengguna
            return null;
        }
    }

    // Metode untuk mendapatkan daftar obat oleh dokter dengan opsi pencarian dan penyesuaian halaman
    static async getMedicinesDoctor(params = {},accessToken) {
        try {
            const { limit = 10, page = 1, search = '' } = params;

            const url = new URL(`${CONFIG.BASE_URL}/medicinesdoctor`);
            url.searchParams.append('limit', limit);
            url.searchParams.append('page', page);
            url.searchParams.append('search', search);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Tambahkan token akses jika diperlukan
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            const responseJson = await response.json();

            if (!response.ok) {
                throw new Error(responseJson.msg || 'Gagal mengambil data obat');
            }

            return responseJson;
        } catch (error) {
            console.error(error);
            // Tangani kesalahan dengan tepat, misalnya dengan menampilkan pesan kesalahan kepada pengguna
            return null;
        }
    }

    // Metode untuk mendapatkan detail obat berdasarkan ID
    static async getDetailMedicineById(medicineId) {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/medicines/${medicineId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                // Jika respons tidak ok, tangani kesalahan
                const errorResponse = await response.json();
                throw new Error(errorResponse.msg || 'Gagal mengambil detail obat');
            }

            const medicineDetail = await response.json();
            return medicineDetail;
        } catch (error) {
            console.error(error);
            // Tangani kesalahan dengan tepat, misalnya dengan menampilkan pesan kesalahan kepada pengguna
            return null;
        }
    }

    // Metode untuk memperbarui data obat yang ada
    static async updateMedicine(medicineId, medicineData, accessToken) {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/medicines/${medicineId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`, // Tambahkan token akses di sini jika diperlukan
                },
                body: JSON.stringify(medicineData),
            });

            const responseJson = await response.json();

            if (!response.ok) {
                throw new Error(responseJson.msg || 'Gagal memperbarui obat');
            }

            return responseJson;
        } catch (error) {
            console.error(error);
            // Tangani kesalahan dengan tepat, misalnya dengan menampilkan pesan kesalahan kepada pengguna
            return null;
        }
    }

    // Metode untuk menghapus entri obat berdasarkan ID
    static async deleteMedicineById(medicineId, accessToken) {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/medicines/${medicineId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`, // Tambahkan token akses di sini jika diperlukan
                },
            });

            const responseJson = await response.json();

            if (!response.ok) {
                throw new Error(responseJson.msg || 'Gagal menghapus obat');
            }

            return responseJson;
        } catch (error) {
            console.error(error);
            // Tangani kesalahan dengan tepat, misalnya dengan menampilkan pesan kesalahan kepada pengguna
            return null;
        }
    }
}

export default TheHealthcareSourceMedicine;
