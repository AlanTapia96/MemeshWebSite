const d = document;

export default function carousel(direction,divChilds){

    if(direction == 'left'){
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

