function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme') //'#' puxa 'ID' do html
    var filmeFavorito = campoFilmeFavorito.value 
    if(filmeFavorito.endsWith('.jpg')){  //endswith (termina com? retorna true ou false)
        listarFilmesNaTela(filmeFavorito)
 
    }else{

        alert("Imagem inválida")
    }

    campoFilmeFavorito.value = "" //limpa o que foi escrito, ficando o 'placeholder' do html
}

function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes') //'#' puxa 'ID' do html
    var elementosFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTLM = listaFilmes.innerHTML + elementosFilme 
}