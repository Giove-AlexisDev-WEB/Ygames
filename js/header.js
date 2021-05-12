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

















