"use strict";
let menu = document.querySelector(".main-menu__list");
let button = document.querySelector(".main-menu__close");

button.onclick = e => {
    if (menu.classList.contains("hidden-item")) {
        menu.classList.remove("hidden-item");
        button.classList.remove("main-menu__open");
        button.classList.add("main-menu__close");
    } else {
        menu.classList.add("hidden-item");
        button.classList.add("main-menu__open");
        button.classList.remove("main-menu__close");
    }
};
