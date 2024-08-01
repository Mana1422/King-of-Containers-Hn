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
    
    // Getting the image from this file
    fetch('./app/data/images.json')
    .then(response => response.json())
    .then(data => {
        // to know how many cards will get created and the length of the carousel
        totalSlides = Math.ceil(data.length);
        // Each item found in the file giving to fetch will have their own card 
        // And creating the cards dynamically
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

    function updateSlider() {
        // Calculates how much will it get displace horizontally
        const offset = -currentIndex * (100 / cardsToShow);
        sliderContainer.style.transform = `translateX(${offset}%)`;

        // Adjust how many cards are shown depending on the device
        if (window.innerWidth <= 600) {
            cardsToShow = 1;
        } else if (window.innerWidth <= 900) {
            cardsToShow = 2;
        } else {
            cardsToShow = 3;
        }
    }

    function showNextCards() {
        // It will while there are more cards to show
        if (currentIndex < totalSlides - cardsToShow) {
            currentIndex++;
        } else {
            // if no cards are left to show will move
            // to the first image
            currentIndex = 0;
        }
        updateSlider();
    }

    function showPrevCards() {
        // If the index is greater than zero it will go back
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // if not move to the last slide
            currentIndex = totalSlides - cardsToShow;
        }
        updateSlider();
    }

    // Adding an event listener to the prev btn
    prevButton.addEventListener('click', ()=> {
        showPrevCards();
        clearInterval(slide); // Stop the slider from changing image automatically
    });

    // Adding an event listener to the next btn in slider main page
    nextButton.addEventListener('click', ()=> {
        showNextCards();
        clearInterval(slide); // Stop the slider from changing image automatically
    });

    // Initialize
    updateSlider();

    // To make the slider change images automatically
    let slide = setInterval(() => {
        showNextCards()
    }, 4000);

    // To make animation simulating typing in the welcome hero
    const nameHero =document.getElementById('name-hero')
    let name = "King Of Containers Honduras, LLC"; // Name it will write
    
    for (let i = 0; i < name.length; i++){
        setTimeout( () =>{
            nameHero.innerHTML += name[i]; // Inserting each letter to the div
        }, (500 + (i * 100))); // The time of execution changes to create the animation that it is typing each letter at a time
    }
    
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = 1;
    }, 1000);

    
});

AOS.init();