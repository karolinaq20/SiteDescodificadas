
{
    function flipCard(button) {
        var card = button.closest('.card');
        card.classList.toggle('card-flip');
    }

    document.querySelector('.next').addEventListener('click', function () {
        changeSlide(1);
    });

    document.querySelector('.prev').addEventListener('click', function () {
        changeSlide(-1);
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    function changeSlide(direction) {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
    }
    
    function autoSlide() {
        changeSlide(1);
        setTimeout(autoSlide, 3000); 
    }
    
    autoSlide();
    
};
