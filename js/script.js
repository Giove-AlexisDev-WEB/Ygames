// window.onload = function(){
//     var IncrementLoop = 0;
//     var div1 = document.querySelector(".item1");
//     var div2 = document.querySelector(".item2");
//     var div3 = document.querySelector(".item3");
//     var div4 = document.querySelector(".item4");
//     var div5 = document.querySelector(".item5");
//     var div6 = document.querySelector(".item6");
        
//     var img = ["https://cdn2.unrealengine.com/Epic+Games+Node%2Fut-1920x1080-416b0b679e572854df52c39154aff5945328c04d.jpg?resize=1&w=1920","https://cdn2.unrealengine.com/Epic+Games+Node%2Fue-alt-1920x1080-e653a4a4dae65307fd2420076abe44bb71b22f06.jpg?resize=1&w=1920","https://cdn2.unrealengine.com/Epic+Games+Node%2Ffortnite-1920x1080-b981104fd54dd7013375f26bc9c98c9a2072819e.jpg?resize=1&w=1920", "https://cdn2.unrealengine.com/epichomepage-artboard-1-1920x1080-329693365.jpg?resize=1&w=1920", "https://cdn2.unrealengine.com/Epic+Games+Node%2Fbb-1920x1080-b9fc27cbe8c45c5682facc0d5f0626741e8e1dc5.jpg?resize=1&w=1920", "https://cdn2.unrealengine.com/Epic+Games+Node%2Frr-%283%29-1920x1080-ad5d59625dbced889ecb810293a416b25f9adad9.jpg?resize=1&w=1920"];
    
//     div1.style.background = `url(${img[0]})`;
//     div2.style.background = `url(${img[1]})`;
//     div3.style.background = `url(${img[2]})`;
//     div4.style.background = `url(${img[3]})`;
//     div5.style.background = `url(${img[4]})`;
//     div6.style.background = `url(${img[5]})`;
    
//     setInterval(function(){
        
//         var slider = document.querySelector('.slider');
//         slider.style.animation = "animate 4s linear infinite";   

        
//         if(IncrementLoop === 0){

//             var stockArray = [img[0]];
//             img.shift();
//             img.push(stockArray)
//             console.log(img)
//             console.log(stockArray)
//             // div1.style.background = `url(${img[0]})`;
//             // div2.style.background = `url(${img[1]})`;
//             // div3.style.background = `url(${img[2]})`;
//             // div4.style.background = `url(${img[3]})`;
//             // div5.style.background = `url(${img[4]})`;
//             // div6.style.background = `url(${img[5]})`;

            
//         }else if(IncrementLoop === 1){

//             div1.style.background = `url(${img[1]})`;
//             div2.style.background = `url(${img[2]})`;
//             div3.style.background = `url(${img[3]})`;
//             div4.style.background = `url(${img[4]})`;
//             div5.style.background = `url(${img[5]})`;
//             div6.style.background = `url(${img[0]})`;
//         }
//         else if(IncrementLoop === 2){

//             div1.style.background = `url(${img[2]})`;
//             div2.style.background = `url(${img[3]})`;
//             div3.style.background = `url(${img[4]})`;
//             div4.style.background = `url(${img[5]})`;
//             div5.style.background = `url(${img[0]})`;
//             div6.style.background = `url(${img[1]})`;
//         }
//         else if(IncrementLoop === 3){

//             div1.style.background = `url(${img[3]})`;
//             div2.style.background = `url(${img[4]})`;
//             div3.style.background = `url(${img[5]})`;
//             div4.style.background = `url(${img[0]})`;
//             div5.style.background = `url(${img[1]})`;
//             div6.style.background = `url(${img[2]})`;
//         }
//         else if(IncrementLoop === 4){

//             div1.style.background = `url(${img[4]})`;
//             div2.style.background = `url(${img[5]})`;
//             div3.style.background = `url(${img[0]})`;
//             div4.style.background = `url(${img[1]})`;
//             div5.style.background = `url(${img[2]})`;
//             div6.style.background = `url(${img[3]})`;
//         }
//         else if(IncrementLoop === 5){

//             div1.style.background = `url(${img[5]})`;
//             div2.style.background = `url(${img[0]})`;
//             div3.style.background = `url(${img[1]})`;
//             div4.style.background = `url(${img[2]})`;
//             div5.style.background = `url(${img[3]})`;
//             div6.style.background = `url(${img[4]})`;
//         }
//         else if(IncrementLoop === 6){

//             div1.style.background = `url(${img[0]})`;
//             div2.style.background = `url(${img[1]})`;
//             div3.style.background = `url(${img[2]})`;
//             div4.style.background = `url(${img[3]})`;
//             div5.style.background = `url(${img[4]})`;
//             div6.style.background = `url(${img[5]})`;

//             IncrementLoop = 0;
//         }
//         console.log(IncrementLoop)
//         IncrementLoop++;
            
//     }, 4000);
// }

window.onload = function(){

    var slider = document.querySelector('.slider');
    let image = document.querySelectorAll('.slider div');
    var transition = 0;
    var div1 = document.querySelector(".item1");
    var div2 = document.querySelector(".item2");
    var div3 = document.querySelector(".item3");
    var div4 = document.querySelector(".item4");
    var div5 = document.querySelector(".item5");
    var div6 = document.querySelector(".item6");
    var previous = document.querySelector(".previous");
    var next = document.querySelector(".next");
    
    var img = ["https://cdn2.unrealengine.com/Epic+Games+Node%2Fut-1920x1080-416b0b679e572854df52c39154aff5945328c04d.jpg?resize=1&w=1920","https://cdn2.unrealengine.com/Epic+Games+Node%2Fue-alt-1920x1080-e653a4a4dae65307fd2420076abe44bb71b22f06.jpg?resize=1&w=1920","https://cdn2.unrealengine.com/Epic+Games+Node%2Ffortnite-1920x1080-b981104fd54dd7013375f26bc9c98c9a2072819e.jpg?resize=1&w=1920", "https://cdn2.unrealengine.com/epichomepage-artboard-1-1920x1080-329693365.jpg?resize=1&w=1920", "https://cdn2.unrealengine.com/Epic+Games+Node%2Fbb-1920x1080-b9fc27cbe8c45c5682facc0d5f0626741e8e1dc5.jpg?resize=1&w=1920", "https://cdn2.unrealengine.com/Epic+Games+Node%2Frr-%283%29-1920x1080-ad5d59625dbced889ecb810293a416b25f9adad9.jpg?resize=1&w=1920"];

    var repere = 0;
    
    let pause = false;
    var animation = setInterval(slide,1)
    function slide(){
        
        // console.log(transition);
        if(!pause){
            transition--;
            slider.style.transform = "translateX(" + transition + "px)";
            if (transition == -649){
                if(repere ===0){
                    div1.style.background = `url(${img[1]})`;
                    div2.style.background = `url(${img[2]})`;
                    div3.style.background = `url(${img[3]})`;
                    div4.style.background = `url(${img[4]})`;
                    div5.style.background = `url(${img[5]})`;
                    div6.style.background = `url(${img[0]})`;
                    repere = 1;
                }
                else if(repere ===1){
                    div1.style.background = `url(${img[2]})`;
                    div2.style.background = `url(${img[3]})`;
                    div3.style.background = `url(${img[4]})`;
                    div4.style.background = `url(${img[5]})`;
                    div5.style.background = `url(${img[0]})`;
                    div6.style.background = `url(${img[1]})`;
                    repere = 2;
                }
                else if(repere ===2){
                    div1.style.background = `url(${img[3]})`;
                    div2.style.background = `url(${img[4]})`;
                    div3.style.background = `url(${img[5]})`;
                    div4.style.background = `url(${img[0]})`;
                    div5.style.background = `url(${img[1]})`;
                    div6.style.background = `url(${img[2]})`;
                    repere = 3;
                }
                else if(repere ===3){
                    div1.style.background = `url(${img[4]})`;
                    div2.style.background = `url(${img[5]})`;
                    div3.style.background = `url(${img[0]})`;
                    div4.style.background = `url(${img[1]})`;
                    div5.style.background = `url(${img[2]})`;
                    div6.style.background = `url(${img[3]})`;
                    repere = 4;
                }
                else if(repere ===4){
                    div1.style.background = `url(${img[5]})`;
                    div2.style.background = `url(${img[0]})`;
                    div3.style.background = `url(${img[1]})`;
                    div4.style.background = `url(${img[2]})`;
                    div5.style.background = `url(${img[3]})`;
                    div6.style.background = `url(${img[4]})`;
                    repere = 5;
                }
                else if(repere ===5){
                    div1.style.background = `url(${img[0]})`;
                    div2.style.background = `url(${img[1]})`;
                    div3.style.background = `url(${img[2]})`;
                    div4.style.background = `url(${img[3]})`;
                    div5.style.background = `url(${img[4]})`;
                    div6.style.background = `url(${img[5]})`;
                    repere = 0;
                }
                transition = 0;
            }
        
        }
    }
var container = document.querySelector(".container");
    //PERMET D AGRANDIR L IMAGE
    for (let i = 0; i < image.length; i++) {
        image[i].addEventListener("click", function (e){
                e.target.classList.toggle("image-active");
                console.log(e.target.classList[1])
                if(e.target.classList[1] === undefined){
                    console.log(animation);
                    pause = false;
                }else{
                    slider.style.transform = "translateX(0px)";
                    pause = true;
                }        
        })
    }
    var deplace = 0;
previous.addEventListener("click", function(){
if (repere == 0) {
    slider.style.transform = "translateX(0em)"; //permet de mettre l image cliker a gauche
    pause = true; // stop le slide
    repere = 5;
    previous.addEventListener("click", function(){
        div1.style.background = `url(${img[5]})`;
        div2.style.background = `url(${img[0]})`;
        div3.style.background = `url(${img[1]})`;
        div4.style.background = `url(${img[2]})`;
        div5.style.background = `url(${img[3]})`;
        div6.style.background = `url(${img[4]})`;
        // repere = 0; a voir si sa change avec ou sans a la fin
    }) 
        
    
}

else if (repere == 1) {
    slider.style.transform = "translateX(0px)";
    pause = true;
    repere = 0 ;
    previous.addEventListener("click", function(){
        div1.style.background = `url(${img[0]})`;
        div2.style.background = `url(${img[1]})`;
        div3.style.background = `url(${img[2]})`;
        div4.style.background = `url(${img[3]})`;
        div5.style.background = `url(${img[4]})`;
        div6.style.background = `url(${img[5]})`;
        // repere = 0; a voir si sa change avec ou sans a la fin
    })  
}         

else if (repere == 2) {
    slider.style.transform = "translateX(0px)";
    pause = true;
    repere = 1;
    previous.addEventListener("click", function(){           
        div1.style.background = `url(${img[1]})`;
        div2.style.background = `url(${img[2]})`;
        div3.style.background = `url(${img[3]})`;
        div4.style.background = `url(${img[4]})`;
        div5.style.background = `url(${img[5]})`;
        div6.style.background = `url(${img[0]})`;
        
        // repere = 0; a voir si sa change avec ou sans a la fin
    }) 
}
else if (repere == 3) {
    slider.style.transform = "translateX(0px)";
    pause = true;
    repere = 2;
    previous.addEventListener("click", function(){           
        div1.style.background = `url(${img[2]})`;
        div2.style.background = `url(${img[3]})`;
        div3.style.background = `url(${img[4]})`;
        div4.style.background = `url(${img[5]})`;
        div5.style.background = `url(${img[0]})`;
        div6.style.background = `url(${img[1]})`;
        
    }) 
}
else if (repere == 4) {
    slider.style.transform = "translateX(0px)";
    pause = true;
    repere = 3;
    previous.addEventListener("click", function(){           
        div1.style.background = `url(${img[3]})`;
        div2.style.background = `url(${img[4]})`;
        div3.style.background = `url(${img[5]})`;
        div4.style.background = `url(${img[0]})`;
        div5.style.background = `url(${img[1]})`;
        div6.style.background = `url(${img[2]})`;
        
    }) 
}
else if (repere == 5) {
    slider.style.transform = "translateX(0px)";
    pause = true;
    repere = 4;
    previous.addEventListener("click", function(){           
        div1.style.background = `url(${img[4]})`;
        div2.style.background = `url(${img[5]})`;
        div3.style.background = `url(${img[0]})`;
        div4.style.background = `url(${img[1]})`;
        div5.style.background = `url(${img[2]})`;
        div6.style.background = `url(${img[3]})`;
        
    }) 
}

})



next.addEventListener("click", function(){

if (repere == 0) {
    slider.style.transform = "translateX(-650px)";
    pause = true;
    
    next.addEventListener("click", function(){
    div1.style.background = `url(${img[1]})`;
    div2.style.background = `url(${img[2]})`; // cest la div 1
    div3.style.background = `url(${img[3]})`; 
    div4.style.background = `url(${img[4]})`;
    div5.style.background = `url(${img[5]})`;
    div6.style.background = `url(${img[0]})`;
    repere = 1;
    })      
}
else if (repere == 1) {
    slider.style.transform = "translateX(-650px)";
    pause = true;
    next.addEventListener("click", function(){
    div1.style.background = `url(${img[2]})`;
    div2.style.background = `url(${img[3]})`; // cest la div 1
    div3.style.background = `url(${img[4]})`; 
    div4.style.background = `url(${img[5]})`;
    div5.style.background = `url(${img[0]})`;
    div6.style.background = `url(${img[1]})`;
    repere = 2 ;
    })      
}
else if (repere == 2) {
    slider.style.transform = "translateX(-650px)";
    pause = true;
    next.addEventListener("click", function(){
    div1.style.background = `url(${img[3]})`;
    div2.style.background = `url(${img[4]})`; // cest la div 1
    div3.style.background = `url(${img[5]})`; 
    div4.style.background = `url(${img[0]})`;
    div5.style.background = `url(${img[1]})`;
    div6.style.background = `url(${img[2]})`;
    repere = 3 ;
    })      
}
else if (repere == 3) {
    slider.style.transform = "translateX(-650px)";
    pause = true;
    next.addEventListener("click", function(){
    div1.style.background = `url(${img[4]})`;
    div2.style.background = `url(${img[5]})`; // cest la div 1
    div3.style.background = `url(${img[0]})`; 
    div4.style.background = `url(${img[1]})`;
    div5.style.background = `url(${img[2]})`;
    div6.style.background = `url(${img[3]})`;
    repere = 4 ;
    })      
}
else if (repere == 4) {
    slider.style.transform = "translateX(-650px)";
    pause = true;
    next.addEventListener("click", function(){
    div1.style.background = `url(${img[5]})`;
    div2.style.background = `url(${img[0]})`; // cest la div 1
    div3.style.background = `url(${img[1]})`; 
    div4.style.background = `url(${img[2]})`;
    div5.style.background = `url(${img[3]})`;
    div6.style.background = `url(${img[4]})`;
    repere = 5 ;
    })      
}
else if (repere == 5) {
    slider.style.transform = "translateX(-650px)";
    pause = true;
    next.addEventListener("click", function(){
    div1.style.background = `url(${img[0]})`;
    div2.style.background = `url(${img[1]})`; // cest la div 1
    div3.style.background = `url(${img[2]})`; 
    div4.style.background = `url(${img[3]})`;
    div5.style.background = `url(${img[4]})`;
    div6.style.background = `url(${img[5]})`;
    repere = 0 ;
    })      
}

})

}