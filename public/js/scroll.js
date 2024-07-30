const options = {
    // rootMargin: '10px',
    threshold: 0.4 // the porcentage of visibilty to start the animation
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));