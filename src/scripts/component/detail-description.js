class DetailDescription extends HTMLElement {
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
           <h3>Pengantar</h3>
    
    <p>Industri kelapa sawit merupakan sebuah jaringan kompleks yang melibatkan berbagai aktor, mulai dari petani kecil hingga perusahaan multinasional. Organisasi-organisasi ini memiliki peran penting dalam memproduksi, mengolah, dan memasarkan minyak sawit ke seluruh dunia.</p>

    <h3>Jenis-jenis Organisasi</h3>
    <p>Secara umum, organisasi perusahaan kelapa sawit dapat dikategorikan menjadi beberapa jenis:</p>

    <h4>Perusahaan Perkebunan:</h4>
    <ul>
        <li><strong>Petani Kecil:</strong> Mereka merupakan tulang punggung produksi kelapa sawit di banyak negara. Mengelola lahan yang relatif kecil dan seringkali tergabung dalam koperasi atau kelompok tani, petani kecil berperan signifikan dalam rantai pasok.</li>
        <li><strong>Perusahaan Perkebunan Besar:</strong> Perusahaan-perusahaan besar ini memiliki perkebunan kelapa sawit yang luas dan modern. Mereka sering terintegrasi secara vertikal, mulai dari pembibitan hingga pemasaran produk akhir.</li>
    </ul>

    <h4>Pengolah Minyak Sawit (PKS):</h4>
    <ul>
        <li><strong>Pabrik Pengolahan:</strong> Pabrik-pabrik ini mengubah buah kelapa sawit menjadi minyak mentah dan produk turunan lainnya.</li>
    </ul>

    <h4>Pedagang Besar:</h4>
    <ul>
        <li><strong>Perusahaan Dagang:</strong> Mereka membeli minyak sawit mentah dari PKS dan menjualnya kepada produsen produk akhir seperti makanan, kosmetik, dan biofuel.</li>
    </ul>

    <h4>Asosiasi Industri:</h4>
    <ul>
        <li><strong>Organisasi Perwakilan:</strong> Mereka mewakili kepentingan perusahaan-perusahaan kelapa sawit dalam skala nasional maupun internasional. Contohnya adalah Dewan Negara-Negara Penghasil Minyak Kelapa Sawit (Council of Palm Oil Producing Countries/CPOPC).</li>
    </ul>

    <h3>Tantangan dan Isu Kontemporer</h3>
    <p>Industri kelapa sawit menghadapi berbagai tantangan dan isu, antara lain:</p>
    <ul>
        <li><strong>Keberlanjutan:</strong> Tekanan yang semakin besar untuk memproduksi minyak sawit secara berkelanjutan, dengan meminimalkan dampak negatif terhadap lingkungan dan sosial.</li>
        <li><strong>Perubahan Iklim:</strong> Perubahan iklim berpotensi mempengaruhi produktivitas perkebunan kelapa sawit.</li>
        <li><strong>Permintaan Global:</strong> Permintaan minyak sawit terus meningkat seiring dengan pertumbuhan populasi dan perubahan pola konsumsi.</li>
        <li><strong>Regulasi:</strong> Peraturan pemerintah yang semakin ketat terkait pengelolaan perkebunan kelapa sawit dan produksi minyak sawit.</li>
    </ul>

    <h3>Peran Penting Organisasi</h3>
    <p>Organisasi perusahaan kelapa sawit memiliki peran penting dalam mengatasi tantangan-tantangan tersebut. Beberapa peran penting mereka antara lain:</p>
    <ul>
        <li><strong>Pengembangan Teknologi:</strong> Investasi dalam penelitian dan pengembangan untuk meningkatkan produktivitas dan efisiensi produksi.</li>
        <li><strong>Implementasi Praktik Berkelanjutan:</strong> Menerapkan praktik-praktik pertanian berkelanjutan, seperti sertifikasi Roundtable on Sustainable Palm Oil (RSPO).</li>
        <li><strong>Kemitraan dengan Pemangku Kepentingan:</strong> Membangun kemitraan dengan pemerintah, masyarakat sipil, dan organisasi internasional untuk mengatasi isu-isu sosial dan lingkungan.</li>
        <li><strong>Promosi Minyak Sawit:</strong> Melakukan promosi minyak sawit sebagai komoditas yang berkelanjutan dan bermanfaat bagi masyarakat.</li>
    </ul>

    <h3>Contoh Organisasi Terkemuka</h3>
    <p>Beberapa contoh organisasi perusahaan kelapa sawit terkemuka di dunia antara lain:</p>
    <ul>
        <li><strong>Wilmar International:</strong> Salah satu perusahaan kelapa sawit terbesar di dunia, berbasis di Singapura.</li>
        <li><strong>Golden Agri-Resources:</strong> Perusahaan kelapa sawit terintegrasi yang memiliki perkebunan dan pabrik pengolahan di berbagai negara.</li>
        <li><strong>Musim Mas:</strong> Perusahaan kelapa sawit Indonesia yang fokus pada produksi minyak sawit berkelanjutan.</li>
    </ul>

    <h3>Kesimpulan</h3>
    <p>Organisasi perusahaan kelapa sawit memainkan peran krusial dalam memenuhi permintaan minyak sawit global. Namun, mereka juga harus menghadapi berbagai tantangan dan isu yang kompleks. Untuk memastikan keberlanjutan industri ini, diperlukan kerja sama yang erat antara semua pemangku kepentingan.</p>

        `;
    }
}

customElements.define('detail-description', DetailDescription);
