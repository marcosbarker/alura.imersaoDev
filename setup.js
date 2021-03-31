var cartaMarcos = {
    nome: "yusuke",
    atributos: {
        ataque: 80,
        defesa: 50,
        magia: 90
    }
}

var cartaJoaquim = {
    nome: "ladyBug",
    atributos: {
        ataque: 90,
        defesa: 90,
        magia: 70
    }
}

var cartaAnaCarolina = {
    nome: "princesaJujuba",
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
     exibirOpcoes()
 }

function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }

    opcoes.innerHTML = opcoesTexto
}

function obterAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obterAtributoSelecionado()
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos['atributoSelecionado']){
        alert('Venceu a carta máquina')
    
    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        alert('Perdeu. Carta da máquina ganhou')
  
    }else{
        alert('Empatou')
    }

    console.log(cartaMaquina)
}