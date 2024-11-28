const form = document.getElementById('registrationForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const terms = document.getElementById('terms').checked;

    // Validate inputs
    if (!name || !email || !password || !confirmPassword) {
        showError('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        showError('Please enter a valid email address.');
        return;
    }

    if (password.length < 8) {
        showError('Password must be at least 8 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }

    if (!terms) {
        showError('You must agree to the Terms and Conditions.');
        return;
    }

    // Success: Clear error and submit form
    errorMessage.textContent = '';
    alert('Registration successful!');
    form.reset();
});

// function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// function to show error message
function showError(message) {
    errorMessage.textContent = message;
}
