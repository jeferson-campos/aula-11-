// var nome = `luan`
// let age, isHuman

// age = 26,
// isHuman = true

// console.log(`Olá ${nome} voçê tem ${age} anos`);

// const person = {
//   nome: 'luan',
//   age: 26,
//   weight: 128.7,
//    isAdimin: true
// }
// console.log(`${person.nome} tem ${person.age} anos e pesa ${person.weight} kg e pesa para caralho`)

// const animals = [
//    'Lion',
//    "Monkey",
//    {
//    nome: 'cat',
//   age: 3

//    },
//    isHuman,
//    person
// ]

// console.log(animal[2].nome)

// console.log(animal[4].nome)

// let contador = 0
// while (contador < 18) {
//    console.log(contador)
//    contador++
// }
// var contador = 17

// while (contador > 0){
// console.log(contador)
// contador--
// }

// let contador = 0
// while (contador < 10) {
//    console.log(contador)
//    if (contador === 5) {
//    break
// }
// contador++
// }
// console.log(`O laço foi quebrado e o contador parou com //o valor ${contador//}`)

// let contador = 20
// while (contador >=0) {
//    console.log('vc acertou')
// }
// contador = prompt ('quero um numero ')

// if (contador === 0)
// contador = prompt("digite sua nota escolar");

// contador = 0
// if (contador > 6) {
//  console.log("vc foi aprovado");
// }

// if (contador < 6) {
//  console.log("vc foi reprovado");
// }

// let i = 0
// do {
// console.log(i);
// i++;
// } while (i < 50);
// for (var  i =1; i <=20; i++)
//  if (i % 2 )

// let soma = 0 
// while (true) {
//    let input = prompt
// }


// function getRandomInt(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min) + min);
//  }
// while (true) {
//    let ress = parseInt(prompt("adivinhe um numero de um a dez"))
//    if (ress === num) {
//        alert("Parabens! Voçê acertou")
//        break
//    }else{alert("tente novamente");

//    }
// }

    

    
// class BancoSimulador {
//     constructor() {
//     this.saldo = 0.0;
//     }
    
//     exibirMenu() {
//     let opcao;
//     do {
//     opcao = prompt(`Menu:
//     1. Ver Saldo
//     2. Depositar
//     3. Sacar
//     4. Sair
//     Escolha uma opção:`);
    
//     switch (opcao) {
//     case '1':
//         this.verSaldo();
//         break;
//     case '2':
//         this.depositar();
//         break;
//     case '3':
//         this.sacar();
//         break;
//     case '4':
//     console.log("Encerrando o programa.");
//     break;
//     default:
//     console.log("Opção inválida. Tente novamente.");
//     }
//     } while (opcao !== '4');
//     }
    
//     verSaldo() {
//     console.log(`Seu saldo atual é: R$ ${this.saldo.toFixed(2)}`);
//     }
    
//     depositar() {
//     let valor = parseFloat(prompt("Digite o valor para depositar: R$ "));
//     if (valor > 0) {
//     this.saldo += valor;
//     console.log(`R$ ${valor.toFixed(2)} depositados com sucesso.`);
//     } else {
//     console.log("Valor inválido. Tente novamente.");
//     }
//     }
    
//     sacar() {
//     let valor = parseFloat(prompt("Digite o valor para sacar: R$ "));
//     if (valor > 0 && valor <= this.saldo) {
//     this.saldo -= valor;
//     console.log(`R$ ${valor.toFixed(2)} sacados com sucesso.`);
//     } else {
//     console.log("Valor inválido ou saldo insuficiente. Tente novamente.");
//     }
//     }
//     }
    
//      // Cria uma instância do simulador e exibe o menu
//     let simulador = new BancoSimulador();
//     simulador.exibirMenu();
//     const frutas = ['maça', 'melancia', 'banana']
//     frutas.push('abacaxi')
//     frutas.pop()

//     frutas.unshifit('pera')
// console.log(frutas)
//  const pessoas = ['kelly', 'saulo', 'joão']

// pessoas.splice(2, 3, "jose")
//  pessoas.splice(1, 2, "maria", "antonio")

//  console.log(pessoas)
// const lista = []
//     while (true) {
//         const menu = prompt('digite um nome ou sair para parar: ')
//         if(menu === 'sair'){
//             break
//         }
        
//         lista.push(menu)
//     lista.push['jeferson', 'lucas']
//     }


// const cores = ['vermelho', 'verde', 'azul', 'amarelo', 'roxo']
// const ultimaCores = cores.pop();
// cores.splice(1, 1, "laranja", "marrom",)

// const novasCores = ['vermelho', 'laranja',]
// console.log(novasCores.join('vermelho', 'laranja', 'marrom', 'azul', 'amarelo',)) 
// objeto.metodo();
    
// for(let cor of cores)
// document

// console.log(cores)
// console.log(novasCores)
// console.log(metodojoin)
// console.log()
// console.log()


// const notas = ['']
// while (true)
//     const menu = Number (prompt('voçê deseja adicionar uma nota, caso não é so digitar sair') {
//         if(menu === 'sair') {
//             break
//          }
//     }
  
// if(notas >= 6) {
//     console.log{'vc foi aprovado'}
// }
// else( notas <= 5) {
//     console.log('vc foi reprovado')
// }




//  function functionExemplo () {
//  var numero = prompt('digite um numero')
//  
//       if (numero = 1) {
//       console.log("esse numero é verdadeiro")
//       }else  {
//          console.log("esse numero é falso")
//       }
//   }
//   functionExemplo()

//function verificarVelocidade() {
//   let velocidade = Number(prompt('Digite a velocidade: '))
//   if (velocidade > 50) {
//      alert('Velocidade acima do limite')
//   }
//   else {
//       alert('Velocidade dentro do limite')
//   }
//}

//verificarVelocidade()

//function soma(num1, num2) {
//    let resultado = num1 + num2
//    alert(resultado)
//}

//soma(20, 15)
//let n1 =20
//let n2 =15

//function calcularAreaDoTriangulo(base, altura){
//   let area = base * altura / 2 
//   alert(`AreadoTriangulo: ${area}`)
//}
//calcularAreaDoTriangulo(15, 30)

//function calcularDistancia(velocidade, tempo){
 //   const distancia =(velocidade * tempo)
//    return distancia
//}
//const resultado = calcularDistancia(80, 10)
//alert(resultado)

//function



// let paragrafo = document.getElementsByName('oi');
// paragrafo[0].innerText = 'test ola mundo'
// paragrafo[1].innerText = 'test2'

// let paragrafo = document.getElementsByClassName('ola');

// paragrafo[0].innerText = 'ola amigo'

// let paragrafo = document.getElementById('ola');

// paragrafo[0].innerText = 'hello'
 
// let h1 = document.querySelector('h1');
// let paragrafo = document.querySelector('#paragrafo');
// let texto = document.querySelector('.texto');

// let paragrafos = document.querySelectorAll('.minhaClasse')

// var velue = document.getElementById('meu');

// function getValue() {
//     const inputElement = document.getElementById('ola');
// const inputValue = inputElement.value;

// console.log(inputValue);
// }

// function soma(ola, ola1) {
//   const  res = ola + ola1
//   alert ('soma dos dois da:' ${res})
// }

// console.log('soma')

// var res = document.getElementById('js') {
//     console.log('res')
// }

// let selecionar = document.getElementById('#oi');
// let selecionarFilho = document.querySelector('.ola');
// selecionarFilho.innerText = 'saulo';

// function trocarText

// questao 3: 
//const novoElemento = document.createElement('div');
// novoElemento.textContent = 'FEC NO G3!';
        
// document.body.appendChild(novoElemento);

//Questao 4:
// function trocarImagem() {
//   // Muda a fonte da imagem
//   document.getElementById('minhaImagem').src = 'imagem-nova.jpg';}
// html
// <!--<img id="minhaImagem" src="imagem-inicial.jpg" alt="Imagem Inicial" width="300">

//   <button onclick="trocarImagem()">Trocar Imagem</button>--> 
// const botao = document.getElementById('meuButão')
// botao.addEventlistener('click', () => {
//     console.log('botão clicado usando addEventlistener');
// });


// const input = document.getElementById('meuInput');
// input.addEventListener('input', (event) => {
// console.log(`Texto digitado: ${event.target.value}`);
// });


//  const novoDiv = document.createElement('div');

// novoDiv.textContent = 'Este é um novo elemento div.'; 
// novoDiv.style.backgroundColor = 'lightblue'; 
// novoDiv.style.padding= '10px'; 
// novoDiv.style.border = '1px solid blue';
// const conteudo = document.getElementById('conteudo');
//  conteudo.appendChild(novoDiv);

// function criar(){
//     let box = document.querySelector('.box');
//     box.style.width = '100px';
//     box.style.height = '100px';
//     box.style.backgroundColor = '#f00';
// }
// function estilizarParagrafo() { 
//     const cor = document.getElementById('corInput').value;


//     const paragrafo = document.getElementById('paragrafo');paragrafo.style.color = cor;

//     cor.value = ''; 
//     }
  
//     const estilizarBotao = document.getElementById('estilizarBotao'); 
//     estilizarBotao.addEventListener('click' ,estilizarParagrafo);


// const numbers = [65,44,12,4]
// numbers.forEach(number)
// myFunction(intem,index,arr) {
//     arr[index] = intem * 10
// }

// const numeros = [1, 2, 3, 4, 5]

// const multiplicarPorDois = numeros.map(numero => numero * 2);
// const calcularQuadrado = numero.map(numero => numero ** 2);

// console.log("Array orginal:",numeros)
// console.log("cada numero multiplicado por dois:", multiplicarPorDois)
// console.log("quadrado de cada numero:", calcularQuadrado);

// const arr = ['a','b','c','d','e','f']
//     function tornarMaiuscula(elemento, indice, array){
//         return elemento.toUpperCase()
//     }
//         const newArr = arr.map(tornarMaiuscula)
//         const newArr2 = arr.map(elemento=> elemento.toUpperCase())

// const ages = [32,33,12,40]
   
// function chackage(age){
//     return age > document.getElementById("ageToCheck").velue;
// }

// function myFunction(){
//     document.getElementById("demo").innerHTML = ages.filter(checkage)
// }



// const numeros = [50, 45, 67, 89, 10, 5];

// const dobros = numeros.map(numero => numero * 2);

// console.log("dobro de cada numero: ");
// dobros.forEach((dobro, index) => {
// console.log(`${numeros[index]} -> ${dobro}`)
// })

const numeros = [1, 2, 3, 4, 5, 6]

const somar = numeros.reduce((acumulador, numero) => acumulador + numero, 0 );

console.log("arrey original", numeros);
console.log("soma dos numeros", somar);

const numeros = [1, 2, 3, 4, 5, 6]

const somar = numeros.map( numero => numero ** 2 );
