// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = null;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = null;

// Crea una variable booleana:
const nuevoBool = null;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * null === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.
//cambio el nombre a manu

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let suma = x + y;
  return suma;
}
console.log("suma");
console.log(suma(1, 5));
function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let resta = x - y;
  return resta;
}
console.log("resta");
console.log(resta(5, 4));
function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let multiplica = x * y;
  return multiplica;
}
console.log("multiplica");
console.log(multiplica(5, 6));
function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  //para dividir se usa /
  let divide = x / y;
  return divide;
}
console.log("divide");
console.log(divide(6, 2));

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  // let manu="igna"
  // if(manu==="manu"){
  //   return "es manu"
  // }
  // else{
  //   return "no es manu"
  // }
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
console.log("sonIguales");
console.log(sonIguales());
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  // que vamos a necesitar: un if, un else, un.length
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}
console.log("tienenMismaLongitud");
console.log(tienenMismaLongitud("manu", "igna"));

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  // un if,un else
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}
console.log("menosQue90");
console.log(menosQueNoventa(100));
function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}
console.log("mayorQue50");
console.log(mayorQueCincuenta(30));
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resto = x % y;
  return resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (esPar(num) !== true) {
    return false;
  } else {
    return true;
  }
  // return !esPar(num)
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let elevadoAlCuadrado = multiplica(num, num);
  return elevadoAlCuadrado;
}
console.log("elevar al cuadrado\n", elevarAlCuadrado(5));
function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let elevadoAlCubo = elevarAlCuadrado(num) * num;
  return elevadoAlCubo;
}
console.log(elevarAlCubo(5));
function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  let esPositivo = numero > 0;
  if (esPositivo) {
    return "es positivo";
  } else if (!esPositivo) {
    return "es negativo";
  } else {
    return false;
  }
  // esPositivo?"es positivo":"es negativo";
}
console.log(esPositivo(-5));
function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return suma(str, "!");
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return suma(suma(nombre, " "), apellido)
}
console.log(combinarNombres("manuel", "arigoni"));
function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return multiplica(alto, ancho)
}
console.log(obtenerAreaRectangulo(10, 20));
function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return multiplica(lado, 4)
}
console.log(retornarPerimetro(4));
function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return multiplica(base,altura)
}
console.log(areaDelTriangulo(5,5));
function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
