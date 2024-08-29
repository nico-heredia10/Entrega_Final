
const productos = async ()=>{

    try{
        let result = await fetch('JS/data.json');
        let data = await result.json()
        // console.log(data)
        localStorage.setItem('Productos', JSON.stringify(data));
    }catch(error){

        console.log('Ups, tuvimos un error al cargar los productos', error);
    }
    
    
}

// ----------------- Creadores de, links y img ------------

const creadorDeDiv = (nombreBodega, arrayBodega)=>{

    nombreBodega = nombreBodega.replace(/\s+/g,'');
    console.log(nombreBodega);
    console.log(arrayBodega);
    
    const divDeBodegas = document.getElementById('divBodegas');

    let divAOcultar = document.querySelector('.divProducto');
    let existe = '';

    let linea = document.querySelector('.linea');
    // console.log(linea)

    if(divAOcultar){
        
        existe = divAOcultar.classList.item(1);
        // console.log(existe)
        if(existe == nombreBodega){

            divDeBodegas.removeChild(divAOcultar);
            linea.style.display = 'none';
        }else{

            if(divAOcultar){

                divDeBodegas.removeChild(divAOcultar);
                linea.style.display = 'none';
            }

            linea.style.display = 'block';
            
            let divProducto = document.createElement('div');

            divProducto.setAttribute('class', `divProducto ${nombreBodega}`);
            // console.log(divProducto);
            arrayBodega.forEach(bode =>{{
        
                let div = document.createElement('div');
                div.setAttribute('class', 'divImg');
        
                div.innerHTML = `<img src='${bode.img}' alt='${bode.nombre}'>
                            <h2>${bode.nombre}</h2>
                            <p>${bode.varietal}</p>
                            <botton id='${bode.id}' class= 'agregar'>Agregar</botton>`
        
                divProducto.appendChild(div);
                
            }})
        
            divDeBodegas.appendChild(divProducto);
            agregarAlCarrito()
            
        }

    }else if(nombreBodega != existe){

        if(divAOcultar){

            divDeBodegas.removeChild(divAOcultar);
        }
        
            linea.style.display = 'block';

            let divProducto = document.createElement('div');

            divProducto.setAttribute('class', `divProducto ${nombreBodega}`);
            // console.log(divProducto);
            arrayBodega.forEach(bode =>{{
        
                let div = document.createElement('div');
                div.setAttribute('class', 'divImg');
        
                div.innerHTML = `<img src='${bode.img}' alt='${bode.nombre}'>
                            <h2>${bode.nombre}</h2>
                            <p>${bode.varietal}</p>
                            <botton id='${bode.id}' class='agregar'>Agregar</botton>`
        
                divProducto.appendChild(div);
                
            }})
        
            divDeBodegas.appendChild(divProducto);
            agregarAlCarrito();
            
    }
            
    
}

const mostradorDeLosVinos = (vinos)=>{
    // console.log(vinos)
    let productos = JSON.parse(localStorage.getItem('Productos'));

    vinos.forEach(vino =>{

        vino.addEventListener('click', (e)=>{

            // console.log(e.target.innerText)
            let bodegaAMostrar = e.target.innerText;
            let bodega = '';

            switch(bodegaAMostrar){

                case'Trapiche':
                    bodega = productos.bodega_Trapiche;
                    creadorDeDiv(bodegaAMostrar, bodega);
                    break;
                case'Catena Zapata':
                    bodega = productos.bodega_Catena;
                    creadorDeDiv(bodegaAMostrar, bodega);
                    break;
                case'Zuccari':
                    bodega = productos.bodega_Zuccari;
                    creadorDeDiv(bodegaAMostrar, bodega);
                    break;
                case'Salentein':
                    bodega = productos.bodega_Salentein;
                    creadorDeDiv(bodegaAMostrar, bodega);
                    break;
            }

            
        })
    })
}


function mostradorDeBodegas (){
    const bodegas = document.getElementById('Bodegas');
    const divDeBodegas = document.getElementById('divBodegas');

    if(bodegas){

       bodegas.addEventListener('click', (e)=>{

        e.preventDefault();
        // console.log(e.target) 

        let existeDiv = document.querySelector('.div1');
        let divDeImg = document.querySelector('.divProducto');
        // console.log(existeDiv);
        let linea = document.querySelector('.linea');
        
        if(existeDiv){

            divDeBodegas.removeChild(existeDiv);
            divDeBodegas.removeChild(divDeImg);
            linea.style.display = 'none'
        }else{
            let div1 = document.createElement('div');
            div1.setAttribute('class', 'div1');
            // console.log(div1);
 
            div1.innerHTML = `<p class='vinos '>Trapiche</p>
                            <p class='vinos '>Catena Zapata</p>
                            <p class='vinos '>Zuccari</p>
                            <p class='vinos '>Salentein</p>`
 
         
            divDeBodegas.appendChild(div1);
            
            const vinos = document.getElementsByClassName('vinos');
            // console.log(vinos)
            const arrayVinos = Array.from(vinos)
            // console.log(arrayVinos)

            mostradorDeLosVinos(arrayVinos);
        }
       
        }) 
    }
    
}

// ------------------ Cambio de Img en el Main ----------------
const cambioDeImg = (productos, num,  index)=>{
    // console.log(productos);
    
    let img = document.querySelectorAll('.imgDelMain');
    // console.log(img[index]);
    let nombre = document.querySelectorAll('.nombre');
    // console.log(nombre[index]);

    if(num < 0){

        num = productos.length - 1

    }else if(num >= productos.length){

        num = 0
    }

        img[index].src = productos[num].img
        img[index].alt = productos[num].nombre
        nombre[index].innerText = productos[num].nombre

        return num;
    
}

// const inicializacion =  (n)=>{
//     num = n;
//     cambiarImgDelMain(num);
// }


function cambiarImgDelMain (){

    let productos = JSON.parse(localStorage.getItem('Productos'));
    // console.log(productos.bodega_Trapiche);
    
    let trapiche = productos.bodega_Trapiche.map(producto =>{

        return{
            nombre: producto.nombre,
            img: producto.img
        }
    })


    let catena = productos.bodega_Catena.map(producto =>{

        return{
            nombre: producto.nombre,
            img: producto.img
        }
    })

    let salentein = productos.bodega_Salentein.map(producto =>{

        return{
            nombre: producto.nombre,
            img: producto.img
        }
    })

    let zuccari = productos.bodega_Zuccari.map(producto =>{

        return{
            nombre: producto.nombre,
            img: producto.img
        }
    })

    let botonIzq = document.querySelectorAll('.botonIzq');
    let botonDer = document.querySelectorAll('.botonDer');
    
    let num = 0;
    // console.log(num)

    botonIzq.forEach((boton, i) =>{
        
        boton.addEventListener('click', (e)=>{

            let divAModificar = e.target.parentElement.parentElement;
            // console.log(divAModificar.className);
            // console.log(e.target)
            let clase = divAModificar.className.split(' ')[0].replace('div', '');
            // console.log(clase)

            if (clase == 'Trapiche'){
                
                num =cambioDeImg( trapiche ,num - 1, i);
                // console.log(num);
                
            }else if (clase == 'Catena'){
                
                num = cambioDeImg( catena ,num - 1, i);
                // console.log(num);

            }else if (clase == 'Salentein'){
                
                num = cambioDeImg( salentein ,num - 1, i);
                // console.log(num);
            
                

            }else if (clase == 'Zuccari'){
                
                num =cambioDeImg( zuccari ,num - 1, i);
                // console.log(num);
                
            }
        })
    })



    botonDer.forEach((boton, i) =>{

        boton.addEventListener('click', (e)=>{
            
            let divAModificar = e.target.parentElement.parentElement;
            let clase = divAModificar.className.split(' ')[0].replace('div', '');
            // console.log(clase)

            if (clase == 'Trapiche'){
              
                num = cambioDeImg( trapiche ,num + 1, i);
            }else if (clase == 'Catena'){
                
            
                num = cambioDeImg( catena ,num + 1, i);

            }else if (clase == 'Salentein'){
                
            
                num = cambioDeImg( salentein ,num + 1, i);

            }else if (clase == 'Zuccari'){
                
            
                num = cambioDeImg( zuccari ,num + 1, i);
            }
        })
    })

}

// ---------------- Funciones creadoras del Carrito --------------


function creandoCarrito() {

    let productosDelCarrito = JSON.parse(localStorage.getItem('carrito'));
    console.log(productosDelCarrito);
    const tablaAAgregar = document.querySelector('.productosAgregados');
    console.log(tablaAAgregar);
    let num = 0;

    productosDelCarrito.forEach(producto =>{

        fila = document.createElement('tr');
        fila.setAttribute('class', num + 1);

        fila.innerHTML = `<td>${num += 1}</td>
                        <td class='nombreCarrito'>${producto.nombre}</td>
                        <td class='cantidad'><span class="icon icon-bin borrar"></span><p>${producto.cantidad}</p></td>
                        <td class='precio'> $${producto.precio}</td>`;
    
        tablaAAgregar.appendChild(fila);
    })
             
}


const agregarAlCarrito = ()=>{

    let agregar = document.querySelectorAll('.agregar');
    console.log(agregar);
    let productos = JSON.parse(localStorage.getItem('Productos'));
    console.log(productos)
    
    let trapiche = productos.bodega_Trapiche;
    let catena = productos.bodega_Catena;
    let salentein = productos.bodega_Salentein;
    let zuccari = productos.bodega_Zuccari;

    class Producto{

        constructor(id, nombre, precio, cantidad){
            this.id = id;
            this.nombre = nombre,
            this.precio = precio,
            this.cantidad = cantidad
        }
    }

    let producto;

    agregar.forEach(agreagador =>{

        agreagador.addEventListener('click', (e)=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Añadido al carrito",
                showConfirmButton: false,
                timer: 1500, 
                customClass: {
                    popup: 'popupAgregar',
                    title: 'titleAgregar'
                }
                
            });
            // console.log(e.target.parentElement.children);

            let id = e.target.id;
            console.log(id)

            let carritoGuardado = localStorage.getItem('carrito');
            let carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
            
            trapiche.forEach(el => {
            
                if(el.id === parseInt(id)){
                    
                    if(el.stock <= 0){

                        Swal.fire({

                            title: 'No hay stock del producto, sepa disculparnos',
                            showConfirmButton: false,
                            timer: 2000,
                            customClass: {
                                popup: 'notiAgregar',
                                title: 'sinStock',
                            }
                        })

                    }else {
                    
                        let productoExistente = carrito.find(item => item.id === el.id);
                   
                        if (productoExistente) {
                        
                            productoExistente.cantidad += 1;
                            productoExistente.precio += el.precio;  
                        
                        } else {
                            let id = el.id;
                            let cantidad = 1;
                            let nombre = el.nombre;
                            let precio = el.precio;
                            producto = new Producto(id, nombre, precio, cantidad);
                            carrito.push(producto);
                        
                        }

                    }
                }
            
            });

            catena.forEach(el => {
                if(el.id === parseInt(id)){

                    if(el.stock <= 0){

                        Swal.fire({

                            title: 'No hay stock del producto, sepa disculparnos',
                            showConfirmButton: false,
                            timer: 2000,
                            customClass: {
                                popup: 'notiAgregar',
                                title: 'sinStock',
                            }
                        })

                    }else{

                        let productoExistente = carrito.find(item => item.id === el.id);

                        if (productoExistente) {
                    
                            productoExistente.cantidad += 1;
                            productoExistente.precio += el.precio;
                        
                        } else {
                            let id = el.id;
                            let cantidad = 1;
                            let nombre = el.nombre;
                            let precio = el.precio;
                            producto = new Producto(id, nombre, precio, cantidad);
                            carrito.push(producto);
                   
                        }
                    }    
                    
                   
                }
            
            });

            salentein.forEach(el => {
                if(el.id === parseInt(id)){

                    if(el.stock <= 0){

                        Swal.fire({

                            title: 'No hay stock del producto, sepa disculparnos',
                            showConfirmButton: false,
                            timer: 2000,
                            customClass: {
                                popup: 'notiAgregar',
                                title: 'sinStock',
                            }
                        })

                    }else{

                        let productoExistente = carrito.find(item => item.id === el.id);

                    if (productoExistente) {
                    
                        productoExistente.cantidad += 1;
                        productoExistente.precio += el.precio;  
                    } else {
                        let id = el.id;
                        let cantidad = 1;
                        let nombre = el.nombre;
                        let precio = el.precio;
                        producto = new Producto(id, nombre, precio, cantidad);
                        carrito.push(producto);
                   
                    }
                    }
                    
                   
                }
            
            })

            zuccari.forEach(el => {
                if(el.id === parseInt(id)){

                    if(el.stock <= 0){

                        Swal.fire({

                            title: 'No hay stock del producto, sepa disculparnos',
                            showConfirmButton: false,
                            timer: 2000,
                            position: 'top-end',
                            customClass: {
                                popup: 'centered-alert notiAgregar',
                                title: 'sinStock',
                            }
                        })

                    }else{
                        let productoExistente = carrito.find(item => item.id === el.id);

                    if (productoExistente) {
                    
                        productoExistente.cantidad += 1;
                        productoExistente.precio += el.precio;  
                    } else {
                        let id = el.id;
                        let cantidad = 1;
                        let nombre = el.nombre;
                        let precio = el.precio;
                        producto = new Producto(id, nombre, precio, cantidad);
                        carrito.push(producto);
                   
                    }

                }
                   
                }
            
            })

            localStorage.setItem('carrito', JSON.stringify(carrito));  
        })
        
        
    })
    
    
}

// ------------- Funcion para Eliminar Productos del Carrito -----

const removerCarrito = ()=>{

    let borrar = document.querySelectorAll('.borrar');

    let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));

    borrar.forEach(remov =>{

        remov.addEventListener('click', (e)=>{

            Swal.fire({

                titleText: '¿Seguro deseas eliminarlo del carrito?',
                showConfirmButton: true,
                confirmButtonText: 'Si',
                showCancelButton: true,
                cancelButtonText: 'No',
                customClass: {
                    popup: 'centered-alert',
                    title: 'modificarTitle',
                    confirmButton: 'botonaAceptar',
                    inputLabel: 'inputLabel',
                    cancelButton: 'botonCancelar'
                }

            }).then(resp=>{

                if(resp.isConfirmed){
                    // console.log(e.target.parentElement.parentElement.children[1].innerText);

                    let nombre = e.target.parentElement.parentElement.children[1].innerText;

                    let carritoActualizado = carritoGuardado.filter(item => item.nombre != nombre);

                    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));

                    e.target.parentElement.parentElement.remove();

                }
            })
            
        })
    })
}

const terminarCompra = ()=>{

    const aceptarCompra = document.querySelector('.aceptar');
    let productosDelCarrito = JSON.parse(localStorage.getItem('carrito'));
    
    aceptarCompra.addEventListener('click', (e)=>{

        let totalCantidad = productosDelCarrito.reduce((acc, el) => acc + el.cantidad, 0)
        console.log(totalCantidad);

        let totalPrecio = productosDelCarrito.reduce((acc, el) => acc + el.precio, 0);
        console.log(totalPrecio);

        if(!productosDelCarrito){
            
            Swal.fire({
                title: 'No tiene productos en el carrito',
                customClass: {
                    popup: 'centered-alert',
                    title: 'modificarTitle',
                }
            })

        }else{

            Swal.fire({

                titleText: `Cantidad total de botellas: ${totalCantidad} \n Precio Total: $${totalPrecio}
                \n Desea finalizar compra?`,
                confirmButtonText: 'Si',
                showCancelButton: 'true',
                cancelButtonText: 'No',
                customClass: {
                    popup: 'centered-alert finaliza',
                    title: 'titleFinaliza',
                    confirmButton: 'botonFinalizar',
                    cancelButton: 'botonFinalizar'
                }
                
            }).then(response =>{

                if(response.isConfirmed){

                    Swal.fire({

                        title: '¡Genial!',
                        html: `
                        <label for="input1" class="inputLabel">Nombre:</label>
                        <input id="input1" class="swal2-input">
                        <label for="input2" class="inputLabel">Apellido:</label>
                        <input id="input2" class="swal2-input">
                        `,
                        confirmButtonText: 'Enviar',
                        customClass: {
                            popup: 'centered-alert Fin',
                            title: 'titleFinaliza',
                            inputLabel: 'inputLabel',
                            input: 'InputFinal'
                        },

                        preConfirm: () =>{

                            const input1 = document.getElementById('input1').value.trim();
                            const input2 = document.getElementById('input2').value.trim();

                            const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

                            if(!input1 || !input2){
                                Swal.showValidationMessage('Por favor, completa ambos campos!');

                                return false;
                            }

                            if (!regex.test(input1) || !regex.test(input2)){

                                Swal.showValidationMessage('Solo se permiten letras en ambos campos');
                            }

                            return{ input1, input2}
                            
                        }

                    }).then(ok =>{

                        if(ok.isConfirmed){

                            Swal.fire({

                                title: `Gracias ${input1.value} ${input2.value} por su compra. En la brevedad nos comunicaremos con usted. Abrazo!`,
                                timer: 5000,
                                showConfirmButton: false,
                                customClass: {
                                    popup: 'centered-alert Fin',
                                    title: 'titleFinaliza',
                                    
                                },
                            })
                        }
                    })

                    descontarProducto(productosDelCarrito);
                }
            })
        }
    })
}

function descontarProducto (productos){

    console.log(productos);
    
    let productosExistentes = JSON.parse(localStorage.getItem('Productos'));

    for (let categoria in productosExistentes){

        if(Array.isArray(productosExistentes[categoria])){
            console.log(productosExistentes[categoria][0].stock);
            productosExistentes[categoria].map(elemento =>{

                let nombre = elemento.nombre.replace(/\s+/g, '');
                let nombreAComparar = productos.nombre.replace(/\s+/g, '');
                
                if(nombre === nombreAComparar){
                    console.log('hola puto');
                    return elemento.stock -= productos.cantidad;
                }
                
            })
        }
    }

    console.log(productosExistentes.bodega_Trapiche[0].stock);
    localStorage.setItem('Productos', JSON.stringify(productosExistentes));
    localStorage.removeItem('carrito')

}

// --------- Inicio de Aplicaion ----------------

function comienzoDeAplicacion (){

    if(sessionStorage.getItem('edadConfirmada') === 'true'){

        iniciarPagina();
        return;
    }

    Swal.fire({
        
        title: 'Bienvenido!',
        inputLabel: 'Ingresa tu edad:',
        input: 'text',
        color: '#EE82EE',
        confirmButtonText: 'Aceptar',
        customClass: {
            popup: 'centered-alert',
            title: 'modificarTitle',
            confirmButton: 'botonaAceptar',
            inputLabel: 'inputLabel'
        }
    })
    .then(response =>{
        // console.log(parseInt(response.value));
        if(isNaN(parseInt(response.value))){
            Swal.fire({

                icon: 'error',
                titleText: 'El dato ingresado no es un NUMERO',
                color: '#EE82EE',
                confirmButtonText: 'Aceptar',
                customClass: {
                popup: 'centered-alert',
                title: 'modificarTitle',
                confirmButton: 'botonaAceptar',
                icon: 'icono-cart'
                }

            }).then(resp =>{

                if(resp.value || !resp.value){

                    comienzoDeAplicacion();
                }
            })

        }else if(parseInt(response.value) < 18){

            Swal.fire({

                title: 'Eres menor de EDAD',
                color: '#EE82EE',
                imageUrl: 'https://i.gifer.com/1dqt.gif',
                imageWidth: '120px',
                imageHeight: '90px',
                customClass: {
                    popup: 'centered-alert',
                    title: 'modificarTitle',
                    confirmButton: 'botonaAceptar',
                    icon: 'icono-cart'
                    }
            }).then(resp =>{
                
                if(resp.value || !resp.value){

                    document.body.style.display = 'none';
                }
            })

        }else if(parseInt(response.value) >= 18){
            
            sessionStorage.setItem('edadConfirmada', true);
            let existeCarrito = JSON.parse(localStorage.getItem('carrito'));
            console.log(existeCarrito);

            if(existeCarrito.length > 0){

                Swal.fire({
                    title: 'Tienes un carrito guardado \n ¿Desea seguir con su compra?',
                    confirmButtonText: 'SI',
                    showCancelButton: 'true',
                    cancelButtonText: 'NO',
                    customClass: {
                        popup: 'centered-alert',
                        title: 'modificarTitle',
                        confirmButton: 'botonaAceptar',
                        icon: 'icono-cart',
                        cancelButton: 'botonCancelar'
                        }
                }).then(resp =>{
    
                    console.log(resp);
                    if(resp.isConfirmed){
    
                        iniciarPagina();
                    }else if(resp.isDismissed){
                        
                        localStorage.removeItem('carrito');
                        iniciarPagina();
                    }
                })

            }else{

                Swal.fire({
                    title: 'Usted sea ¡Bienvenido!',
                    showConfirmButton: 'false',
                    customClass: {
                        popup: 'centered-alert',
                        title: 'modificarTitle',
                    }
                })
            }
            
        }
    })
}
    

        


const iniciarPagina = ()=>{

    mostradorDeBodegas();
    productos();
    cambiarImgDelMain();
    creandoCarrito();
    removerCarrito();
    terminarCompra();
}

document.addEventListener('DOMContentLoaded', () => {

    comienzoDeAplicacion();
    
});
