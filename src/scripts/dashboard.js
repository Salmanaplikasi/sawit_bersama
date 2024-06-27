// Definisikan class 'Dashboard' yang merupakan custom element HTML
class Dashboard extends HTMLElement {
  // Fungsi yang dipanggil saat elemen terhubung ke DOM
  connectedCallback() {
      // Menetapkan innerHTML dari elemen dengan struktur HTML yang diinginkan
      this.innerHTML = `
      <div class="table-container">
      <h1>Kelola Data Obat</h1>
      <div class="search-add-container">
        <div class="search-bar">
          <input type="text" placeholder="Cari obat" />
          <button class="search-btn">
            <i class="fa fa-search" style="font-size: 18px"></i>
          </button>
        </div>
        <button class="add-btn">+ Tambah Obat</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nama Obat</th>
            <th>Id Obat</th>
            <th>Class Therapy</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nama Obat</td>
            <td>0000000000</td>
            <td>Sakit</td>
            <td>
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Hapus</button>
            </td>
          </tr>
          <!-- Repeat above <tr> for more rows -->
          <tr>
            <td>Nama Obat</td>
            <td>0000000000</td>
            <td>Sakit</td>
            <td>
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Hapus</button>
            </td>
          </tr>
          <!-- Repeat above <tr> for more rows -->
        </tbody>
      </table>

      <div class="pagination">
        <span>Showing 1 - 10 results of 298</span>
        <div class="pagination-buttons">
          <button>&lt;</button>
          <span>Page 01</span>
          <button>&gt;</button>
        </div>
      </div>
    </div>
      `;
  }
}

// Definisikan class 'TambahObat' yang merupakan custom element HTML
class TambahObat extends HTMLElement {
  // Fungsi yang dipanggil saat elemen terhubung ke DOM
  connectedCallback() {
      // Menetapkan innerHTML dari elemen dengan struktur HTML yang diinginkan
      this.innerHTML = `
      <div class="container">
      <h1>Kelola Data Obat</h1>
      <h2>Tambah Obat</h2>
      <form>
        <label for="nama-obat">Nama Obat</label>
        <input type="text" id="nama-obat" name="nama-obat" />

        <label for="class_therapy">Class Therapy</label>
        <input type="text" id="class_therapy" name="class_therapy" />

        <label for="subclass_therapy1">Subclass Therapy 1</label>
        <input type="text" id="indikasi-umum" name="indikasi-umum" />

        <label for="subclass_therapy2">Subclass Therapy 2</label>
        <input type="text" id="subclass_therapy2" name="subclass_therapy2" />

        <label for="subclass_therapy3">Subclass Therapy 3</label>
        <input type="text" id="subclass_therapy3" name="subclass_therapy3" />

        <label for="power">Power</label>
        <input type="text" id="power" name="power" />

        <label for="unit">Unit</label>
        <input type="text" id="unit" name="unit" />

        <label for="type">Type</label>
        <input type="text" id="type" name="type" />

        <label for="composition">Composition</label>
        <input type="text" id="composition" name="composition" />

        <label for="drug_restrictions">Drug Restrictions</label>
        <input type="text" id="drug_restrictions" name="drug_restrictions" />

        <label for="maximum_prescription">Maximum Prescription</label>
        <input
          type="text"
          id="maximum_prescription"
          name="maximum_prescription"
        />

        <div class="buttons">
          <button type="submit" class="btn-tambah">Tambah</button>
          <button type="button" class="btn-batal">Batal</button>
        </div>
      </form>
    </div>
      `;
  }
}

// Definisikan class 'EditObat' yang merupakan custom element HTML
class EditObat extends HTMLElement {
  // Fungsi yang dipanggil saat elemen terhubung ke DOM
  connectedCallback() {
      // Menetapkan innerHTML dari elemen dengan struktur HTML yang diinginkan
      this.innerHTML = `
      <div class="container">
      <h1>Kelola Data Obat</h1>
      <h2>Edit Obat</h2>
      <form>
        <label for="nama-obat">Nama Obat</label>
        <input type="text" id="nama-obat" name="nama-obat" />

        <label for="class_therapy">Class Therapy</label>
        <input type="text" id="class_therapy" name="class_therapy" />

        <label for="subclass_therapy1">Subclass Therapy 1</label>
        <input type="text" id="indikasi-umum" name="indikasi-umum" />

        <label for="subclass_therapy2">Subclass Therapy 2</label>
        <input type="text" id="subclass_therapy2" name="subclass_therapy2" />

        <label for="subclass_therapy3">Subclass Therapy 3</label>
        <input type="text" id="subclass_therapy3" name="subclass_therapy3" />

        <label for="power">Power</label>
        <input type="text" id="power" name="power" />

        <label for="unit">Unit</label>
        <input type="text" id="unit" name="unit" />

        <label for="type">Type</label>
        <input type="text" id="type" name="type" />

        <label for="composition">Composition</label>
        <input type="text" id="composition" name="composition" />

        <label for="drug_restrictions">Drug Restrictions</label>
        <input type="text" id="drug_restrictions" name="drug_restrictions" />

        <label for="maximum_prescription">Maximum Prescription</label>
        <input
          type="text"
          id="maximum_prescription"
          name="maximum_prescription"
        />

        <div class="buttons">
          <button type="submit" class="btn-simpan">Simpan</button>
          <button type="button" class="btn-batal">Batal</button>
        </div>
      </form>
    </div>
      `;
  }
}

// Mendaftarkan custom elements ke browser
customElements.define("dashboard", Dashboard);
customElements.define("tambah-obat", TambahObat);
customElements.define("edit-obat", EditObat);
