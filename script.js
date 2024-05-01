// Disable right-click and text selection
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Update footer with current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Open contact details page on button click
document.getElementById('contact-button').addEventListener('click', function() {
    window.open('contact-details.html', '_blank');
});