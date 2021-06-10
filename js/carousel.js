const d = document;

export default function carousel(direction,divChilds){
    
    // if(direction == 'left'){
    //     l--;
    //     for (const i of divChilds) {
    //         if(l==0) i.style.left = '0px';
    //         if(l==1) i.style.left = '-37rem';
    //         if(l==2) i.style.left = '-75rem';
    //         if(l==3) i.style.left = '-112.5rem';
    //         if(l<0) l=0;
    //     };
    // }else if(direction == 'right'){
    //     l++;
    //     for (const i of divChilds) {
    //         if(l==0) i.style.left = '0px';
    //         if(l==1) i.style.left = '-37rem';
    //         if(l==2) i.style.left = '-75rem';
    //         if(l==3) i.style.left = '-112.5rem';
    //         if(l==4) i.style.left = '-145rem';
    //         if(l>4) l=4;
    //     }
    // }
    if(direction == 'left'){
        console.log("left");
        for (const div of divChilds) {
            let valor = getComputedStyle(div).left.slice(0,-2);
            let convertido = ((parseFloat(valor) / 16) + 37);
            console.log(convertido);
            if(convertido < 5){
                let style = convertido + "rem"
                div.style.left = style;
            }
        }

    }else if(direction == 'right'){
        
        for (const div of divChilds) {
            let valor = getComputedStyle(div).left.slice(0,-2);
            let convertido = ((parseFloat(valor) / 16) - 37);
            console.log(convertido);
            if(convertido > -145){
                let style = convertido + "rem"
                div.style.left = style;
            }

            }

        }
}

