"use strict"
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let themeChange = document.querySelector(".theme_change_button");
let toggle = document.querySelectorAll(".toggle_switch");
let circle = document.querySelectorAll(".circle");
let remove = document.querySelectorAll('.remove');
let extensions = document.querySelectorAll(".extension");
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let inactive = document.querySelector(".inactive");
let activeToggles = [];

themeChange.addEventListener("click",()=>{
 
    if(!document.body.classList.contains("dark_mode")){
        console.log(true);
        // document.body.classList.add("dark_mode");
        func(document.body,"dark_mode","add");
        
        // icon switch
        moon.style.display = "none";
        sun.style.display = "block";
        themeChange.style.backgroundColor = "#222737";
    
    }
    else{
        console.log(false);
        // document.body.classList.remove("dark_mode");
        func(document.body,"dark_mode","remove");
        sun.style.display = "none";
        moon.style.display = "block";
        themeChange.style.backgroundColor = "#eeefeb";
    }

})
// animation add and remove

let func = function(element,classname,action = "add"){
    if(action === "remove"){
        element.classList.remove(classname);
    }
    else{
        element.classList.add(classname);
    }

}

toggle.forEach((element,index) =>{
    
    element.addEventListener("click",()=>{
        
        let currentCircle = circle[index];

        // activeToggles.push(index);
        // console.log("circle index" + index)
       
        if(!currentCircle.classList.contains("animation_on")){
            // currentCircle.classList.add("animation_on");
            func(currentCircle,"animation_on","add");
            activeToggles.push(index);
            // currentCircle.classList.remove("animation_off");
            func(currentCircle,"animation_off","remove");
            element.style.backgroundColor = "#D92626";

        }
        else{
            activeToggles = activeToggles.filter(i => i !==index)
            // currentCircle.classList.remove("animation_on");
            func(currentCircle,"animation_on","remove");
            // currentCircle.classList.add("animation_off");
            func(currentCircle,"animation_off","add");
            element.style.backgroundColor = "#c5c5c5";
        }
        
       
    })

})

let bgColor = function(color1,color2,color3){
    all.style.backgroundColor = color1;
    active.style.backgroundColor = color2;
    inactive.style.backgroundColor = color3;
}

all.addEventListener("click",()=>{
    // all.style.backgroundColor = "#D92626";
    // active.style.backgroundColor = "#FFFFFF";
    // inactive.style.backgroundColor = "#FFFFFF";
    bgColor("#D92626","#FFFFFF","#FFFFFF")
    
    extensions.forEach(tag =>{
        // element.classList.remove("hide");
        func(tag,"hide","remove");
    })
})

active.addEventListener("click",() =>{
    // all.style.backgroundColor = "#FFFFFF";
    // active.style.backgroundColor = "#D92626";
    // inactive.style.backgroundColor = "#FFFFFF";
    bgColor("#FFFFFF","#D92626","#FFFFFF")

    console.log(activeToggles)
    extensions.forEach((element,index)=>{
        // element.classList.remove("hide");
        func(element,"hide","remove");
        if(!activeToggles.includes(index)){
            console.log(index);
            // element.classList.add("hide");
            func(element,"hide","add");
        }
        
    })
  
})

inactive.addEventListener("click",()=>{
    
    extensions.forEach((element,index)=>{
        // element.classList.remove("hide");
        func(element,"hide","remove");
        if(activeToggles.includes(index)){
           
            console.log(index);
            // element.classList.add("hide");
            func(element,"hide","add");
        }
        
    })
    // all.style.backgroundColor = "#FFFFFF";
    // active.style.backgroundColor = "#FFFFFF";
    // inactive.style.backgroundColor = "#D92626";
    bgColor("#FFFFFF","#FFFFFF","#D92626")
    
})

remove.forEach((removeButton,index)=>{

    removeButton.addEventListener("click",()=>{
        let currentArticle = extensions[index]
        console.log("article index: " + index);
        
        // currentArticle.classList.add("hide");
        func(currentArticle,"hide","add");
        currentArticle.remove();
    })
    
})

