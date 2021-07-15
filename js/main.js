import carousel from "./carousel.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    // let l = 0;

    d.addEventListener('click',(e)=>{
        let parentElement = e.target.parentElement;
        if(parentElement.classList[1] == "right" || parentElement.classList[1] == "left"){
            let direction = e.target.parentElement.classList[1];
            let divChilds = e.target.parentElement.parentElement.nextSibling.nextSibling.querySelectorAll('div');
            let widthDivParent = e.target.parentElement.parentElement.nextSibling.nextSibling.clientWidth;
            let cantDivChilds = divChilds.length;
            let posLastDiv = divChilds[divChilds.length - 1].getBoundingClientRect().x;
            // console.log('position last div' + divChilds[divChilds.length - 1].getBoundingClientRect().x);
            // console.log('width ' + widthDivParent);
            carousel(direction,divChilds,widthDivParent,cantDivChilds,posLastDiv);
        }
    })



})


