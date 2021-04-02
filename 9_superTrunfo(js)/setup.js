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

var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
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