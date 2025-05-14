fetch("../components/topical.component.html")
.then(res => res.text())
.then(text => {
    let element = document.querySelector("script#topical");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "topical");
    newelem.innerHTML = text;
    element.parentNode.replaceChild(newelem, element);
})