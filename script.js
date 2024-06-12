// Add event listeners to navigation menu items
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add active class to current link
        document.querySelectorAll('nav ul li a').forEach((link) => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// Add event listener to login form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate login credentials
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid login credentials!');
    }
});

// Add event listener to cart checkout button
document.querySelector('button[type="button"]').addEventListener('click', () => {
    alert('Checkout successful!');
});