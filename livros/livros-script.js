alert('Bem vinde! Ainda em processo de melhora 😅')
livrosIndicados = []


var hp = 'https://images-na.ssl-images-amazon.com/images/I/41897yAI4LL._SY344_BO1,204,203,200_QL70_ML2_.jpg'
var harryAugust = 'https://1.bp.blogspot.com/-uqfwzD8ZBCA/X6LaPTUr-CI/AAAAAAAAHx4/4JRqyP-bQ3MISmd_sonjdi-mSzRSQIKuwCLcBGAsYHQ/s1000/15VidasPoison.jpg'
var maquinaTempo = 'https://m.media-amazon.com/images/I/61WF0WybSJL.jpg'
var garotaTrem = 'https://images-na.ssl-images-amazon.com/images/I/A1ajQ9OHOIL.jpg'
var americanah = 'https://images-na.ssl-images-amazon.com/images/I/81dTCBAi0VL.jpg'


 // Essas funções "checado" checam se as caixinnhas estão marcadas e, se estiverem, colocam os livros acima dentro do Array livrosIndicados. Cada caixinha tem um número, 1 a 5 de cima para baixo.

 // O Else da função checado1() tem o objetivo de, caso a pessoa desmarque a caixinha, o livro que tinha sido colocaddo no array ser, então, retirado. O comando é "livrosIndicados.splice(livrosIndicados.indexOf(hp), 1)", pelo q pesquisei, o splice vai tirar um elemento específico do array. Maas, para garantir que vai ser o que eu quero, o inddexOf vai procurar dentro do array o "hp" e tirá-lo

function checado1(){
   if (document.getElementById("1").checked) {
    livrosIndicados.push(hp)
  } else{
    livrosIndicados.splice(livrosIndicados.indexOf(hp), 1)
  }}

function checado2(){
  if (document.getElementById("2").checked) {
    livrosIndicados.push(harryAugust)
  } else{
    livrosIndicados.splice(livrosIndicados.indexOf(harryAugust),1)
 }}

function checado3(){
  if (document.getElementById("3").checked) {
    livrosIndicados.push(maquinaTempo)
  } else{
    livrosIndicados.splice(livrosIndicados.indexOf(maquinaTempo),1)
  }}

function checado4(){
  if (document.getElementById("4").checked) {
    livrosIndicados.push(garotaTrem)
  } else{
     livrosIndicados.splice(livrosIndicados.indexOf(garotaTrem),1)
}}

function checado5(){
  if (document.getElementById("5").checked) {
    livrosIndicados.push(americanah)
  } else{
    livrosIndicados.splice(livrosIndicados.indexOf(americanah),1)
  }}


// Dentro da função escolhi() eu usei o forEach(), com o qual consigo aplicar a função capaDosLivros() para cada elemento dentro do array

function escolhi(){
   if(livrosIndicados.length > 0){
     livrosIndicados.forEach(capasDosLivros)     
    }else {
  alert('Tu não checaste nenhuma caixinha, não sei o que te indicar :/ ')
}}


function capasDosLivros(ImgDaCapa){
  var capaLivros = document.querySelector('.capaLivros')
  var elementoLivro = ('<img src = ' + ImgDaCapa + '>')
  capaLivros.innerHTML = capaLivros.innerHTML + elementoLivro
}

function apagarLivrosHtml() {
  var capaLivros = document.querySelector('.capaLivros')
  capaLivros.innerHTML = ""  
}
