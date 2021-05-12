let nom = document.querySelector('#nom');
let prenom = document.querySelector('#prenom');
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");
let popup = document.querySelector('#popup');
let choice1 = document.querySelector("#choice1");
let choice2 = document.querySelector("#choice2");

// Faire apparaitre une div disant que les infos sont prise en compte
let envoyer = submit.addEventListener('click', function(e){

    e.preventDefault(); // call back, vient récupérer l'Event click

    if(nom.value != "" && prenom.value != "" && email.value != "" && message.value != ""){

        popup.style.display = "flex";

    }else {

    popup.style.display = "none";
}
})

// Faire tourner les div contact SAV/Postuler

let radio = function radio (){
    let flipboxInner = document.querySelector(".flip-box-inner");
    let flipboxBack = document.querySelector(".flip-box-back");
    let flipboxFront = document.querySelector(".flip-box-front");
    choice2.addEventListener("click", function(){
        flipboxInner.classList.toggle("rotate");
    });
    choice1.addEventListener("click", function(){
        flipboxInner.classList.toggle("rotate")
    })

}
radio();

// Faire apparaitre les images de Mario au clic

let img = document.querySelectorAll('.icon-mario');
let verte = document.querySelector('#verte');
let bleue = document.querySelector('#bleue');
let champignon = document.querySelector('#champignon');
let fleur = document.querySelector('#fleur');

    function random(min, max) {
        return Math.random() * (max - min) + min;
}

    document.addEventListener('click', (evt) => {

    var Mouse_X = evt.clientX; 
    var Mouse_Y = evt.clientY;    	
    for (let index = 0; index < img.length; index++) {
        img[index].classList.toggle('show')// récupération de la classe dans le css
        // Utilisation du toggle pour afficher puis enlever l'img
        img[index].classList.remove('hidden');

        img[index].animate([

            {
                transform: 'rotateY(0deg)', opacity: 1,
                top: Mouse_Y + random(-140, 70) + 'px', left: Mouse_X + 'px'
            },
            {
                transform: 'rotateY(1000deg)',
                top: Mouse_Y - 150 + 'px', left: Mouse_X + random(-150, 50) + 'px'
            },
            {
                transform: 'rotateY(400deg)', opacity: 0.5,
                top: Mouse_Y + random(100, 300) + 'px', left: Mouse_X + random(-250, 250) + 'px'
            },
            {
                transform: 'rotateY(0deg)', opacity: 0,
                top: Mouse_Y + random(350, 500) + 'px', left: Mouse_X + random(-250, 250) + 'px'
            },

        ], {
            duration: 1500,
        });

        setTimeout(() => {
            img[index].classList.remove('show');
        }, 1500);
        
    }});