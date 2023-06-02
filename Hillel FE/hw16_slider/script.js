class Slider {
    constructor() {
        this.carousel = document.querySelector('#carouselExampleIndicators');
        this.carouselItems = Array.from(
            this.carousel.querySelectorAll('.carousel-item')
        );
        this.activenumber = 0;
        this.carouselIndicators = Array.from(
            this.carousel.querySelectorAll('.carousel-indicators button')
        );
    }

    nextSlide() {
        this.carouselItems[this.activenumber].classList.remove('active');
        this.activenumber = (this.activenumber + 1) % this.carouselItems.length;
        this.carouselItems[this.activenumber].classList.add('active');
    }

    prevSlide() {
        this.carouselItems[this.activenumber].classList.remove('active');
        if (this.activenumber === 0) {
            this.activenumber = 3;
        }
        this.activenumber = (this.activenumber - 1) % this.carouselItems.length;
        this.carouselItems[this.activenumber].classList.add('active');
    }

    lastSlide() {
        this.carouselItems[this.activenumber].classList.remove('active');
        this.activenumber = this.carouselItems.length - 1;
        this.carouselItems[this.activenumber].classList.add('active');
    }

    firstSlide() {
        this.carouselItems[this.activenumber].classList.remove('active');
        this.activenumber = 0;
        this.carouselItems[this.activenumber].classList.add('active');
    }

    openSlideBynumber(number) {
        this.carouselItems[this.activenumber].classList.remove('active');
        this.activenumber = number - 1;
        this.carouselItems[this.activenumber].classList.add('active');
    }

    removeLastSlide() {
        this.carouselItems[this.carouselItems.length - 1].remove();
        if (this.activenumber === this.carouselItems.length) {
            this.activenumber = 0;
        }
    }

    removeSlide(number) {
        this.activenumber = number - 1;
        this.carouselItems[this.activenumber].remove();
        if (this.carouselItems[0]) {
            this.carouselItems[this.activenumber].classList.remove('active');
            this.carouselItems[1].classList.add('active');
        }
    }

    addSlide(title, description) {
        const carouselInner = this.carousel.querySelector('.carousel-inner');
        const carouselIndicators = this.carousel.querySelector(
            '.carousel-indicators'
        );

        const newSlide = document.createElement('div');
        newSlide.classList.add('carousel-item');
        if (this.carouselItems.length === 0) {
            newSlide.classList.add('active');
        }

        const slideContent = document.createElement('div');
        slideContent.classList.add('d-block', 'w-100');
        newSlide.appendChild(slideContent);

        const slideImage = document.createElement('img');
        slideImage.src = './img/4.jpg';
        slideImage.classList.add('d-block', 'w-100');
        slideContent.appendChild(slideImage);

        const slideCaption = document.createElement('div');
        slideCaption.classList.add('carousel-caption', 'd-none', 'd-md-block');
        slideContent.appendChild(slideCaption);

        const slideTitle = document.createElement('h5');
        slideTitle.textContent = title;
        slideCaption.appendChild(slideTitle);

        const slideDesc = document.createElement('p');
        slideDesc.textContent = description;
        slideCaption.appendChild(slideDesc);

        carouselInner.appendChild(newSlide);

        const newIndicator = document.createElement('button');
        newIndicator.setAttribute('type', 'button');
        newIndicator.setAttribute(
            'data-bs-target',
            '#carouselExampleIndicators'
        );
        newIndicator.setAttribute(
            'data-bs-slide-to',
            this.carouselItems.length.toString()
        );
        if (this.carouselItems.length === 0) {
            newIndicator.classList.add('active');
        }
        this.carousel
            .querySelector('.carousel-indicators')
            .appendChild(newIndicator);

        carouselIndicators.appendChild(newIndicator);

        this.carouselItems = Array.from(
            this.carousel.querySelectorAll('.carousel-item')
        );
    }

    insertSlide(number, title, description) {
        if (number >= 0 && number <= this.carouselItems.length) {
            const carouselInner =
                this.carousel.querySelector('.carousel-inner');
            const carouselIndicators = this.carousel.querySelector(
                '.carousel-indicators'
            );

            const newSlide = document.createElement('div');
            newSlide.classList.add('carousel-item');
            if (this.carouselItems.length === 0) {
                newSlide.classList.add('active');
            }

            const slideContent = document.createElement('div');
            slideContent.classList.add('d-block', 'w-100');
            newSlide.appendChild(slideContent);

            const slideImage = document.createElement('img');
            slideImage.src = './img/4.jpg';
            slideImage.classList.add('d-block', 'w-100');
            slideContent.appendChild(slideImage);

            const slideCaption = document.createElement('div');
            slideCaption.classList.add(
                'carousel-caption',
                'd-none',
                'd-md-block'
            );
            slideContent.appendChild(slideCaption);

            const slideTitle = document.createElement('h5');
            slideTitle.textContent = title;
            slideCaption.appendChild(slideTitle);

            const slideDesc = document.createElement('p');
            slideDesc.textContent = description;
            slideCaption.appendChild(slideDesc);

            carouselInner.insertBefore(
                newSlide,
                this.carouselItems[number - 1]
            );

            const newIndicator = document.createElement('button');
            newIndicator.setAttribute('type', 'button');
            newIndicator.setAttribute(
                'data-bs-target',
                '#carouselExampleIndicators'
            );

            const indicatorIndex = this.carouselItems.length;
            newIndicator.setAttribute(
                'data-bs-slide-to',
                indicatorIndex.toString()
            );
            if (this.carouselItems.length === 0) {
                newIndicator.classList.add('active');
            }

            carouselIndicators.appendChild(newIndicator);

            this.carouselItems = Array.from(
                this.carousel.querySelectorAll('.carousel-item')
            );
        }
    }
}

const slider = new Slider();

const insertSlide = document.getElementById('addSlideForm');
insertSlide.addEventListener('submit', function (e) {
    e.preventDefault();

    const slideNumberInput = document.getElementById('slideNumber');
    const slideTitleInput = document.getElementById('slideTitle');
    const slideDescInput = document.getElementById('slideDescription');
    const number = parseInt(slideNumberInput.value);
    const title = slideTitleInput.value;
    const description = slideDescInput.value;

    if (number >= 1 && number <= slider.carouselItems.length + 1) {
        slider.insertSlide(number, title, description);
    } else {
        slider.addSlide(title, description);
    }

    slideNumberInput.value = '';
    slideTitleInput.value = '';
    slideDescInput.value = '';
});
