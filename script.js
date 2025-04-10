"use strict";

// tab
const tabItem = document.querySelectorAll('.tab-header-item');
const tabHeader = document.querySelector('.tab-header');
const tabContent = document.querySelectorAll('.tab-content-item');

tabHeader.addEventListener('click', function (e) {
    const clicked = e.target.closest('.tab-header-item');

    if (!clicked) return;
})


