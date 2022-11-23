// tipo de dado
//booleanos

//conversao implicita - converte um dado em outro tipo string para numero
const num = 123;
const string = '123';

//console.log(num == string);

//console.log(num + string);


//conversao explicita -

console.log(num + Number(string));


// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
let telefone0 = 12341234;
console.log("O telefone é " + String(telefone0));


// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString()); 


let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.


//numeros

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN
