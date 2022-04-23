let img = document.querySelector(".hamburger__img");
let mobileMenu = document.querySelector(".mobile__menu");

img.addEventListener("click",function(){
    if (img.classList.contains("hamburger__img")){
        img.classList.replace("hamburger__img","hamburger__img__open");
        if (mobileMenu.classList.contains("hide")){
            mobileMenu.classList.replace("hide","show")
        }else {
            mobileMenu.classList.add("show")
        }


    }else if(img.classList.contains("hamburger__img__open")){
        img.classList.replace("hamburger__img__open","hamburger__img");
        mobileMenu.classList.replace("show","hide")
    }
})


