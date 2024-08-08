document.addEventListener("DOMContentLoaded", () => {
    // Section where the first group of photos will go
    const gildanSection = document.getElementById('gildanGallery');
    const aluconSection = document.getElementById('aluconGallery');
    const cementeraSection = document.getElementById('cementeraGallery');
    const fuerzaSection = document.getElementById('fuerzaGallery');
    const elcatexSection = document.getElementById('elcatexGallery');
    const patucaSection = document.getElementById('patucaGallery');
    const nicaraguaSection = document.getElementById('nicaraguaGallery');

    function insertImg(dataPath, section) {
        fetch(dataPath) // get the image from that path it is async
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // With the data just make 4 cards
                for (let i = 0; i < 4; i++) {
                    const card = document.createElement('div'); // Create the card element
                    card.classList.add('card-containers')   // Add the class to the element
                    // Insert in the inner html
                    card.innerHTML = `
            <img src="${data[i].image}" alt="${data[i].title}" onclick="openImg(this.src)">`
                    section.appendChild(card); // merge it to the section where it should be
                }
            }).catch(error => {
                console.error('Error!', error)
            })
    }

    insertImg('../../app/data/gildan.json', gildanSection); //Inserting the containers images
    insertImg('../../app/data/alucon.json', aluconSection); // Inserting the Equipment images
    insertImg('../../app/data/cementera.json', cementeraSection); // Inserting the oversize images
    insertImg('../../app/data/fuerza.json', fuerzaSection); // Inserting the office images
    insertImg('../../app/data/elcatex.json', elcatexSection); // Inserting the office images
    insertImg('../../app/data/patuca2.json', patucaSection); // Inserting the office images
    insertImg('../../app/data/nicaragua.json', nicaraguaSection); // Inserting the office images



});

const fullImgBox = document.getElementById('fullImgBox'); // Section where the image selected will expand
const fullImg = document.getElementById('fullImg'); // where src will go

// function to expand the image
function openImg(img) {
    fullImgBox.style.display = 'flex';
    fullImg.src = img;
}

// Function to close the image
function closeImg() {
    fullImgBox.style.display = 'none';
}

// Btns which on click will load the images
const loadContainers = document.getElementById('loadContainers');
const loadEquipment = document.getElementById('loadEquipment');
const loadOversized = document.getElementById('loadOversized');

// Section where the images will get inserted
const insertContainers = document.getElementById('insertContainers');
const insertEquipment = document.getElementById('insertEquipment');
const insertOversize = document.getElementById('insertOversized');

// Btns, the trigger that will the extra images inserted
const hideContainers = document.getElementById('hideContainers');
const hideEquipment = document.getElementById('hideEquipment');
const hideOversized = document.getElementById('hideOversized');

// Function to make everything work regarding showing more images in the portfolio
function handleLoad(loadBtn, hideBtn, insertArea, dataPath, className) {
    loadBtn.addEventListener('click', () => {
        loadBtn.style.display = 'none';
        hideBtn.style.display = 'inline';

        fetch(dataPath)
            .then(response => response.json())
            .then(data => {
                // Since we already got 4 images from that file 
                // when the DOM loaded
                for (let i = 4; i < data.length; i++) {
                    const card = document.createElement('div'); // creating the div
                    card.classList.add(className); // Adding the class name to the div
                    // Inserting what is going to be inside the div
                    card.innerHTML = `<img src="${data[i].image}" alt="${data[i].title}" onclick="openImg(this.src)">`;
                    insertArea.appendChild(card); // inserting the div in the section where we want it to go
                }
            });
    });

    // Logic for the show less btn 
    hideBtn.addEventListener('click', () => {
        insertArea.innerHTML = " "; // It will clear the div w
        loadBtn.style.display = 'inline'; // show the btn "Show More"
        hideBtn.style.display = 'none'; // Will hide the "show less btn"
    });
}

// handleLoad(loadContainers, hideContainers, insertContainers, '../../app/data/containers.json', 'card-containers');
// handleLoad(loadEquipment, hideEquipment, insertEquipment, '../../app/data/equipment.json', 'card-containers');
// handleLoad(loadOversized, hideOversized, insertOversize, '../../app/data/oversize.json', 'card-containers');

