const reserva=[];

function CrearReserva (mes, destino, precioAdulto,precioMenor){
    this.mes = mes;
    this.destino = destino;
    this.precioAdulto = precioAdulto;
    this.precioMenor = precioMenor;
}

reserva.push (new CrearReserva ("Enero","Brasil", 50000,3000));
reserva.push (new CrearReserva ("Febrero","Argentina", 40000,2000));
reserva.push (new CrearReserva ("Marzo","Brasil", 50000,3000));
reserva.push (new CrearReserva ("Abril","Argentina", 40000,2000));
reserva.push (new CrearReserva ("Mayo","Brasil", 50000,3000));
reserva.push (new CrearReserva ("Junio","Argentina", 40000,2000));
reserva.push (new CrearReserva ("Julio","Brasil", 50000,3000));
reserva.push (new CrearReserva ("Agosto","Argentina", 40000,2000));
reserva.push (new CrearReserva ("Septiembre","Brasil", 50000,3000));
reserva.push (new CrearReserva ("Octubre","Argentina", 40000,2000));
reserva.push (new CrearReserva ("Noviembre","Brasil", 50000,3000));
reserva.push (new CrearReserva ("Diciembre","Argentina", 40000,2000));


const pasajero=[];

function CrearPasajero (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
cantPasajeros=prompt("¿Cuantos viajan?= ");

if(cantPasajeros>0){
    for(i=0; i<cantPasajeros ;i++){
        
        let nombre= prompt("Ingrese nombre del " + (i+1) + " pasajero: " );
        let edad= prompt ("Ingrese la edad de este pasajero: ");
        pasajero.push (new CrearPasajero (nombre,edad));
        
    }
   

} else(alert("Hasta pronto"));

//Busca Mayores o menores

/* const resultadoMenor= pasajero.filter((el) => el.edad <18)
resultadoMenor.forEach((pa)=>{
    resultadoMenor.edad()
}) */


//BUSCA Pais y Mes

let pais= prompt("¿Adonde queres viajar? ¿Argentina o Brasil? ");
const resultado = reserva.filter((el) => el.destino.includes(pais));

console.log(resultado);


let mes= prompt("Habiendo visto los meses disponibles, ¿en cuál quisieras viajar? ")
const resultado2 = reserva.filter((el) => el.mes.includes(mes));

console.log(resultado2);

console.log("El valor final del viajes es de: " + (resultado[0].precioAdulto *cantPasajeros));

/* Probando GIT
 */

