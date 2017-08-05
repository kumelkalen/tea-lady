var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var correo = document.getElementById("email").value;
var direccion = document.getElementById("direccion").value;
var telefono = document.getElementById("telefono").value;
var pack = document.getElementById("pack").value;
var check = document.getElementById("check").value;
function mostrarData(){
	//Validaciones
	var cont = 0;//contador
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
	if(cont == 7){
	//Llenamos el div con los datos
		var registros = document.getElementById("clientes");//div vacío
		var nomText = document.createTextNode("Nombre: "+nombre);
		var apText = document.createTextNode("Apellido: "+apellido);
		var emText = document.createTextNode("Email: "+email);
		var diText = document.createTextNode("Direccion: "+direccion);
		var teText = document.createTextNode("Teléfono: "+telefono);
		var paText = document.createTextNode("Pack seleccionado: "+pack);
	}
	
}