$("li").click(function(){
	//agregar o quita clase que recibe  como parametro
	$("li").toggleClass("active");
	$("section").toggleClass("hidden");

});
$("form").submit(function(evento){
	evento.preventDefault();
	var contacto={
	"nombre":$("#nombre").val(),
	"apellido":$("#apellido").val(),
	"telefono":$("#telefono").val(),
	"email":$("#email").val()
	};//con las llaves se representan los objetos
	console.log(contacto);
	guardar(contacto);
});
function guardar(contacto){
	var fila="<tr><td>"+contacto.nombre+"</td><td>"+contacto.apellido+"</td><td>"+contacto.telefono+"</td><td>"+contacto.email+"</td><td><button title='guardar'class='btn btn-success'><span class='glyphicon glyphicon-pencil'><span></button title='eliminar'><button class='btn btn-danger'><span class='glyphicon glyphicon-erase'></span></button></td></tr>"
						    	
						    
		$("tbody").append(fila);
}
