function soyUnCallbck(data){

console.log('soy un callback ahora me toma a mi');
console.log(data);

}

function haciendoUnaPeticionHttp(callback){
console.log('Estoy haciendo otras operaciones ');
console.log('Ya casi termino ');


callback({
    id:1,
    username:'surabi belem',
    edad:27
})

}

//Cambio 

haciendoUnaPeticionHttp(soyUnCallbck)

