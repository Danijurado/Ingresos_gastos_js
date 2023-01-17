let peticion_movimientos = new XMLHttpRequest() //creo un objeto de tipo XMLHttpRequest()

//funcion para capturar elementos de respuesta a la consulta get
function peticion_movimientos_handler(){
    if(this.readyState === 4){
        if(this.status === 200 ){
            alert(this.responseText);
        }else{
            alert("Se ha producido un error en la consulta");
        }
    }
}



//funcion para mostar el formulario oculto
function viewForm(event){
    document.getElementById("movements_detail").style.display="block";
}
//funcion para ocultar el formulario una vez visualizado
function hideForm(event){
    document.getElementById("movements_detail").style.display="none";
}

window.onload = function(){//esto se ejecuta cuando todos los elementos de html estan cargados
    let crear = document.getElementById("btn_crear");
    crear.addEventListener("click",viewForm);


    let cerrar = document.getElementById("btn_cerrar");
    cerrar.addEventListener("click",hideForm);

    //deficion de metodo get y ruta para devolucion de datos
    peticion_movimientos.open("GET","http://localhost:5000/api/v1.0/all",true);
    //llamar a la funcion peticion_movimientos_handler
    peticion_movimientos.onload = peticion_movimientos_handler
    //mostrar un error si es que lo hay al realizar la consulta
    peticion_movimientos.onerror = function(){alert("No se ha podido completar la peticion de movimientos")};
    //enviar la consulta como tal
    peticion_movimientos.send();
}