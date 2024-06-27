// Function to show success message popup
export function showSuccessMessage(message) {
    const popup = document.createElement('div');
    popup.className = 'popup success';
    popup.textContent = message;
  
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.classList.add('show');
    }, 50);
  
    setTimeout(() => {
      popup.classList.remove('show');
      setTimeout(() => {
        popup.remove();
      }, 300);
    }, 3000); // Hide after 3 seconds
  }
  
  // Function to show error message popup
  export function showErrorMessage(message) {
    const popup = document.createElement('div');
    popup.className = 'popup error';
    popup.textContent = message;
  
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.classList.add('show');
    }, 50);
  
    setTimeout(() => {
      popup.classList.remove('show');
      setTimeout(() => {
        popup.remove();
      }, 300);
    }, 3000); // Hide after 3 seconds
  }
  