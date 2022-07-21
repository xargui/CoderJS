class Pasaje {
    constructor(mes,destino, valor){  
        this.mes = mes;
        this.destino = destino;
        this.valor = valor;
    }

    valorMenorDeEdad(){
        return this.valor * 0.8;
    }

    valorMayorDeEdad(){
        return this.valor;
    }
}

const pasajes = [
    new Pasaje('ENERO','ARGENTINA', 30000),
    new Pasaje('FEBRERO','BRASIL', 40000),
    new Pasaje('MARZO','ARGENTINA', 40000),
    new Pasaje('ABRIL','BRASIL', 60000),
    new Pasaje('JUNIO','ARGENTINA', 20000),

];

const cantViajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:"));

if(Number.isInteger(cantViajeros)) {

    class Pasajero {
        constructor(nombre,edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        esMayorDeEdad(){
            if(this.edad >= 18){
                return true;
            } else {
                return false;
            }
        }

    }

    const pasajeros = [];

    let cantAdultos=0;
    let cantMenores=0;

    if (cantViajeros > 0){
        for (let i = 0; i < cantViajeros; i++) {
            const nombre = prompt("Ingrese el nombre del " + (i+1) + " pasajero:");
            const edad = parseInt(prompt("Ingrese la edad de ese pasajero: "));
            
            //Valido que ingrese un numero
            if(Number.isInteger(edad)){
            
                const pasajero = new Pasajero(nombre,edad);
                pasajeros.push(pasajero);

                console.log('El pasajero es mayor? ', pasajero.esMayorDeEdad());
            
                //Cantidad de Adultos y Menores
                
                if(pasajero.esMayorDeEdad()==true){
                    cantAdultos= cantAdultos + 1;
                }else{
                    cantMenores= cantMenores + 1;
                }
            }else{
                alert("El valor ingresado no es un numero entero; cargue el nombre otra vez");
                i--;
            }
        }

    }else{
        alert("Ha ingresado cero pasajeros");
    }
    
    console.log("Adultos= " + cantAdultos);
    console.log("Menores= " + cantMenores);

    // Pedirle destino al usuario
    const destino = prompt("Ingrese a donde quiere viajar siendo las opciones Argentina o Brasil:");


    // Filtrar pasajes en base al destino
    const pasajesParaElDestino = pasajes.filter((el) => el.destino.includes(destino.toUpperCase()));

    // Mostrar opciones disponibles de meses
    console.log(pasajesParaElDestino);

    // Elegir mes
    const mes = prompt("Ingrese el mes en el que desea viajar:");

    //Buscar pasaje
    const mesDeViaje = pasajesParaElDestino.filter((el) => el.mes.includes(mes.toUpperCase()));

    //Muestra el valor del pasaje en ese mes
    console.log(mesDeViaje);

    //Usar pasaje para multiplicar precios por cantidad de pasajeros


    //Precio Final
    const precioFinal = parseInt((mesDeViaje[0].valorMayorDeEdad() * cantAdultos) + (mesDeViaje[0].valorMenorDeEdad() *cantMenores));

    console.log("El precio final de su viaje es de: " + precioFinal);

}else{
    alert("No ha ingresado un numero entero");
}