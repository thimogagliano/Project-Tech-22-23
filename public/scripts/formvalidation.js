// variabelen
const selectGenres = document.getElementById('genres');

const formError = document.querySelector('.formError');

const zoekKnop = document.querySelector('.zoekKnop');

// zet alle 'option' elementen in 'optionElements' en voeg aan elke een event listener en voer direct de functie uit bij klikken
const optionElements = document.querySelectorAll('option').forEach(element => {
    element.addEventListener('click', () => {
        // verwijder error tekst bij een valide form
        formError.remove('Kies hier een genre');
        // voeg een classlist toe zodat de styling mooi blijft tussen de 'zoekknop' en de 'select'
        selectGenres.classList.add('valid');
    });
});

// luisteren naar klik op 'zoeken' button in social.ejs en voer direct een functie uit bij klikken
zoekKnop.addEventListener('click', () => {
    // als er op zoeken wordt geklikt wanneer er geen genre is geselecteerd, voeg dan de invalid classlist toe en geef een error melding dat er een genre moet worden gekozen
    if (selectGenres.value == "") {
        selectGenres.classList.add('invalid');
        formError.append('Kies hier een genre');
        console.log('vul een geldige zoekopdracht in');
    } else {
        return;
    }
});