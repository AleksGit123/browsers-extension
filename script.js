"use strict"
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let themeChange = document.querySelector(".theme_change_button");
let toggle = document.querySelectorAll(".toggle_switch");
let circle = document.querySelectorAll(".circle");
let remove = document.querySelectorAll('.remove');
let extensions = document.querySelectorAll(".extension");

themeChange.addEventListener("click",()=>{
    
    if(!document.body.classList.contains("dark_mode")){
        console.log(true);
        document.body.classList.add("dark_mode");
        
        // icon switch
        moon.style.display = "none";
        sun.style.display = "block";
        themeChange.style.backgroundColor = "#222737";
        

    }
    else{
        console.log(false);
        document.body.classList.remove("dark_mode");
        sun.style.display = "none";
        moon.style.display = "block";
        themeChange.style.backgroundColor = "#eeefeb";
    }

})

toggle.forEach((element,index) =>{
    element.addEventListener("click",()=>{
        let currentCircle = circle[index];
        // circle.forEach((round) =>{
            if(!currentCircle.classList.contains("animation_on")){
                currentCircle.classList.add("animation_on");
                currentCircle.classList.remove("animation_off");
                element.style.backgroundColor = "#D92626"; 
            }
            else{
                currentCircle.classList.remove("animation_on");
                currentCircle.classList.add("animation_off");
                element.style.backgroundColor = "#c5c5c5";
            }
        // })
    })
   
})
remove.forEach((removeButton,index)=>{

    removeButton.addEventListener("click",()=>{
        let currentArticle = extensions[index]
        currentArticle.classList.add("hide");
    })
})




