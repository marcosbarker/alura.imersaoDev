var cartaMarcos = {
    atributos: {
        nome: "yusuke",
        ataque: 80,
        defesa: 50,
        magia: 90
    }
}

var cartaJoaquim = {
    atributos: {
        nome: "ladyBug",
        ataque: 90,
        defesa: 90,
        magia: 70
    }
}

var cartaAnaCarolina = {
    atributos: {
        nome: "princesaJujuba",
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
         numeroCartajogador = parseInt(Math.random() * 3)
     }

     cartaJogador = cartas[numeroCartaJogador]
     document.getElementById('btnSortear').disabled = true
     document.getElementById('btnJogar').disabled = false
 }

function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }

    opcoes.innerHTML = opcoesTexto
}