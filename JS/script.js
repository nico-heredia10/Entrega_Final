
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

const creadorDeDiv = (nombreBodega, arrayBodega)=>{

    nombreBodega = nombreBodega.replace(/\s+/g,'');
    console.log(nombreBodega);
    console.log(arrayBodega);
    
    const divDeBodegas = document.getElementById('divBodegas');

    let divAOcultar = document.querySelector('.divProducto');
    let existe = '';

    if(divAOcultar){
        
        existe = divAOcultar.classList.item(1);
        // console.log(existe)
        if(existe == nombreBodega){

            divDeBodegas.removeChild(divAOcultar);

        }else{

            if(divAOcultar){

                divDeBodegas.removeChild(divAOcultar);
            }
            
            let divProducto = document.createElement('div');

            divProducto.setAttribute('class', `divProducto ${nombreBodega}`);
            console.log(divProducto);
            arrayBodega.forEach(bode =>{{
        
                let div = document.createElement('div');
                div.setAttribute('class', 'divImg');
        
                div.innerHTML = `<img src='${bode.img}' alt='${bode.nombre}'>
                            <h2>${bode.nombre}</h2>
                            <p>${bode.varietal}</p>
                            <botton class= 'agregar'>Agregar</botton>`
        
                divProducto.appendChild(div);
        
            }})
        
            divDeBodegas.appendChild(divProducto);
            
        }

    }else if(nombreBodega != existe){

        if(divAOcultar){

            divDeBodegas.removeChild(divAOcultar);
        }
        

            let divProducto = document.createElement('div');

            divProducto.setAttribute('class', `divProducto ${nombreBodega}`);
            console.log(divProducto);
            arrayBodega.forEach(bode =>{{
        
                let div = document.createElement('div');
                div.setAttribute('class', 'divImg');
        
                div.innerHTML = `<img src='${bode.img}' alt='${bode.nombre}'>
                            <h2>${bode.nombre}</h2>
                            <p>${bode.varietal}</p>
                            <botton class= 'agregar'>Agregar</botton>`
        
                divProducto.appendChild(div);
        
            }})
        
            divDeBodegas.appendChild(divProducto);

            
    }
            
    
}

const mostradorDeLosVinos = (vinos)=>{
    console.log(vinos)
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

    bodegas.addEventListener('click', (e)=>{

        e.preventDefault();
        // console.log(e.target) 

        let existeDiv = document.querySelector('.div1');
        let divDeImg = document.querySelector('.divProducto');
        // console.log(existeDiv);
        
        if(existeDiv){

            divDeBodegas.removeChild(existeDiv);
            divDeBodegas.removeChild(divDeImg);
            
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




// mostradorDeLosVinos()

mostradorDeBodegas()
productos();
