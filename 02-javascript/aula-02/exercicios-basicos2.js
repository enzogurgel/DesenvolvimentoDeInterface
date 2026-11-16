// EXERCÍCIO 1

let numero = 8;

if (numero % 2 === 0) {
  console.log('O número ' + numero + ' é par.');
} else {
  console.log('O número ' + numero + ' é ímpar.');
}

numero = 11;

if (numero % 2 === 0) {
  console.log('O número ' + numero + ' é par.');
} else {
  console.log('O número ' + numero + ' é ímpar.');
}

// EXERCÍCIO 2

let valorCompra = 199;
let total;

if (valorCompra >= 200) {
  total = valorCompra * 0.9;
} else {
  total = valorCompra;
}

console.log('Valor da compra: R$ ' + valorCompra);
console.log('Total a pagar: R$ ' + total);

valorCompra = 200;

if (valorCompra >= 200) {
  total = valorCompra * 0.9;
} else {
  total = valorCompra;
}

console.log('Valor da compra: R$ ' + valorCompra);
console.log('Total a pagar: R$ ' + total);

// EXERCÍCIO 3

let idade = 20;
let cadastroAtivo = true;

if (idade >= 18 && cadastroAtivo === true) {
  console.log('Acesso permitido!');
} else {
  console.log('Acesso negado!');
}

idade = 16;
cadastroAtivo = true;

if (idade >= 18 && cadastroAtivo === true) {
  console.log('Acesso permitido!');
} else {
  console.log('Acesso negado!');
}

idade = 20;
cadastroAtivo = false;

if (idade >= 18 && cadastroAtivo === true) {
  console.log('Acesso permitido!');
} else {
  console.log('Acesso negado!');
}

// EXERCÍCIO 4

let campoNome = document.createElement('input');
campoNome.type = 'text';
campoNome.placeholder = 'Digite seu nome';

let botao = document.createElement('button');
botao.textContent = 'Enviar';

let saida = document.createElement('p');

document.body.appendChild(campoNome);
document.body.appendChild(botao);
document.body.appendChild(saida);

botao.addEventListener('click', function () {
  let nome = campoNome.value;

  if (nome.trim() === '') {
    saida.textContent = 'Por favor, preencha seu nome.';
  } else {
    saida.textContent = 'Olá, ' + nome + '!';
  }
});

// EXERCÍCIO 5

let temperatura = 15;

if (temperatura < 18) {
  console.log('Frio');
} else if (temperatura < 28) {
  console.log('Agradável');
} else {
  console.log('Quente');
}

// EXERCÍCIO 6

let nota1 = 8;
let nota2 = 12;
let nota3 = 6;
let notaValida = true;

if (nota1 < 0 || nota1 > 10) {
  console.log('Nota 1 inválida!');
  notaValida = false;
}

if (nota2 < 0 || nota2 > 10) {
  console.log('Nota 2 inválida!');
  notaValida = false;
}

if (nota3 < 0 || nota3 > 10) {
  console.log('Nota 3 inválida!');
  notaValida = false;
}

if (notaValida === true) {
  let media = (nota1 + nota2 + nota3) / 3;
  console.log('Média: ' + media);
}
