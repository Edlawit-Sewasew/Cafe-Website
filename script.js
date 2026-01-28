<<<<<<< HEAD
console.log("Site JavaScript is connected");
=======
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const nameField = document.getElementById("name");
            const emailField = document.getElementById("email");
            const messageField = document.getElementById("message");
            
            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const message = messageField.value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields before submitting.");
                return;
            }
            
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset();
        });
    }
});
>>>>>>> b5898411235b17ab5cb59847ab38fdfdd31073b8
