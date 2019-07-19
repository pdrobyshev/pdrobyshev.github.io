const hamburger = document.querySelector('.lines');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const navLinks = document.querySelector('.nav-links');

hamburger.onclick = function () {
    navLinks.classList.toggle("open");
    line1.classList.toggle("open-line");
    line2.classList.toggle("open-line");
    line3.classList.toggle("open-line");
};

