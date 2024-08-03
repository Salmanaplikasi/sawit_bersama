export function showConfirmationModal(message) {
    return new Promise((resolve) => {
      // Create modal elements
      const modalOverlay = document.createElement('div');
      modalOverlay.className = 'modal-overlay';
  
      const modal = document.createElement('div');
      modal.className = 'modal-container';
  
      const modalMessage = document.createElement('p');
      modalMessage.className = 'modal-message';
      modalMessage.textContent = message;
  
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
  
      const yesButton = document.createElement('button');
      yesButton.className = 'modal-button yes';
      yesButton.textContent = 'Yes';
      yesButton.addEventListener('click', () => {
        resolve(true);
        closeModal();
      });
  
      const noButton = document.createElement('button');
      noButton.className = 'modal-button no';
      noButton.textContent = 'No';
      noButton.addEventListener('click', () => {
        resolve(false);
        closeModal();
      });
  
      buttonContainer.appendChild(yesButton);
      buttonContainer.appendChild(noButton);
  
      modal.appendChild(modalMessage);
      modal.appendChild(buttonContainer);
      modalOverlay.appendChild(modal);
      document.body.appendChild(modalOverlay);
  
      // Calculate center position relative to window
      function calculateModalPosition() {
        const rect = modal.getBoundingClientRect();
        const top = (window.innerHeight - rect.height) / 2;
        const left = (window.innerWidth - rect.width) / 2;
        modal.style.top = `${top}px`;
        modal.style.left = `${left}px`;
      }
  
      // Function to handle window resize
      function handleWindowResize() {
        calculateModalPosition();
      }
  
      // Show modal and overlay
      modal.classList.add('show');
      modalOverlay.classList.add('show');
  
      // Calculate modal position initially
      calculateModalPosition();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleWindowResize);
  
      // Function to close modal
      function closeModal() {
        modal.classList.remove('show');
        modalOverlay.classList.remove('show');
        // Remove event listener for window resize
        window.removeEventListener('resize', handleWindowResize);
        setTimeout(() => {
          document.body.removeChild(modalOverlay);
        }, 300);
      }
    });
  }