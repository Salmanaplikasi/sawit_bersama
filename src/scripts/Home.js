import '../style/home.css';

document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for sidebar menu items
    document.querySelectorAll('.toggle-menu').forEach(element => {
        element.addEventListener('click', function(event) {
            const targetId = this.getAttribute('data-target');
            toggleMenu(targetId);
        });
    });

    // Fungsi untuk logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        // Implementasikan logika logout di sini, misalnya hapus sesi pengguna
        // dan kemudian alihkan ke halaman index.html

        // Contoh logika untuk menghapus sesi pengguna, misalnya menggunakan localStorage atau sessionStorage
        // localStorage.removeItem('isLoggedIn');

        // Alihkan ke halaman index.html setelah logout
        window.location.href = 'index.html';
    });

    // Fungsi untuk mengambil data dari API
    async function fetchData() {
        try {
            const response = await fetch('http://93.127.185.37/data/15m');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    // Fungsi untuk merender grafik menggunakan Chart.js
    async function renderCharts() {
        const data = await fetchData();
        if (!data) return;

        // Ambil timestamp sebagai label
        const labels = data.map(item => item.timestamp);

        // Ambil nama dataset secara dinamis, kecuali 'latitude', 'longitude', dan 'publisher'
        const excludedKeys = ['latitude', 'longitude', 'publisher'];
        const datasetKeys = Object.keys(data[0])
            .filter(key => !excludedKeys.includes(key) && key !== 'timestamp');

        // Kontainer untuk grafik
        const chartsContainer = document.getElementById('charts-container');

        // Hapus kontainer sebelumnya jika ada
        chartsContainer.innerHTML = '';

        // Render satu grafik per dataset
        datasetKeys.forEach((key, index) => {
            // Buat elemen canvas
            const canvas = document.createElement('canvas');
            canvas.id = `chart${index + 1}`;
            chartsContainer.appendChild(canvas);

            // Render grafik pada elemen canvas yang baru dibuat
            const ctx = canvas.getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: key, // Label dataset sesuai nama dataset
                        data: data.map(item => item[key] || 0), // Ambil nilai untuk dataset ini
                        borderColor: getRandomColor(), // Warna border acak
                        backgroundColor: getRandomColor(0.2), // Warna background acak
                        borderWidth: 2,
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Timestamp'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Value'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += context.parsed.y.toFixed(2);
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        });
    }

    // Fungsi untuk menghasilkan warna acak
    function getRandomColor(alpha = 1) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Panggil fungsi untuk merender grafik
    renderCharts();
});
