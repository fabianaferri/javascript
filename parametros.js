//parametro de funcao


function soma (num1, num2){
    return num1 + num2;
}
console.log(soma(2,2));


//parametro x argumento
//


function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(11, 'fabiana'));


function multiplica(numx1 = 1, numx2 = 1){
    return numx1 * numx2;
}
console.log(multiplica(soma(4,5)));