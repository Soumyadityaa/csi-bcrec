document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.testimonial-slide');
    const slides = document.querySelectorAll('.testimonial-item');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const slideWidth = slides[0].clientWidth;
        slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    setInterval(showNextSlide, 2000); // Change slide every 3 seconds
});
