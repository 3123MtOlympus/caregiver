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

// Review Navigation and Submission
let currentReviewIndex = 0;
const reviews = [
    "Review 1: Lorem ipsum dolor sit amet.",
    "Review 2: Consectetur adipiscing elit.",
    "Review 3: Sed do eiusmod tempor incididunt.",
    "Review 4: Ut labore et dolore magna aliqua.",
    "Review 5: Ut enim ad minim veniam.",
    "Review 6: Quis nostrud exercitation ullamco.",
    "Review 7: Laboris nisi ut aliquip ex ea.",
    "Review 8: Commodo consequat.",
    "Review 9: Duis aute irure dolor in reprehenderit."
];

function showReview(index) {
    const reviewContainer = document.getElementById('reviews-container');
    reviewContainer.innerHTML = reviews[index];
}

document.getElementById('prev-btn').addEventListener('click', function() {
    if (currentReviewIndex > 0) {
        currentReviewIndex--;
        showReview(currentReviewIndex);
    }
});

document.getElementById('next-btn').addEventListener('click', function() {
    if (currentReviewIndex < reviews.length - 1) {
        currentReviewIndex++;
        showReview(currentReviewIndex);
    }
});

document.getElementById('submit-review').addEventListener('click', function() {
    const name = document.getElementById('new-name').value;
    const time = document.getElementById('new-time').value;
    const review = document.getElementById('new-review').value;
    if (name && time && review) {
        reviews.push(`${name} (${time}): ${review}`);
        alert('Your review has been posted successfully!');
        document.getElementById('new-name').value = '';
        document.getElementById('new-time').value = '';
        document.getElementById('new-review').value = '';
    } else {
        alert('Please fill out all fields.');
    }
});

// Modal
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});
