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
    new Pasaje('Enero','Argentina', 30000),
    new Pasaje('Febrero','Brasil', 40000),
    new Pasaje('Marzo','Argentina', 40000),
    new Pasaje('Abril','Brasil', 60000),
    new Pasaje('Junio','Argentina', 20000),

];

const cantViajeros = prompt("Ingrese la cantidad de pasajeros= ");

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

if (cantViajeros > 0){
    for (let i = 0; i < cantViajeros; i++) {
        const nombre = prompt("Ingrese el nombre del" + i + " viajero=");
        const edad = prompt("Ingrese la edad de ese viajero= ");
        const pasajero = new Pasajero(nombre,edad);
        pasajeros.push(pasajero);

        console.log('El pasajero es mayor? ', pasajero.esMayorDeEdad());
    }
}else{
    alert("vuelva pronto");
}

// Pedirle destino al flaco
const destino = '';

// Filtrar pasajes en base al destino
const pasajesPalDestino = pasajes.filter(el => el.destino === destino);

// Mostrar opciones disponibles de meses
pasaje.valorMayorDeEdad() * 3;

// Elegir mes

//Buscar pasaje

//Usar pasaje para multiplicar precios por cantidad de pasajeros