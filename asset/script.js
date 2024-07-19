// Smooth Scroll for Navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Book Consultation Button
document.querySelector('.book-btn').addEventListener('click', function() {
    alert('Book Consultation button clicked!');
});

// Event Invite Buttons
document.querySelectorAll('.invite-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('You have successfully received the invite!');
    });
});

// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    this.reset();
});


// Modal for Booking Consultation
const modal = document.getElementById("booking-modal");
const btn = document.getElementById("book-consultation-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
