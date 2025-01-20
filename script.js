document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Example validation (you can customize this)
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
    } else {
        errorMessage.textContent = '';
        alert('Login successful');
        // Here, you can add your logic to handle login, like sending data to a server
    }
});
