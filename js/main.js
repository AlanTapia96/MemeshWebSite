import carousel from "./carousel.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    // let l = 0;

    d.addEventListener('click',(e)=>{
        let parentElement = e.target.parentElement;
        if(parentElement.classList[1] == "right" || parentElement.classList[1] == "left"){
            let direction = e.target.parentElement.classList[1];
            let divChilds = e.target.parentElement.parentElement.nextSibling.nextSibling.querySelectorAll('div');
            carousel(direction,divChilds);
        }
    })



})


