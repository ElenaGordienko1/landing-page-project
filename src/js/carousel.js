const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));

slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    carouselWrapper.appendChild(clone);
});

let offset = 0;
const speed = 0.5; 

function animateCarousel() {
    offset += speed;

    const totalWidth = carouselWrapper.scrollWidth / 2;

    carouselWrapper.style.transform = `translateX(-${offset}px)`;

    if (offset >= totalWidth) {
    offset = 0;
    carouselWrapper.style.transform = `translateX(0)`;
    }

    requestAnimationFrame(animateCarousel);
}

animateCarousel();
