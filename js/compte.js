var User = document.querySelector(".compte-CD");
var btn= document.querySelector("#btnloginAM");
var login = document.querySelector("#boitedialogueAM");
var changeColor=document.querySelector(".statusAM");

User.addEventListener ("click", function () {
    

    if(login.className== "active") {
        login.style.transform= "translateY(0%)";
        login.className= "none";


    }
    else if (login.className=="none") {
        login.style.transform = "translateY(-200%)";
        login.className= "active";


    }
})

btn.addEventListener("click", function () {
    console.log('hello');
    changeColor.style.color="green";

})


