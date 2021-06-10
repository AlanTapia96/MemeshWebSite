import carousel from "./carousel.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    let l = 0;

    d.addEventListener('click',(e)=>{
        let direction = e.target.parentElement.classList[1];
        let divChilds = e.target.parentElement.parentElement.childNodes[5].querySelectorAll('div');
        carousel(direction,divChilds);
    })

})











// // document.addEventListener("DOMContentLoaded", e =>{
//     let span = document.querySelectorAll('#carousel-others .span');
//     let div = document.querySelectorAll('#carousel-others_imgs div');

//     let prueba = span.div;
//     console.log(prueba);


//     console.log(div);
//     let l = 0;


//     span[0].onclick = () => {
//         l--;

//         for (const i of div) {
//             if(l==0) i.style.left = '0px';
//             if(l==1) i.style.left = '-37rem';
//             if(l==2) i.style.left = '-75rem';
//             if(l==3) i.style.left = '-112.5rem';
//             if(l<0) l=0;
//         };
       
//     }
    
//     span[1].onclick = () => {
//         l++;
//         for (const i of div) {
//             if(l==0) i.style.left = '0px';
//             if(l==1) i.style.left = '-37rem';
//             if(l==2) i.style.left = '-75rem';
//             if(l==3) i.style.left = '-112.5rem';
//             if(l==4) i.style.left = '-145rem';
//             if(l>4) l=4;
//         }
        
//     }
    
    
// // })
