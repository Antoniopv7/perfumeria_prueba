window.addEventListener('DOMContentLoaded', event => {
    fetch('http://127.0.0.1:8000/productos/rest-api/productos/')
    .then(response => response.json())
    .then(data => { 
        const productos = data;
        //console.log(productos[0].ropa.foto[0].foto)
        //document.querySelector('.box').innerHTML = productos[0].ropa.foto[0].foto;
        console.log(data);
        const l = productos.length;
        //CREANDO CONTENEDORES

        let cont2 = document.createElement('div')
        cont2.className = "row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"        
        cont2.id = 'cont2'
        document.querySelector("#cont1").appendChild(cont2)
        for (var i = 0; i < l ;i++){
            

            let contproductos = document.createElement('div')
            contproductos.className = "col mb-5"
            contproductos.id = 'contp'+i
            document.querySelector('#cont2').appendChild(contproductos)

            let contarjeta = document.createElement('div')
            contarjeta.className = "card h-100 sombra"
            contarjeta.id = 'tar'+i
            document.querySelector('#contp'+i).appendChild(contarjeta)

            //AGREGANDO IMAGEN AL CONTENEDOR DE LOS PRODUCTOS (box)
            let contImg = document.createElement('img')
            contImg.className = "card-img-top"
            contImg.src = productos[i].imagen[0].imagen
            document.querySelector('#tar'+i).appendChild(contImg)

            
            //AGREGANDO LA DESCRIPCION
            let cont3 = document.createElement('div');
            cont3.className = "card-body p-4"
            cont3.id = "cont3"+i
            document.querySelector('#tar'+i).appendChild(cont3)

            let cont4 = document.createElement('div');
            cont4.className = "text-center"
            cont4.id = "cont4"+i
            //cont4.innerText="$"+productos[i].precio
            document.querySelector('#cont3'+i).appendChild(cont4)


            let des = document.createElement('h5');
            des.innerText = productos[i].descripcion
            des.className = "fw-bolder"
            document.querySelector('#cont4'+i).appendChild(des)

            let des2 = document.createElement('h5');
            des2.innerText = productos[i].ml +" ml"
            des2.className = "fw-normal"
            document.querySelector('#cont4'+i).appendChild(des2)

            //AGREGANDO EL PRECIO
            let precio = document.createElement('h5');
            precio.innerText = "$ "+new Intl.NumberFormat().format(productos[i].precio)
            precio.className = "fw-normal"
            document.querySelector('#cont4'+i).appendChild(precio)


            //AGREGAR ACCION
            let cont5 = document.createElement('div')
            cont5.className = "card-footer p-4 pt-0 border-top-0 bg-transparent"
            cont5.id = "cont5"+i
            document.querySelector('#cont4'+i).appendChild(cont5)

            
            let cont6 = document.createElement('div')
            cont6.className = "text-center"
            cont6.id = "cont6"+i
            document.querySelector('#cont5'+i).appendChild(cont6)

            let cont7 = document.createElement('a')
            cont7.className = "btn btn-outline-dark mt-auto"
            cont7.innerText = "Agregar"
            document.querySelector('#cont6'+i).appendChild(cont7)


        }

        
    });

})
/*
<!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Borella Woman 212 VIP</h5>
                                    <h5 class="fw-normal">50 ml</h5>
                                    <!-- Product price-->
                                    $10.000
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carro</a></div>
                            </div>
                        </div>
                    </div>


                */