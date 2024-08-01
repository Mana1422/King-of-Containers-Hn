const options = {
    // rootMargin: '10px',
    threshold: window.innerWidth <= 900? 0.3 :0.5 // the porcentage of visibilty to start the animation
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } 
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
}, options);


// Observer for the gallery
const options2 = {
    threshold: window.innerWidth <= 900? 0.1 :0.5 // the porcentage of visibilty to start the animation
}
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } 
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
}, options2);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenGallery = document.querySelectorAll('.hiddenG');
hiddenGallery.forEach(el => observer2.observe(el));