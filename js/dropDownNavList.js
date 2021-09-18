function active() {
    var nav_list = document.getElementById("nav_list");
    nav_list.classList.toggle("active");
};
var mainImg = document.getElementById("main-img");
var textBox = document.getElementById("text-box");

function redisplay(element) {
    mainImg.src = element.src;
    textBox.innerHTML = element.alt;
};