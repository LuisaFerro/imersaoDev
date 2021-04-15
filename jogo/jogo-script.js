var cartaMaeve = {
    nome: "Maeve - Flanco",
    imagem: "https://pbs.twimg.com/media/DedTXwmVMAAjs5p?format=jpg&name=large",
    atributos: {
        ataque: 180,
        defesa: 100,
        magia: 50
    }
}

var cartaIo = {
    nome: "Io - Cura",
    imagem: "https://gamepedia.cursecdn.com/paladins_gamepedia/e/e5/Champion_Io_Icon.png",
    atributos: {
        ataque: 160,
        defesa: 150,
        magia: 200
    }
}

var cartaAsh = {
    nome: "Ash - Tanque",
    imagem: "https://i.pinimg.com/564x/41/8e/e7/418ee7d245d0d25d9ccbf86bd928d962.jpg",
    atributos: {
        ataque: 150,
        defesa: 300,
        magia: 50
    }
}

var cartaInara = {
    nome: "Inara - Tanque",
    imagem: "https://i.pinimg.com/564x/d2/78/6e/d2786ed440161df6c82febc3de33649d.jpg",
    atributos: {
        ataque: 150,
        defesa: 300,
        magia: 60
    }
}

var cartaTyra = {
    nome: "Tyra - Dano",
    imagem: "https://i.pinimg.com/564x/c2/68/bf/c268bf43ff7a08ea9b1a4646454a438d.jpg",
    atributos: {
        ataque: 200,
        defesa: 150,
        magia: 50
    }
}

var cartaOctavia = {
    nome: "Octavia - Dano",
    imagem: "https://i.pinimg.com/564x/54/aa/35/54aa350002e516da4881ca32351abe8d.jpg",
    atributos: {
        ataque: 200,
        defesa: 140,
        magia: 100
    }
}

var cartaSeris = {
    nome: "Seris - Cura",
    imagem: "https://vignette.wikia.nocookie.net/paladins/images/c/c6/Seris_profile.png/revision/latest?cb=20171110072720",
    atributos: {
        ataque: 160,
        defesa: 150,
        magia: 200
    }
}

var cartaYagorath = {
    nome: "Yagorath - Tanque",
    imagem: "https://borderlands4.com/wp-content/uploads/2021/01/Ancient_Wounds.png",
    atributos: {
        ataque: 140,
        defesa: 300,
        magia: 80
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaMaeve, cartaIo, cartaAsh, cartaInara, cartaTyra, cartaOctavia, cartaSeris, cartaYagorath]
//            0           1           2          3         4            5            6           7     


var pontosJogador = 0
var pontosMaquina = 0
atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  var html = "quantidade de cartas no jogo: " + cartas.length
  divQuantidadeCartas.innerHTML = html
  
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "jogador " + pontosJogador + " / " + pontosMaquina + " Maquina"
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        pontosJogador++
        htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        pontosMaquina++
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if(cartas.length == 0 ){
      alert('Fim de jogo!')
      if (pontosJogador > pontosMaquina){
        htmlResultado = '<p class = "resultado-final"> Você venceu!</p>'
      } else if (pontosJogador < pontosMaquina){
        htmlResultado = '<p class = "resultado-final"> Você perdeu!</p>'
      }else{
        htmlResultado = '<p class = "resultado-final"> Empate! </p>'
      }
    } else {
      document.getElementById("btnProximaRodada").disabled = false
    }
    divResultado.innerHTML = htmlResultado
    document.getElementById("btnJogar").disabled = true
  
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class = "carta"></div> <div id="carta-maquina" class= "carta" </div>`
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled = true
  document.getElementById("btnProximaRodada").disabled = true
  
  var divResultado = document.getElementById("resultado")
  divResultado.innerHTML = ""
  
}
