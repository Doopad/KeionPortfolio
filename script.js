document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Check if fields are empty
    if (!name || !email || !message) {
        alert('Please fill out all fields!');
        e.preventDefault();  // Prevent form submission
    } else {
        alert('Thank you for your message, ' + name + '!');
    }
});
