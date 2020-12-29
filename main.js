//Select element function
const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});

// Scroll reveal
window.sr = ScrollReveal();

//element to be animated
sr.reveal('.animate-left', {
    origin: 'left', //where the element comes from
    duration: 1500, //1000
    distance: '35rem', //25rem
    delay: 1000 //600
});

sr.reveal('.animate-right', {
    origin: 'right', //where the element comes from
    duration: 1500, //1000
    distance: '25rem', //25rem
    delay: 1600 //900
});

sr.reveal('.animate-top', {
    origin: 'top', //where the element comes from
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom', //where the element comes from
    duration: 1000,
    distance: '25rem',
    delay: 600
});




console.clear();
