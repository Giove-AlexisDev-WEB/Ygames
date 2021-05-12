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


















