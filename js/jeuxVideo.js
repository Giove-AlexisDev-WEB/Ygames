// Faire apparaitre/disparaitre la sidebar au clic + décaler la section stuff sur la droite qd sidebar active

var burgerMenu = function (){
    let burger = document.querySelector(".burger-menu-CD");
    let sidebar = document.querySelector(".sidebar-CD");
    let links = document.querySelectorAll(".close-nav");
    let loupe = document.querySelector("#search-loop-CD");
    let main = document.querySelector("#filter")

    burger.addEventListener("click", function(){
        sidebar.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        main.classList.toggle("filter");
        main.addEventListener("click", function (){
            sidebar.classList.remove("nav-active");
            burger.classList.remove("toggle");
            main.classList.remove("filter");
        })
    })

    // Quand je clique sur un lien je ferme la sidebar

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(){
            sidebar.classList.toggle("nav-active");
            burger.classList.toggle("toggle");
            main.classList.remove("filter");
        })
    }
    
    // Quand je clique que la loupe je ferme la sidebar

    // loupe.addEventListener("click", function(){
    //     sidebar.classList.toggle("nav-active");
    //     burger.classList.toggle("toggle");
    // })
}

burgerMenu();

let panierDiv = function(){
    let panier = document.querySelector(".panier-CD");
    let sidebarPanier = document.querySelector(".sidebar-panier-CD");
    let main = document.querySelector("#filter");
    let paiement = document.querySelector(".commander-CD");
    let sidebarPaiement = document.querySelector(".sidebar-panierDone-CD");
    let retour = document.querySelector("#retour-site-CD");

    panier.addEventListener("click", function(){
        sidebarPanier.classList.toggle("nav-active-panier");
        main.classList.toggle("filter");
    })
    
    // Remplacer la barre panier par celle de paiement effectué
        
    paiement.addEventListener("click", function(){
        sidebarPanier.classList.remove("nav-active-panier");
        sidebarPaiement.classList.add("nav-active-panier2");
    })
    retour.addEventListener("click", function(){
        sidebarPaiement.classList.remove("nav-active-panier2");
        main.classList.remove("filter");
    })
    main.addEventListener("click", function (){
        sidebarPanier.classList.remove("nav-active-panier");
        sidebarPaiement.classList.remove("nav-active-panier2");
        main.classList.remove("filter");
    })
}
panierDiv();



// ------------------ main jeux video -------------------

let buttonPs4 = document.querySelector('.buttonPs4DK');
let buttonPc = document.querySelector('.buttonPcDK');
let buttonAll = document.querySelector('.buttonAllDK');

let jeuxPs4 = document.querySelectorAll('.jeuxPs4');
let jeuxPc = document.querySelectorAll('.jeuxPc');



buttonPs4.addEventListener('click', function(){
    
    for (let i = 0; i < jeuxPc.length; i++) {
        jeuxPc[i].style.display = "none";
        jeuxPs4[i].style.display = "flex";
    }
    jeuxPs4.style.display = "flex";
});
buttonPc.addEventListener('click', function(){

    for (let i = 0; i < jeuxPs4.length; i++) {
        jeuxPs4[i].style.display = "none";
        jeuxPc[i].style.display = "flex";
    }
    

});
buttonAll.addEventListener('click', function(){

    for (let i = 0; i < jeuxPs4.length; i++) {
        jeuxPs4[i].style.display = "flex";
        jeuxPc[i].style.display = "flex";
    }
    

});
     

let compteur = 0;
    let acheterButton= document.querySelectorAll(".acheter"); // AJOUTER AU PANIER
    let chiffrePanier = document.querySelector("#compteur-panier-CD"); // CHIFFRE DU PANIER
    let titreJeu = document.querySelector(".descriptionJvDK h1");   // RECUPERE LE TITRE DU JEU
    let titreJeuPanier = document.querySelector(".info-achat-CD h3"); // ENDROIT DU TITRE DU JEUX DANS PANIER
    let prix = document.querySelector(".prix-CD p"); // NOTRE PRIX
    let prixJeu = 69.99; // PRIX JEU
    let imageJeu = document.querySelector(".infos-jeu-CD img"); //IMAGE DU JEU DANS PANIER
    let jaquette = document.querySelector(".imgJvDK");  // IMAGE JEU
    let moins = document.querySelector(".moins-CD"); // BOUTON MOINS
    let plus = document.querySelector(".plus-CD"); // BOUTON PLUS
    let compteurPanier = document.querySelector(".chiffre-panier-CD span"); // COMPTEUR ENTRE MOINS ET PLUS

    for (let index = 0; index < acheterButton.length; index++) {
        acheterButton[index].addEventListener('click', function(){
            compteur++;
            chiffrePanier.innerHTML = compteur;
            compteurPanier.innerHTML = compteur;
            prix.innerHTML = "<span> Prix :</span>" + (prixJeu*compteur).toFixed(2) + "€";
            titreJeuPanier.innerHTML = titreJeu.textContent;
            imageJeu.src = jaquette.src;
        })
    }
    plus.addEventListener('click', function(){
        compteur++;
        compteurPanier.innerHTML = compteur;
        chiffrePanier.innerHTML = compteur;
        prix.innerHTML = "<span> Prix :</span>" + (prixJeu * compteur).toFixed(2)+ "€";
        console.log(prix);

    })
    moins.addEventListener('click', function(){
        if (compteur>0) {
            compteur--;
            compteurPanier.innerHTML = compteur;
            chiffrePanier.innerHTML = compteur;
            prix.innerHTML = "<span> Prix :</span>" + (prixJeu*compteur).toFixed(2) + "€";
        }

    })
