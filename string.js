const texto1 = "oie mundinho rs"; 
const texto2 = 'oie mundo!';
const senha = '123fabi';
const cadeiaDeCarac = '123456';
const cita = "os astros disseram 'ola' ";

console.log (cita);

//template string ou literal



//concatenacao
let nome = 'fabiana ';
console.log(nome + cita);


//utf

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//comparacao

const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

console.log(cidade1 === input1); // false


const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


//qts caracteres tem a string
const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres


