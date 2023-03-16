// Variabelen
const titleSection = document.querySelector('.titlesection');

const naarBovenButton = document.querySelector('.naarBegin');

const options = {
    // intersection naar beneden verplaatsen met 300 pixels
    rootMargin: '300px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.target);
        if (entry.isIntersecting) {
            // als het element 'titleSection' zichtbaar is, verwijder de classList
            naarBovenButton.classList.remove('naarBeginZichtbaar');
        } else {
            // als het element 'titleSection' niet zichtbaar is, voeg de classList toe
            naarBovenButton.classList.add('naarBeginZichtbaar');
        };  
    });
}, options);

observer.observe(titleSection);