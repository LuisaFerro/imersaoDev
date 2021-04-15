alert('Feito por uma programadora suuper iniciante só para ajudar nas contas. Boa sorte!! \n\n Obs. Não está otimizado para celular, foi mal :/')

var nat = 0
var mat = 0
var ling = 0
var red = 0
var hum = 0
media = 0


function notaNat(){
  nat = parseFloat(document.getElementById('Natureza').value)
  console.log(nat)
 }


function notaMat(){
  mat = parseFloat(document.getElementById('Matematica').value)
  console.log(mat)
}

function notaLing(){
  ling =  parseFloat(document.getElementById('Linguagens').value)
 }

function notaRed(){
 red = parseFloat(document.getElementById('Redacao').value)
 }

function notaHum(){
 hum = parseFloat(document.getElementById('Humanas').value)
 }

function escolhaG1(){
  var nota = document.querySelector('.nota')
  media = parseFloat((red +( 2*mat) + (4*ling) + (4*hum) + (2*nat))/ 13).toFixed(2)
  mediaTela = ('<h1>' + media +'<font size="3"> (grupo 1)</font></h1></h1>')
  nota.innerHTML = nota.innerHTML + mediaTela 
}
  
function escolhaG2 (){
  var nota = document.querySelector('.nota')
  media = parseFloat((red + (4*mat) + (2*ling) + (2*hum) + (4*nat))/13).toFixed(2)
  mediaTela = ('<h1>' + media +'<font size="3"> (grupo 2)</font></h1>')
  nota.innerHTML = nota.innerHTML + mediaTela
  
}

function limpar(){
 var nota = document.querySelector('.nota')
 nota.innerHTML = " "  

}

