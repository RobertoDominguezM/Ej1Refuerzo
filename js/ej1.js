window.addEventListener("load", crearPeticion, false);
function crearPeticion(event){
    event.preventDefault();
    fetch()
        .then(response => {
            return response.json();
        })
        .then(
            datosTabla => crearNuevaTabla(datosTabla)
        )
        .catch(error => console.error(error));
}
function crearNuevaTabla(datosTabla){
    console.log(datosTabla);
    let tabla = document.getElementById("tabla");
    for(i=0; i < datosTabla.length; i++){
        console.log(datosTabla[i]);
        let tr = document.createElement("tr");
        tr.innerHTML = "<td>" + datosTabla[i].name + "</td>" + "<td>" + datosTabla[i].email + "</td>";
        tabla.appendChild(tr);
        
    }
}
function introdocirDatos(){
    
}