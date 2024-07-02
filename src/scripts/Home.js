document.addEventListener('DOMContentLoaded', function() {
    const showcaseButton = document.getElementById('getProductBtn');
    const learnMoreButton = document.getElementById('learnMoreBtn');
    const demoButton = document.getElementById('getDemoBtn');

    // Smooth scrolling for button clicks
    showcaseButton.addEventListener('click', function() {
        document.querySelector('.offer-section').scrollIntoView({ behavior: 'smooth' });
    });

    learnMoreButton.addEventListener('click', function() {
        document.querySelector('.how-it-works-section').scrollIntoView({ behavior: 'smooth' });
    });

    demoButton.addEventListener('click', function() {
        document.querySelector('.cta-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Sign up and Log in button redirects
    document.getElementById('signUpBtn').addEventListener('click', function() {
        window.location.href = 'signup.html';
    });
    document.getElementById('logInBtn').addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});
