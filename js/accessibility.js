fetch("../components/accessibility.component.html")
.then(res => res.text())
.then(text => {
    let element = document.querySelector("script#accessibility");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "accessibility-container");
    newelem.innerHTML = text;
    element.parentNode.replaceChild(newelem, element);
})