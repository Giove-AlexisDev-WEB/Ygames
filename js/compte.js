var User = document.querySelector(".compte-CD");
var btn= document.querySelector("#btnloginAM");
var login = document.querySelector("#boitedialogueAM");
var changeColor=document.querySelector(".statusAM");
let main = document.querySelector("#filter");
let connexion = document.querySelector("#connexion");

// User.addEventListener ("click", function () {
    

//     if(login.className== "active") {
//         login.style.transform= "translateY(0%)";
//         login.className= "none";


//     }
//     else if (login.className=="none") {
//         login.style.transform = "translateY(-200%)";
//         login.className= "active";


//     }
// })

// btn.addEventListener("click", function () {
//     console.log('hello');
//     changeColor.style.color="green";

// })

User.addEventListener("click", () =>{
    login.classList.toggle("active");
    main.classList.toggle("filter");
    connexion.addEventListener("click", () =>{
        main.classList.remove("filter");
        login.classList.remove("active");
    })
    main.addEventListener("click", ()=>{
        login.classList.remove("active");
    })
})
