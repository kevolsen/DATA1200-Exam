
fetch("../components/home.component.html")
.then(res => res.text())
.then(text => {
    let element = document.querySelector("script#home");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "home-container");
    newelem.innerHTML = text;
    element.parentNode.replaceChild(newelem, element);
})

let slideIndex = 0;
showSlides();


function nextSlide(number){
    showSlides(slideIndex += number);
}

function currentSlide(number){
    showSlides(slideIndex = number);
} 

function showSlides(){
    let i = 0; 
    let slides = document.getElementsByClassName("slideshow");

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++; 
    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);

    /* 
    let dots = document.getElementsByClassName("dot");
    if(number > slides.length){slideIndex = 1;}
    if(number < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    */
}