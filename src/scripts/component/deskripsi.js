class Description extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                h3 {
                    color: #333;
                    font-size: 1.2em;
                }
                p {
                    font-size: 1em;
                    line-height: 1.5;
                }
                ol {
                    margin-left: 20px;
                }
                ul {
                    margin-left: 20px;
                }
                li {
                    margin-bottom: 10px;
                }
            </style>
            <div>
                <h3>Pengantar</h3>
                <p>Industri minyak kelapa sawit telah mengalami pertumbuhan yang pesat, namun diiringi oleh berbagai tantangan global seperti deforestasi, pelanggaran hak asasi manusia, dan isu keberlanjutan. Menyadari implikasi ini, kelompok perusahaan minyak kelapa sawit telah mengadopsi langkah-langkah proaktif untuk meningkatkan praktik bisnis mereka guna memastikan keberlanjutan dan tanggung jawab sosial serta lingkungan.</p>
                <h3>Mengapa Kelompok Perusahaan Perlu Berubah?</h3>
                <ol>
                    <li><strong>Tekanan Konsumen</strong>: Kesadaran konsumen terhadap dampak lingkungan dan sosial dari produk yang mereka konsumsi meningkat secara signifikan. Konsumen semakin cenderung memilih produk yang berasal dari sumber berkelanjutan. Penelitian menunjukkan bahwa konsumen modern, terutama di pasar negara maju, lebih memperhatikan label keberlanjutan dan asal usul produk yang mereka beli.</li>
                    <li><strong>Regulasi Pemerintah</strong>: Pemerintah di berbagai negara penghasil minyak kelapa sawit telah memberlakukan regulasi yang lebih ketat terkait produksi minyak sawit. Ini termasuk persyaratan untuk mendapatkan sertifikasi keberlanjutan dan mematuhi praktik pertanian yang ramah lingkungan. Contohnya, Indonesia mengharuskan perusahaan minyak sawit untuk mematuhi standar ISPO (Indonesian Sustainable Palm Oil).</li>
                    <li><strong>Investasi Berkelanjutan</strong>: Investor institusional semakin mengalihkan dana mereka ke perusahaan yang mempraktikkan bisnis yang bertanggung jawab dan berkelanjutan. Hal ini didorong oleh pandangan bahwa keberlanjutan lingkungan dan sosial adalah kunci untuk investasi jangka panjang yang stabil dan menguntungkan.</li>
                </ol>
                <h3>Langkah-langkah Proaktif yang Dilakukan</h3>
                <ol>
                    <li><strong>Sertifikasi Keberlanjutan</strong>:
                        <ul>
                            <li><strong>RSPO (Roundtable on Sustainable Palm Oil)</strong>: Sertifikasi ini diakui secara global sebagai standar keberlanjutan yang komprehensif, mencakup aspek lingkungan, sosial, dan ekonomi. Perusahaan yang mendapatkan sertifikasi RSPO harus mematuhi prinsip dan kriteria ketat yang memastikan praktik produksi yang bertanggung jawab.</li>
                            <li><strong>Sertifikasi Lain</strong>: Selain RSPO, terdapat sertifikasi lain seperti ISPO dan MSPO (Malaysian Sustainable Palm Oil) yang menetapkan standar keberlanjutan khusus di negara masing-masing.</li>
                        </ul>
                    </li>
                    <li><strong>Peningkatan Praktik Pertanian</strong>:
                        <ul>
                            <li><strong>Pengurangan Deforestasi</strong>: Perusahaan-perusahaan telah berkomitmen untuk menghentikan praktik deforestasi dan melindungi hutan primer serta kawasan bernilai konservasi tinggi.</li>
                            <li><strong>Pelestarian Keanekaragaman Hayati</strong>: Upaya ini meliputi perlindungan spesies endemik dan habitat mereka di sekitar area perkebunan.</li>
                            <li><strong>Pengelolaan Lahan Gambut</strong>: Praktik ini mencakup teknik pengelolaan lahan gambut yang bertanggung jawab untuk mencegah emisi gas rumah kaca, seperti menghindari pengeringan lahan gambut dan memulihkan lahan yang rusak.</li>
                        </ul>
                    </li>
                    <li><strong>Keterlibatan Masyarakat</strong>:
                        <ul>
                            <li><strong>Program Kesejahteraan Masyarakat</strong>: Perusahaan menjalankan program yang meningkatkan kualitas hidup masyarakat lokal melalui penyediaan layanan pendidikan, kesehatan, dan infrastruktur.</li>
                            <li><strong>Dialog dengan Stakeholder</strong>: Membangun komunikasi yang konstruktif dengan berbagai pemangku kepentingan, termasuk LSM, pemerintah, dan komunitas lokal untuk memastikan bahwa semua suara didengar dan pertimbangan mereka diakomodasi.</li>
                        </ul>
                    </li>
                    <li><strong>Transparansi</strong>:
                        <ul>
                            <li><strong>Pelaporan Keberlanjutan</strong>: Perusahaan-perusahaan diwajibkan untuk melaporkan kinerja keberlanjutan mereka secara teratur dan transparan, mencakup dampak lingkungan, sosial, dan ekonomi dari operasional mereka.</li>
                            <li><strong>Sistem Pelacakan</strong>: Implementasi teknologi untuk melacak sumber minyak sawit guna memastikan bahwa produk yang dijual memenuhi standar keberlanjutan yang ditetapkan.</li>
                        </ul>
                    </li>
                </ol>
                <h3>Contoh Kelompok Perusahaan yang Proaktif</h3>
                <ol>
                    <li><strong>Wilmar International</strong>: Wilmar International adalah salah satu perusahaan minyak sawit terbesar di dunia. Perusahaan ini telah berkomitmen untuk mencapai 100% sertifikasi RSPO pada tahun 2020 dan telah mengadopsi kebijakan tanpa deforestasi serta tanpa lahan gambut dalam operasionalnya.</li>
                    <li><strong>Golden Agri-Resources</strong>: Golden Agri-Resources (GAR) telah melakukan berbagai upaya untuk meningkatkan keberlanjutan produksi minyak sawit, termasuk investasi dalam teknologi baru dan pengembangan kapasitas petani kecil. GAR juga menerapkan kebijakan keberlanjutan yang ketat dan bekerja sama dengan LSM untuk memastikan praktik yang bertanggung jawab.</li>
                    <li><strong>Musim Mas</strong>: Perusahaan Indonesia ini dikenal dengan komitmennya terhadap praktik pertanian berkelanjutan dan keterlibatan masyarakat. Musim Mas telah menerapkan berbagai inisiatif untuk mengurangi dampak lingkungan dan meningkatkan kesejahteraan masyarakat lokal.</li>
                </ol>
                <h3>Tantangan yang Dihadapi</h3>
                <ol>
                    <li><strong>Kompleksitas Masalah</strong>: Masalah keberlanjutan dalam industri minyak sawit sangat kompleks dan memerlukan pendekatan holistik. Tantangan ini mencakup berbagai aspek seperti perlindungan lingkungan, hak asasi manusia, dan kesejahteraan ekonomi yang semuanya harus diatasi secara simultan.</li>
                    <li><strong>Biaya Implementasi</strong>: Implementasi praktik keberlanjutan membutuhkan investasi yang besar, baik dalam bentuk teknologi, pelatihan, maupun infrastruktur. Perusahaan perlu menyeimbangkan antara biaya yang dikeluarkan dan manfaat jangka panjang yang diperoleh dari praktik tersebut.</li>
                    <li><strong>Perbedaan Standar</strong>: Adanya berbagai standar keberlanjutan yang berbeda dapat menyebabkan kebingungan dan kesulitan dalam verifikasi. Harmonisasi standar internasional dan nasional diperlukan untuk mempermudah penerapan dan memastikan konsistensi dalam praktik keberlanjutan.</li>
                </ol>
                <h3>Kesimpulan</h3>
                <p>Kelompok perusahaan minyak kelapa sawit telah menunjukkan komitmen yang kuat untuk mengatasi permasalahan global yang terkait dengan industri ini. Langkah-langkah proaktif yang mereka ambil, seperti sertifikasi keberlanjutan, peningkatan praktik pertanian, keterlibatan masyarakat, dan transparansi, adalah bukti nyata dari upaya mereka. Namun, masih banyak pekerjaan yang harus dilakukan untuk mencapai tujuan keberlanjutan yang lebih tinggi. Kolaborasi antara perusahaan, pemerintah, LSM, dan masyarakat sangat penting untuk mencapai perubahan yang berkelanjutan dan memastikan masa depan industri minyak kelapa sawit yang lebih baik.</p>
            </div>
        `;
    }
}

customElements.define('description-palm-oil', Description);
