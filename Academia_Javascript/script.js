// Exercicio 1 ----------------------------------------------------


// Declaração e inicialização de Array de Objetos
let pessoas = [
	{
	nome:'Rúben Antunes',
	idade: 20
	},

	{
	nome: 'Fábio Maia',
	idade: 20
	},

	{
	nome : 'Júlio Prada',
	idade: 20
	}

];

// Função para imprimir na consola
function imprimir() {
  let numeroPessoa = 0;
  
  for (let i = 0; i < pessoas.length; i++) {
    numeroPessoa++ ;
    console.log("\"pessoa"  +  " " + (i+1) +" - " + pessoas[i].nome + " " +pessoas[i].idade + " anos\"");
  }
}

// Chamo a função criada acima 
imprimir();
  
//-------------------------- Fim Exercicio 1 -------------------------------
// Exercicio 2

//Definição de variáveis
let primeiroNr = document.getElementById("input-1st-numb");
let segundoNr = document.getElementById("input-2nd-numb");

let lblResult = document.getElementById("lbl-result");
let lblFinalResult = document.getElementById("lbl-final-result");

let btnMultiply = document.getElementById('btn-multiply');
let btnDivide = document.getElementById('btn-divide');

let result = 0;
// 

// Inicialmente escondo as labels que anunciam o resultado
lblResult.style.display = 'none';
lblFinalResult.style.display = 'none';

function  isNumber(value) {
  for (var i = 0; i < value.length; i++)
   if (!(value[i] >= "0" && value[i] <= "9")) return false;
   return true;
}  

// Event listeners dos botões
btnMultiply.addEventListener('click',function(){

  if (isNumber(segundoNr.value) === false || isNumber(primeiroNr.value) === false ) {
    alert("Introduza apenas números por favor!");
  }else{
    result = primeiroNr.value * segundoNr.value;
    lblFinalResult.innerHTML = result ;
    lblResult.style.display = 'inline';
    lblFinalResult.style.display = 'inline';
  }
  
});

btnDivide.addEventListener('click',function(){
  if (isNumber(segundoNr.value) === false || isNumber(primeiroNr.value) === false ) {
    alert("Introduza apenas números por favor!");
  }else{
  result = primeiroNr.value / segundoNr.value;
  lblFinalResult.innerHTML = result ;
  lblResult.style.display = 'inline';
  lblFinalResult.style.display = 'inline';
  }
});
// Final de Exercicio 2 --------------------------------------------------------

// Exercicio 3

// Definição de variáveis
let chars = document.getElementById("input-chars"),
 btnContarChars = document.getElementById("btn-contar-chars"),
 labelResultado = document.getElementById("lbl-chars-result");

// Função que verifica caracter a caracter se este é de facto um caracter
function  isLetter(value) {
  if (isNaN(value)) {
  value = value.toUpperCase();
      if (!(value >= "A" && value <= "Z")) return false;
   return true;
  }
}  

btnContarChars.addEventListener('click',function(){
  let myString = chars.value,
  count = 0;
  for (let i = 0; i < myString.length; i++) {
      if (isLetter(myString[i]) === true) {
        count++;
      }
  }
  labelResultado.innerHTML = "Introduziu " + count + " caracteres";
});
//---------Final de exercicio 3------------------------------------------------




