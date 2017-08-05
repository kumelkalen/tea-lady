var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var correo = document.getElementById("email").value;
var direccion = document.getElementById("direccion").value;
var telefono = document.getElementById("telefono").value;
var pack = document.getElementsByTagName("option");
var check = document.getElementById("check");
function mostrarData(){
	//Validaciones
	var cont = 0;//contador
	if(nombre != ""){
		cont++;
		//console.log(1);
	}
	if(apellido != ""){
		cont++;
		//console.log(2);
	}
	if(correo != ""){
		cont++;
		//console.log(3);
	}
	if(direccion != ""){
		cont++;
		//console.log(4);
	}
	if(telefono != ""){
		cont++;
		//console.log(5);
	}
	if(pack.value != pack[0].value){
		cont++;
		//console.log(6);
	}
	if(check.checked == true){
		cont++; 
		//console.log(7);
	}
	//console.log(cont);
	if(cont == 7){
	//Llenamos el div con los datos
		var registros = document.getElementById("clientes");//div vacío
		registros.innerHTML="Nombre: "+nombre+"<br>Apellido: "+apellido+"<br>Direccion: "+direccion+"<br>Teléfono: "+telefono+"<br>Pack seleccionado: "+pack;
	}else{
		alert("No hemos podido registrar tus datos con éxito, vuelve a intentarlo por favor :0 .")
	}
}