fetch('http://127.0.0.1:8000/productos/rest-api/productos/')
.then(response => response.json())
.then(data => { 
    const productos = data;
    //console.log(productos[0].ropa.foto[0].foto)
    //document.querySelector('.box').innerHTML = productos[0].ropa.foto[0].foto;
    console.log(data);
    const l = productos.length;
    for (var i = 0; i < l ;i++){
        console.log('asdas')
        //CREANDO CONTENEDORES
        let cont = document.createElement('a')
        cont.className = "box"
        cont.id = "box-"+i
        cont.href = "#"
        document.querySelector('.productos').appendChild(cont)

        let contImg = document.createElement('div')
        contImg.className = "contenedor-imagen"
        contImg.id = "contenedor-imagen-"+i
        document.querySelector('#box-'+i).appendChild(contImg)

        //AGREGANDO IMAGEN AL CONTENEDOR DE LOS PRODUCTOS (box)
        let imagen = document.createElement('img');
        imagen.src = productos[i].imagen[0].imagen
        console.log(productos[i].imagen[0].imagen)
        imagen.className = "image-size"
        document.querySelector('#contenedor-imagen-'+i).appendChild(imagen)
        
        //AGREGANDO LA DESCRIPCION
        let descripcion = document.createElement('h3');
        descripcion.innerText = productos[i].descripcion
        descripcion.className = "descripcion"
        document.querySelector('#box-'+i).appendChild(descripcion)

        //AGREGANDO EL PRECIO
        let precio = document.createElement('h5');
        precio.innerText = "Precio  "+" $"+productos[i].precio
        precio.className = "precio"
        document.querySelector('#box-'+i).appendChild(precio)
        if(productos[i].oferta>0){
            precio.style.textDecoration = "line-through";
            precio.className = "precio-of"
            //console.log(precio.style.textDecoration)
            document.querySelector('#box-'+i).appendChild(precio)

            //AGREGANDO LA OFERTA SI ES QUE EXISTE
            let oferta = document.createElement('h5');
            oferta.innerText ="-"+productos[i].oferta*100+"% Oferta  "+" $"+productos[i].precio*(1-productos[i].oferta)
            oferta.className = "oferta"
            document.querySelector('#box-'+i).appendChild(oferta)
        }

        //AGREGANDO MAS DETALLES HOVER A .box
        /*let detalle = document.createElement('div')
        detalle.className = "detalles"
        document.querySelector('#box-'+i).appendChild(detalle)

        //AGREGANDO LOS DETALLES QUE VAN EN EL TOOLTIP
        const largoDetalles= productos[i].ropa.detalleropa.length
        for (var x = 0; x < largoDetalles ;x++){
            tallas = []
            if (x==0){
                let det = "Tallas "+ productos[i].ropa.detalleropa[x].talla.talla
                detalle.setAttribute('data-tooltip', det)
                tallas.push(productos[i].ropa.detalleropa[x].talla.talla)
            } else if( tallas.includes(productos[i].ropa.detalleropa[x].talla.talla)==false) {

                det =  detalle.getAttribute('data-tooltip')+",  " + productos[i].ropa.detalleropa[x].talla.talla
                detalle.setAttribute('data-tooltip', det)
                tallas.push(productos[i].ropa.detalleropa[x].talla.talla)
            }
        }
        for (var x = 0; x < largoDetalles ;x++){
            colores = []
            if (x==0){
                det =  detalle.getAttribute('data-tooltip')+ " Colores  " + productos[i].ropa.detalleropa[x].color.color
                detalle.setAttribute('data-tooltip', det)
                colores.push(productos[i].ropa.detalleropa[x].color.color)
            } else if( colores.includes(productos[i].ropa.detalleropa[x].color.color)==true)  {
                det =  detalle.getAttribute('data-tooltip')+", " + productos[i].ropa.detalleropa[x].color.color
                detalle.setAttribute('data-tooltip', det)
                colores.push(productos[i].ropa.detalleropa[x].color.color)
            }
        }*/
    }

    
});