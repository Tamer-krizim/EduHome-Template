'use strict';

/**
 * Element Toggle Function
 */
const toggleElem = function (ele) { ele.classList.toggle("active");}

/**
 * Navbar toggle slide
 * And if the user click on the overlay
 * the navber will disappeared
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

navTogglers.forEach (function (e) {
    e.addEventListener("click", function () {
        toggleElem(navbar);
        toggleElem(overlay)
    })
})

overlay.addEventListener("click", function() {
    toggleElem(navbar);
    toggleElem(overlay)
})

/**
 * Header Sticky & Back To Top Button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]")

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        header.classList.add("header-anim");
        backTopBtn.classList.add("active");
    }else {
        header.classList.remove("active");
        header.classList.remove("header-anim");
        backTopBtn.classList.remove("active");
    }
})


/**
 * Search Box Toggle
 */
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

searchTogglers.forEach (function (e) {
    e.addEventListener("click", function () {
        toggleElem(searchBox);
    })
});

/**
 * Whishlist button Toggle
 */
const whishListBtns = document.querySelectorAll("[data-whish-btn]");

whishListBtns.forEach(function (e) {
    e.addEventListener("click", function () {
        toggleElem(this);
    })
})

const traker = document.querySelector(".traker");

document.body.addEventListener("mousemove", e => {
    traker.style.left = `${e.clientX}px`;
    traker.style.top = `${e.clientY}px`;
})