// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());

    fetch(this.action, {
        method: 'POST',
        body: JSON.stringify(formObject),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-message').textContent = 'Message sent successfully!';
        this.reset();
    })
    .catch(error => {
        document.getElementById('response-message').textContent = 'An error occurred. Please try again.';
        console.error('Error:', error);
    });
});
