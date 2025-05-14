fetch("../components/menu.component.html")
.then(res => res.text())
.then(text => {
    let element = document.querySelector("script#menu");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "menu");
    newelem.innerHTML = text;
    element.parentNode.replaceChild(newelem, element);
})