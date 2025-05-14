fetch("../components/booking.component.html")
.then(res => res.text())
.then(text => {
    let element = document.querySelector("script#booking");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "booking");
    newelem.innerHTML = text;
    element.parentNode.replaceChild(newelem, element);
})