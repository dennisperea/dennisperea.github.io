"using strict"

function toggleNav(){
    const navBarElem = document.getElementById("navbar");
    navBarElem.classList.toggle("hidden");
}

window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;
}