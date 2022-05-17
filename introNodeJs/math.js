const Math = {};

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "No se puede dividir por cero"
    } else {
        return x / y;
    }
}

//izq -> nombre del llamado para ejecutar -> der nombre funciones
/*exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;*/

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math; //Exportamos un objeto

//Module permite exportar cualquier tipo de dato o estructura de js, a diferencia de exports que solo permite exportar propiedades de objetos

//Solo se permite exportar un conjunto de estructuras por lo cual el modulo o archivo js debe contener una estructura a fin