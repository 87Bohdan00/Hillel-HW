class Slider {
    constructor() {
        this.carousel = document.querySelector('#carouselExampleIndicators');
        this.carouselItems = this.carousel.querySelectorAll('.carousel-item');
        this.activeIndex = 0;
    }

    nextSlide() {
        this.carouselItems[this.activeIndex].classList.remove('active');
        this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
        this.carouselItems[this.activeIndex].classList.add('active');
    }

    prevSlide() {
        this.carouselItems[this.activeIndex].classList.remove('active');
        if (this.activeIndex === 0) {
            this.activeIndex = 3;
        }
        this.activeIndex = (this.activeIndex - 1) % this.carouselItems.length;
        this.carouselItems[this.activeIndex].classList.add('active');
    }

    lastSlide() {
        this.carouselItems[this.activeIndex].classList.remove('active');
        this.activeIndex = this.carouselItems.length - 1;
        this.carouselItems[this.activeIndex].classList.add('active');
    }

    firstSlide() {
        this.carouselItems[this.activeIndex].classList.remove('active');
        this.activeIndex = 0;
        this.carouselItems[this.activeIndex].classList.add('active');
    }

    openSlideByIndex(number) {
        this.carouselItems[this.activeIndex].classList.remove('active');
        this.activeIndex = number - 1;
        this.carouselItems[this.activeIndex].classList.add('active');
    }

    removeLastSlide() {
        this.carouselItems[this.carouselItems.length - 1].remove();
        if (this.activeIndex === this.carouselItems.length) {
            this.activeIndex = 0;
        }
    }

    removeSlide(number) {
        this.activeIndex = number - 1;
        this.carouselItems[this.activeIndex].remove();
        if (this.carouselItems[0]) {
            this.carouselItems[this.activeIndex].classList.remove('active');
            this.carouselItems[1].classList.add('active');
        }
    }

    addSlide(title, description) {
        const carouselInner = document.querySelector('.carousel-inner');

        const newSlide = document.createElement('div');
        newSlide.classList.add('carousel-item');
        if (this.carouselItems.length === 0) {
            newSlide.classList.add('active');
        }

        const slideContent = document.createElement('div');
        newSlide.appendChild(slideContent);

        const slideTitle = document.createElement('h3');
        slideTitle.textContent = title;
        slideContent.appendChild(slideTitle);

        const slideDesc = document.createElement('p');
        slideDesc.textContent = description;
        slideContent.appendChild(slideDesc);

        carouselInner.appendChild(newSlide);
    }

    insertSlide(number, title, description) {
        const carouselInner = document.querySelector('.carousel-inner');

        const newSlide = document.createElement('div');
        newSlide.classList.add('carousel-item');
        if (this.carouselItems.length === 0) {
            newSlide.classList.add('active');
        }

        const slideContent = document.createElement('div');
        newSlide.appendChild(slideContent);

        const slideTitle = document.createElement('h3');
        slideTitle.textContent = title;
        slideContent.appendChild(slideTitle);

        const slideDesc = document.createElement('p');
        slideDesc.textContent = description;
        slideContent.appendChild(slideDesc);

        if (number >= 0 && number < this.carouselItems.length) {
            const nextSlide = this.carouselItems[number - 1];
            carouselInner.insertBefore(newSlide, nextSlide);
        } else {
            carouselInner.appendChild(newSlide);
        }
    }
}

const slider = new Slider();

// const addSlide = document.getElementById('addSlideForm');
// addSlide.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const slideTitleInput = document.getElementById('slideTitle');
//     const slideDescInput = document.getElementById('slideDescription');
//     const title = slideTitleInput.value;
//     const description = slideDescInput.value;

//     slider.addSlide(title, description);

//     slideTitleInput.value = '';
//     slideDescInput.value = '';
// });

const insertSlide = document.getElementById('addSlideForm');
insertSlide.addEventListener('submit', function (e) {
    e.preventDefault();

    const slideNumberInput = document.getElementById('slideNumber');
    const slideTitleInput = document.getElementById('slideTitle');
    const slideDescInput = document.getElementById('slideDescription');
    const number = parseInt(slideNumberInput.value);
    const title = slideTitleInput.value;
    const description = slideDescInput.value;

    slider.insertSlide(number, title, description);

    slideNumberInput.value = '';
    slideTitleInput.value = '';
    slideDescInput.value = '';
});

// Есть проблема, если обработчик события addSlide не закоментирован
// то insertSlide не работает (введенные данные в title и description не передаются, 
// выводится пустой слайд). Весь интернет облазил, не могу понять в чем проблема.

//slider.nextSlide();
//slider.prevSlide();
//slider.lastSlide();
//slider.firstSlide();
//slider.openSlideByIndex(2);
//slider.removeLastSlide();
//slider.removeSlide(1);