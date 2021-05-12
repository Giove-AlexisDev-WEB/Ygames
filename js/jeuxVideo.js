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

    // ---------------- BARRE DE RECHERCHE HEADER/JEUXVIDEO --------------- //


var goku = document.querySelector("#goku");
var halo = document.querySelector("#halo");
var fifa = document.querySelector("#fifa");
var dragonBallZ = document.querySelector("#dragonBallZ");
var finalFantasy = document.querySelector("#finalFantasy");
var skyrim = document.querySelector("#skyrim");
var borderland = document.querySelector("#borderland");
var dragonBallZ2 = document.querySelector("#dragonBallZ2");
var metalGearSolid = document.querySelector("#metalGearSolid");
var streetFighter = document.querySelector("#streetFighter");
var horizon = document.querySelector("#horizon");
var wow = document.querySelector("#wow");
var reddead = document.querySelector("#reddead");
var cod = document.querySelector("#cod");
var crash = document.querySelector("#crash");
var starwars = document.querySelector("#starwars");


var titre = document.querySelectorAll("#titre")


var CarteJeux = document.querySelectorAll(".carteDK")
var barreRecherche = document.querySelector("#search-CD")
var Recherche = document.querySelector("#recherche");


        
console.log(titre);     
console.log(Recherche);
console.log(barreRecherche.value);

Recherche.addEventListener("click", function(){

    
    for(let index = 0; index < titre.length ; index++) {
        
        if (barreRecherche.value == "halo") {
            
            CarteJeux[index].style.display = "none";
            halo.style.display = "flex";
        }

        else if (barreRecherche.value == "fifa") {
            
            
            CarteJeux[index].style.display = "none";
            fifa.style.display = "flex";

        }

        else if (barreRecherche.value == "dragonballz") {
            
            CarteJeux[index].style.display = "none";
            dragonBallZ.style.display = "flex";

        }

        else if (barreRecherche.value == "finalfantasy") {
            
            CarteJeux[index].style.display = "none";
            finalFantasy.style.display = "flex";

        }

        else if (barreRecherche.value == "skyrim") {
            
            CarteJeux[index].style.display = "none";
            skyrim.style.display = "flex";

        }

        else if (barreRecherche.value == "borderland") {
            
            CarteJeux[index].style.display = "none";
            borderland.style.display = "flex";

        }

        else if (barreRecherche.value == "worldofwarcraft") {
            
            CarteJeux[index].style.display = "none";
            wow.style.display = "flex";

        }

        else if (barreRecherche.value == "reddead") {
            
            CarteJeux[index].style.display = "none";
            reddead.style.display = "flex";

        }

        else if (barreRecherche.value == "metalgearsolid") {
            
            CarteJeux[index].style.display = "none";
            metalGearSolid.style.display = "flex";

        }

        else if (barreRecherche.value == "streetfighter") {
            
            CarteJeux[index].style.display = "none";
            streetFighter.style.display = "flex";

        }
        else if (barreRecherche.value == "horizon") {
            
            CarteJeux[index].style.display = "none";
            dragonBallZ.style.display = "flex";

        }
        else if (barreRecherche.value == "callofduty") {
            
            CarteJeux[index].style.display = "none";
            cod.style.display = "flex";

        }
        else if (barreRecherche.value == "crash") {
            
            CarteJeux[index].style.display = "none";
            crash.style.display = "flex";

        }
        else if (barreRecherche.value == "starwars") {
            
            CarteJeux[index].style.display = "none";
            starwars.style.display = "flex";

        }
        else if (barreRecherche.value == "dragonballz") {
            
            CarteJeux[index].style.display = "none";
            dragonBallZ.style.display = "flex";

        }
        else if (barreRecherche.value == "dragonBallZ2") {
            
            CarteJeux[index].style.display = "none";
            dragonBallZ2.style.display = "flex";

        }

    }

})


// var jeux = ['AssasinCreedValhalla','HaloAnniversary',"Fifa21",'dragonBallZ','FinalFantasy','Skyrim','borderlands','dragonballZXenoverse','MetalGearSolid','StreetFighter','HorizonZeroDawn','WorldOfWarcraft','ReadDeadRedemtion','CallOfDuty','CrashBandiCoot','StarWars'];
