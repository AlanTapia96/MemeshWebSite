document.addEventListener('DOMContentLoaded', e => {

    document.addEventListener('click', e => {

        if(e.target.parentElement.classList.contains('img-celebraciones')){
            let imagenActual = e.target.parentElement;
            let imagenActualSrc = imagenActual.firstChild.getAttribute('src');

            let regex = /(\d+)/g;
            const arrayImgs = arrayImagenes('.img-celebraciones',regex);

            let imagenPrincipal = document.getElementById('celebraciones__img-principal');
            let numImagenPrincipal = imagenPrincipal.getAttribute('src').match(regex);
            arrayImgs.push(parseInt(numImagenPrincipal[0]));

            const numAleatorio = generateNumAleatorio(arrayImgs,5);

            imagenPrincipal.setAttribute('src',imagenActualSrc); 
            imagenActual.firstChild.setAttribute('src',`./assets/productos_y_servicios/producto-servicio-${numAleatorio}.jpg`)


        }else if(e.target.parentElement.classList.contains('img-casamientos')){
            let imagenActual = e.target.parentElement;
            let imagenActualSrc = imagenActual.firstChild.getAttribute('src');

            let regex = /(\d+)/g;
            const arrayImgs = arrayImagenes('.img-casamientos',regex);

            let imagenPrincipal = document.getElementById('casamientos__img-principal');
            let numImagenPrincipal = imagenPrincipal.getAttribute('src').match(regex);
            arrayImgs.push(parseInt(numImagenPrincipal[0]));

            const numAleatorio = generateNumAleatorio(arrayImgs,11);

            imagenPrincipal.setAttribute('src',imagenActualSrc); 
            imagenActual.firstChild.setAttribute('src',`./assets/casamientos/casamientos${numAleatorio}.jpg`)
        }

    })

    const arrayImagenes = (classImgs,regex) =>{
        let arrayImgs = [];
        let imagenesActuales = document.querySelectorAll(`${classImgs}`);
            imagenesActuales.forEach(img => {
                    imgNum = img.firstChild.getAttribute('src').match(regex); 
                    arrayImgs.push(parseInt(imgNum[0]))
            }) 
            return arrayImgs;
    }

    const generateNumAleatorio = (arrayImgs,cantImgs) => {
        let numAleatorio = Math.floor((Math.random() * cantImgs) + 1); 
            while(arrayImgs.includes(numAleatorio))
                numAleatorio = Math.floor((Math.random() * cantImgs) + 1);
        return numAleatorio
        }

})