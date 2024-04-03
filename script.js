// Add any additional JavaScript functionality you need

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// JavaScript to handle social media links
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('instagram').addEventListener('click', function () {
        window.open('https://www.instagram.com/your-instagram-username', '_blank');
    });

    document.getElementById('snapchat').addEventListener('click', function () {
        window.open('https://www.snapchat.com/add/your-snapchat-username', '_blank');
    });

    document.getElementById('linkedin').addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/your-linkedin-username', '_blank');
    });
});

