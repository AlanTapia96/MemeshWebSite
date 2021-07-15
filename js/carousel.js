const d = document;

export default function carousel(direction,divChilds,widthDiv,cantDivChilds,posLastDiv){

    console.log("position antes de moverse" + posLastDiv);

    if(direction == 'left'){
        for (const div of divChilds) {
            //let positionFirstCard = divChilds[0].getComputedStyle(div).left.slice(0,-2);
            let position = getComputedStyle(div).left.slice();
            let totalWidth = 18.5 //REM width+margin+padding
            let totalWidthParent = totalWidth * cantDivChilds;
            let widthHidden = totalWidthParent - widthDiv;
            let cardsHidden = widthHidden / totalWidth;
            let moove = ((parseFloat(position) / 16) + 18.5);
                //if(divChildes[-1].getComputedStyle(div).left.slice(0,-2) != )

            // }else{
            //     let moove = ((parseFloat(position) / 16) + 18.5);
            // }
            // let rest = ((parseFloat(widthHidden - posLastDiv) / 16))
                if(moove < 2){
                    let style = moove + "rem"
                    div.style.left = style;
                }
                let postAfterMove = div.getBoundingClientRect().x;
                    console.log(postAfterMove);
            }
            
    }else if(direction == 'right'){
        for (const div of divChilds) {
            let position = getComputedStyle(div).left.slice(0,-2);
            let moove = ((parseFloat(position) / 16) - 18.5);

            let totalWidth = 18.5 //REM width+margin+padding
            let totalWidthParent = totalWidth * cantDivChilds;
            let widthHidden = totalWidthParent - widthDiv;
            let cardsHidden = widthHidden / totalWidth;
            let rest = ((parseFloat(widthHidden - posLastDiv) / 16))
            // console.log("width hidden",widthHidden);
            // console.log("rest",rest);
            if(rest < 10){
                let style = moove + "rem"
                div.style.left = style;
            }
            console.log(rest);
            // let postAfterMove = div.getBoundingClientRect().x;
            // console.log(postAfterMove);

            // if(moove > -76.92){
            //     let style = moove + "rem"
            //     div.style.left = style;
            // }

            }
        }

        // let postAfterMove = divChilds[divChilds.length - 1].getBoundingClientRect().x;
        // console.log("position después de moverse" + postAfterMove);


        // let totalWidth = 18.5 //REM width+margin+padding
        // let totalWidthParent = totalWidth * cantDivChilds;
        // let widthHidden = totalWidthParent - widthDiv;
        // let cardsHidden = widthHidden / totalWidth;
        // let rest = ((parseFloat(widthHidden - posLastDiv) / 16))
        // console.log("width hidden",widthHidden);
        // console.log("rest",rest);

}

