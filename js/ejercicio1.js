
/**
 * 
 *
 * @class Vehiculo
 */
class Vehiculo{

    #numRuedas;

    /**
     * Creates an instance of Vehiculo.
     * @param {*} fabricante
     * @param {*} modelo
     * @param {*} year
     * @param {*} motor
     * @param {*} potencia
     * @param {*} cc
     * @param {*} maxVeloc
     * @param {*} licencia
     * @memberof Vehiculo
     */
    constructor(fabricante, modelo, year, motor, potencia, cc, maxVeloc, licencia ){
        this.fabricante = fabricante;
        this.modelo = modelo; 
        this.year = year; 
        this.motor = motor; 
        this.potencia = potencia; 
        this.cc = cc; 
        this.maxVeloc = maxVeloc; 
        this.licencia = licencia; 

    }

    /**
     * Modifica el número de ruedas
     * 
     * @param {*} num Nuevo número de ruedas
     * @memberof Vehiculo
     */
    setNumRuedas(num){
        this.#numRuedas = num; 
    }

    /**
     * Obtiene el valor de la propiedad numRuedas
     * 
     * @return {*} 
     * @memberof Vehiculo
     */
    getNumRuedas(){
        return this.#numRuedas; 
    }

    /**
     * Compara la velocidad máxima de dos vehiculos
     *
     * @static
     * @param {*} v1
     * @param {*} v2
     * @return {*} 
     * @memberof Vehiculo
     */
    static compararMaxVeloc(v1, v2){
        if(v1.maxVeloc > v2.maxVeloc){
            return v1;
        }else if(v2.maxVeloc > v1.maxVeloc){
            return v2;
        }else{
            return "Tienen la misma velocidad máxima."; 
        }
    }

    /**
     * Compara la potencia de dos vehiculos
     *
     * @static
     * @param {*} v1
     * @param {*} v2
     * @return {*} 
     * @memberof Vehiculo
     */
    static compararPotencia(v1, v2){
        if(v1.potencia > v2.potencia){
            return v1;
        }else if(v2.potencia > v1.potencia){
            return v2;
        }else{
            return "Tienen la misma potencia"; 
        }
    }

    arrancar = () =>{}
    parar = () =>{}
    repostar = () =>{}
    acelerar = () =>{}
    frenar = () =>{}

}

class Camion extends Vehiculo{}
class Coche extends Vehiculo{}
class Motocicleta extends Vehiculo{}
class Caravana extends Vehiculo{}