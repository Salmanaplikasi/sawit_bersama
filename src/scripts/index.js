import "/src/style/styles.css"

document.getElementById('signUpBtn').addEventListener('click', function() {
    window.location.href = '#';
});
document.getElementById('logInBtn').addEventListener('click', function() {
    window.location.href = '#';
});
document.getElementById('getProductBtn').addEventListener('click', function() {
    window.location.href = '#';
});
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    window.location.href = '#';
});
document.getElementById('getDemoBtn').addEventListener('click', function() {
    window.location.href = '#';
});

document.querySelectorAll('ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});