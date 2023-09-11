// script.js

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add AJAX code here to handle the form submission asynchronously
        // For this example, we'll just display a success message
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
    });
});
