"use strict"


let togglers = document.querySelectorAll(".btn");
for (let i = 0 ;i < togglers.length; i++) {
    togglers[i].addEventListener("click", function(e) {
        let clickedBtnSibling = this.nextElementSibling;
        clickedBtnSibling.classList.toggle("show")
    });
}


