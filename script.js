/**********script for hide/show info***********/

let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("d1");
togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).display != "none") {
        d1.style.display = "none";
        togg1.innerHTML = "more info";
    } else {
        d1.style.display = "block";
        togg1.innerHTML = "less info";
    }
})

let togg2 = document.getElementById("togg2");
let d2 = document.getElementById("d2");
togg2.addEventListener("click", () => {
    if (getComputedStyle(d2).display != "none") {
        d2.style.display = "none";
        togg2.innerHTML = "more info";
    } else {
        d2.style.display = "block";
        togg2.innerHTML = "less info";
    }
})

let togg3 = document.getElementById("togg3");
let d3 = document.getElementById("d3");
togg3.addEventListener("click", () => {
    if (getComputedStyle(d3).display != "none") {
        d3.style.display = "none";
        togg3.innerHTML = "more info";
    } else {
        d3.style.display = "block";
        togg3.innerHTML = "less info";
    }
})

/*****************************************************/

/**************script for dropdown menu***************/

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/****************************************************************************************************/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}