// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sliderCont = document.querySelector('#slider-container');
    const sliderContainer = document.querySelector('.slider-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let cardsToShow = 3; // Number of cards to show at a time
    const cardWidth = 100 / cardsToShow;
    let currentIndex = 0;
    let totalSlides;
    
    fetch('./app/data/images.json')
    .then(response => response.json())
    .then(data => {
        totalSlides = Math.ceil(data.length);
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            `;
            sliderContainer.appendChild(card);
            // <h3>${item.title}</h3>
        });
        updateSlider();
    });
    
    const cards = document.querySelectorAll('.card');

    function updateSlider() {
        const offset = -currentIndex * (100 / cardsToShow);
        sliderContainer.style.transform = `translateX(${offset}%)`;

        if (window.innerWidth <= 600) {
            cardsToShow = 1;
        } else if (window.innerWidth <= 900) {
            cardsToShow = 2;
        } else {
            cardsToShow = 3;
        }
    }

    function showNextCards() {
        console.log(currentIndex);
        console.log(totalSlides - 3);
        if (currentIndex < totalSlides - cardsToShow) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    function showPrevCards() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - cardsToShow;
        }
        updateSlider();
    }

    prevButton.addEventListener('click', showPrevCards);
    nextButton.addEventListener('click', showNextCards);

    // Initialize
    updateSlider();

    const nameHero =document.getElementById('name-hero')
    let name = "King Of Containers Honduras, LLC";
    
    for (let i = 0; i < name.length; i++){
        setTimeout( () =>{
            nameHero.innerHTML += name[i];
        }, (500 + (i * 100)));
    }
    
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = 1;
    }, 1000);

    
});

AOS.init();