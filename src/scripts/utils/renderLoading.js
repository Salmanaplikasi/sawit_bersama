// renderLoading.js

// Fungsi untuk membuat elemen loading
const renderLoading = () => {
    const loadingContainer = document.createElement('div');
    loadingContainer.classList.add('loading-container');
    loadingContainer.innerHTML = `
      <div class="spinner"></div>
      <p>Loading...</p>
    `;
    return loadingContainer;
  };
  
  // Export fungsi renderLoading agar bisa diimpor di file lain
  export default renderLoading;
  