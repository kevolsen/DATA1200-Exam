fetch("../components/nav.component.html")
.then(res => res.text())
.then(text => {
    let element = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "header-content");
    newelem.innerHTML = text;
    element.parentNode.replaceChild(newelem, element);
})




/* 
 $(document).ready(function(){
    // Logic her
 });

 $(window).scroll(function(){
    // Logic here

    let windowTop = $(window).scrollTop();

    $(".slide").each(function(event){
        if(windowTop >= $($this).attr('href')).offset().top - 100){
    });
 }); */0