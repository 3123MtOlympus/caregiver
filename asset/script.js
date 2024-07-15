
        const reviewsContainer = document.getElementById('reviews-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitReviewBtn = document.getElementById('submit-review');
        const modal = document.getElementById('modal');
        const closeModalBtn = document.getElementById('close-modal');
        let scrollAmount = 0;

        function scrollReviews(direction) {
            const containerWidth = reviewsContainer.offsetWidth;
            const scrollStep = containerWidth / 3; // Adjust to show 3 reviews at a time
            if (direction === 'next') {
                scrollAmount += scrollStep;
                if (scrollAmount > reviewsContainer.scrollWidth - containerWidth) {
                    scrollAmount = reviewsContainer.scrollWidth - containerWidth;
                }
            } else if (direction === 'prev') {
                scrollAmount -= scrollStep;
                if (scrollAmount < 0) {
                    scrollAmount = 0;
                }
            }
            reviewsContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }

        function addReview() {
            const reviewText = document.getElementById('new-review').value;
            if (reviewText.trim() === '') return;

            const newReview = document.createElement('div');
            newReview.classList.add('review');
            const timestamp = new Date().toLocaleString();
            newReview.innerHTML = `<p>${reviewText}</p><small>Submitted on: ${timestamp}</small>`;
            reviewsContainer.prepend(newReview);
            document.getElementById('new-review').value = '';

            // Show modal
            modal.style.display = 'flex';
        }

        nextBtn.addEventListener('click', () => scrollReviews('next'));
        prevBtn.addEventListener('click', () => scrollReviews('prev'));
        submitReviewBtn.addEventListener('click', addReview);
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

       // Close the modal when clicking outside of the modal content
       window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });