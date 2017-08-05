var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var correo = document.getElementById("email").value;
var direccion = document.getElementById("direccion").value;
var telefono = document.getElementById("telefono").value;
var pack = document.getElementById("pack").value;
var check = document.getElementById("check").value;
function mostrarData(){
	var cont = 0;
	if(nombre != ""){
		cont++;
	}
	if(apellido != ""){
		cont++;
	}
	if(correo != ""){
		cont++;
	}
	if(direccion != ""){
		cont++;
	}
	if(telefono != ""){
		cont++;
	}
	if(pack != 0){
		cont++;
	}
	if(check.checked = true){
		cont++; 
	}
}