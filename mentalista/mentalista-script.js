function tocarDerrota(){
  document.getElementById("audioDerrota").play()
  var escreverNaTela = document.getElementById("resultado")
  var errado = '<h2> NONONO </h2>'
  if ( escreverNaTela.innerHTML != "" ){
    escreverNaTela.innerHTML = "<h2> Novamente,<br> NONONO </h2>"
  } else{
  escreverNaTela.innerHTML = escreverNaTela.innerHTML + errado
  }
}

function tocarVitoria() {
  document.getElementById("audioVitoria").play()
  var escreverNaTela = document.getElementById("resultado")
  var limparTela = document.getElementById('limparTela')
  
  escreverNaTela.innerHTML = ""
  var certo = '<h2>   You caught me!! <br> Yup, é a Meave </h2>'
  escreverNaTela.innerHTML = escreverNaTela.innerHTML + certo
  if (document.getElementById('limparTela').innerHTML == ''){
   var botaoLimparTela = '<button class= "botaoEscolhe" id = "limpar" onclick = "limparTela()">Limpar tela'
   limparTela.innerHTML += botaoLimparTela
  }
  
}


function limparTela(){
  var escreverNaTela = document.getElementById("resultado")
  var limparTela = document.getElementById('limparTela')
  escreverNaTela.innerHTML = ""
  limparTela.innerHTML = ""
  
  
}
