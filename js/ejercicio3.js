/**
 * 
 * @class Puzzle
 */
class Puzzle{
    
    tablero = []; 
    matrizTablero = []; 

    /**
     * Creates an instance of Puzzle.
     * @param {*} filas
     * @param {*} columnas
     * @param {*} espacios
     * @memberof Puzzle
     */
    constructor(filas, columnas, espacios){
        this.filas = filas; 
        this.columnas = columnas; 
        this.espacios = espacios; 
        this.crearTablero(); 
    }

    /**
     * Función que crea el tablero con números aleatorios sin que se repitan
     * @memberof Puzzle
     */
    crearTablero(){
        
        for(let k = 0; k < this.espacios; k++){
            this.tablero.push(" "); 
        }

        let numCasillas = this.filas * this.columnas; 

        while(this.tablero.length < numCasillas){
            let num = this.numAleatorio(1,numCasillas - 1);

            if(!this.tablero.includes(num)){
                this.tablero.push(num);
            }
        }     

        //Almaceno los números en la matriz
        let indice = 0;
        for (let i = 0; i < this.filas; i++) {
            let fila = [];

            for (let j = 0; j < this.columnas; j++) {
                fila.push(this.tablero[indice]);
                indice++;
            }

            this.matrizTablero.push(fila);
        }

    }

    /**
     * Función que genera un numero aleatrorio entre min y max. 
     * @param {*} min
     * @param {*} max
     * @return {*} 
     * @memberof Puzzle
     */
    numAleatorio(min, max){
        return Math.floor( Math.random() * (max - min + 1) + min); 
    }

    
    /**
     * Función que muestra el tablero
     * @return {*} string con el tablero
     * @memberof Puzzle
     */
    mostrarTablero(){

        let salida = ""; 

        for (let i = 0; i < this.filas; i++) {

            for (let j = 0; j < this.columnas; j++) {
                salida += " " + this.matrizTablero[i][j] + " "; 
            }

            salida += "\n";  
            
        }

        return salida; 
    }

    /**
     * Función que resetea el tablero
     * @memberof Puzzle
     */
    resetearTablero(){
        this.tablero = []; 
        this.matrizTablero = []; 
        this.crearTablero(); 
    }

    /**
     * Función que mueve el número al espacio
     * @param {*} numero Número que se quiere mover 
     * @memberof Puzzle
     */
    moverNumero(numero){
        // Buscar las coordenadas del número en el tablero
        let x, y;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (this.matrizTablero[i][j] == numero) {
                    x = i;
                    y = j;
                    break;
                }
            }
        }

        // Buscar las coordenadas del espacio
        let x0, y0;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (this.matrizTablero[i][j] == " ") {
                    x0 = i;
                    y0 = j;
                    break;
                }
            }
        }

        //Intercambiar coordenadas
        let aux = this.matrizTablero[x][y];
        this.matrizTablero[x][y] = this.matrizTablero[x0][y0];
        this.matrizTablero[x0][y0] = aux; 


    }

    /**
     * Función que comprueba si se ha resuelto el puzle 
     * @return {*} Boolean
     * @memberof Puzzle
     */
    comprobarSolucion(){

        let resuelto = true; 
        let num = 1; 

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if(this.matrizTablero[i][j] != num){
                    if(i == this.filas - 1 && j == this.columnas - 1){
                        resuelto = true;
                    }else{
                        return false; 
                    }
                }
                
                num++; 
            }
            
        }

        return resuelto; 
    }

    /**
     * Función que devuelve los números que se pueden mover 
     * @return {*} Array de números que se pueden mover 
     * @memberof Puzzle
     */
    jugadasPosibles(){
        let jugadas = [];

        //Buscar el espacio vacío
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (this.matrizTablero[i][j] === " ") {
                    // Izquierda
                    if (j > 0 && this.matrizTablero[i][j - 1] != " ") {
                        jugadas.push(this.matrizTablero[i][j-1]);
                    }
                    // Derecha
                    if (j < this.columnas - 1 && this.matrizTablero[i][j + 1] != " ") {
                        jugadas.push(this.matrizTablero[i][j+1]);
                    }
                    // Arriba
                    if (i > 0 && this.matrizTablero[i - 1][j] != " ") {
                        jugadas.push(this.matrizTablero[i - 1][j]);
                    }
                    // Abajo
                    if (i < this.filas - 1 && this.matrizTablero[i + 1][j] != " ") {
                        jugadas.push(this.matrizTablero[i+1][j]);
                    }
                }
            }
        }

     return jugadas;
    }

}


let juego = new Puzzle(3,3,1);
let num;

while(!juego.comprobarSolucion()){

    console.log(juego.mostrarTablero()); 
    console.log("Números que se pueden mover: " + juego.jugadasPosibles()); 


    do{
        num = prompt("Números que se pueden mover: " + juego.jugadasPosibles());
    }while(!juego.jugadasPosibles().includes(Number(num)));

    juego.moverNumero(num);
}


console.log("¡Lo has resuelto!"); 