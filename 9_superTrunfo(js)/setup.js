var cartaMarcos = {
    nome: "yusuke urameshi",
    imagem: "https://i.pinimg.com/originals/bf/94/f2/bf94f27a6835f873c2ecc770ff9e9897.jpg",
    atributos: {
        ataque: 80,
        defesa: 50,
        magia: 90
    }
}

var cartaJoaquim = {
    nome: "lady Bug",
    imagem: "https://i.pinimg.com/originals/26/7f/e7/267fe756f594ddce79edece0a2dca1cc.jpg",
    atributos: {
        ataque: 90,
        defesa: 90,
        magia: 70
    }
}

var cartaAnaCarolina = {
    nome: "princesa Jujuba",
    imagem: "https://i.pinimg.com/736x/c7/0c/29/c70c29b67b373466743f15a6572dd377.jpg",
    atributos: {
        ataque: 50,
        defesa: 90,
        magia: 100
    }
}

 var cartaMaquina   
 var cartaJogador

 var cartas = [cartaMarcos, cartaJoaquim, cartaAnaCarolina]

 function sortearCarta(){
     var numeroCartaMaquina = parseInt(Math.random() * 3)
     cartaMaquina = cartas[numeroCartaMaquina]

     var numeroCartaJogador = parseInt(Math.random() * 3)
     while (numeroCartaJogador == numeroCartaMaquina){
         numeroCartaJogador = parseInt(Math.random() * 3)
     }

     cartaJogador = cartas[numeroCartaJogador]
     console.log(cartaJogador)

     document.getElementById('btnSortear').disabled = true
     document.getElementById('btnJogar').disabled = false
     
     exibeCartaJogador()
 }

 function exibeCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`

    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" 
        + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id= 'opcoes' class= 'carta-status'>" 
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
 }

/*
 function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }

    opcoes.innerHTML = opcoesTexto
}
*/

function obterAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obterAtributoSelecionado()

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class= "resultado-final">Venceu</p>'     

    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class= "resultado-final">Perdeu</p>'
  
    }else{
        htmlResultado = '<p class= "resultado-final">Empatou</p>'
    }

    divResultado.innerHTML = htmlResultado

    exibecartaMaquina()
}

function exibecartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`

    var opcoesTexto = ""

    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" 
        + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
     }

    var html = "<div id= 'opcoes' class= 'carta-status'>" 
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'

}