document.addEventListener("DOMContentLoaded", () => {
    // Section where the first group of photos will go
    const containerSection = document.getElementById('containersGallery');
    const equipmentSection = document.getElementById('equipmentGallery');
    const oversizeSection = document.getElementById('oversizedGallery');
    const officeSection = document.getElementById('officeGallery');

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

    insertImg('../../app/data/containers.json', containerSection); //Inserting the containers images
    insertImg('../../app/data/equipment.json', equipmentSection); // Inserting the Equipment images
    insertImg('../../app/data/oversize.json', oversizeSection); // Inserting the oversize images
    insertImg('../../app/data/office.json', officeSection); // Inserting the office images


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
                for (let i = 4; i < data.length; i++) {
                    const card = document.createElement('div');
                    card.classList.add(className);
                    card.innerHTML = `<img src="${data[i].image}" alt="${data[i].title}" onclick="openImg(this.src)">`;
                    insertArea.appendChild(card);
                }
            });
    });

    hideBtn.addEventListener('click', () => {
        insertArea.innerHTML = " ";
        loadBtn.style.display = 'inline';
        hideBtn.style.display = 'none';
    });
}

handleLoad(loadContainers, hideContainers, insertContainers, '../../app/data/containers.json', 'card-containers');
handleLoad(loadEquipment, hideEquipment, insertEquipment, '../../app/data/equipment.json', 'card-containers');
handleLoad(loadOversized, hideOversized, insertOversize, '../../app/data/oversize.json', 'card-containers');

