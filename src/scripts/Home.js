import '../style/home.css';
import ThePalmSourceUser from './data/sawit-source-user';

document.addEventListener('DOMContentLoaded', function() {
    function showContent(targetId) {
        document.querySelectorAll('.content-section').forEach(section => {
            if (section.id === targetId + 'Content') {
                section.classList.add('active');
                if (targetId === 'monitoring') {
                    setTimeout(renderCharts, 0); // Pastikan renderCharts dipanggil setelah DOM diperbarui
                }
            } else {
                section.classList.remove('active');
            }
        });
    }

    function updateSidebarActiveLink(targetId) {
        document.querySelectorAll('.sidebar a').forEach(link => {
            if (link.getAttribute('data-target') === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        document.querySelectorAll('.sidebar .submenu a').forEach(subLink => {
            if (subLink.getAttribute('data-target') === targetId) {
                subLink.classList.add('active');
            } else {
                subLink.classList.remove('active');
            }
        });
    }

    document.querySelectorAll('.toggle-menu').forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            showContent(targetId);
            updateSidebarActiveLink(targetId);
            window.location.hash = targetId; // Update URL hash
        });
    });

    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        showContent(initialHash);
        updateSidebarActiveLink(initialHash);
    }

    // Fungsi untuk logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        // Implementasikan logika logout di sini, misalnya hapus sesi pengguna
        // dan kemudian alihkan ke halaman index.html
        // Alihkan ke halaman index.html setelah logout
        window.location.href = 'index.html';
        localStorage.removeItem('accessToken');
    });

    // Fungsi untuk mengambil data dari API
    async function fetchData() {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('http://localhost:5000/data/15m',{
                method : 'GET',
                headers : {
                    'Authorization': `Bearer ${accessToken}`, // Sertakan token akses dalam header autorisasi
                    'Content-Type': 'application/json',
                }
            });
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

// Periksa apakah token akses masih valid
const user = await ThePalmSourceUser.getUser();
if (!user) {
    window.location.href = "index.html";
}