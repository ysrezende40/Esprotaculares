var imagens = [
    "imagens/turma2.jpg",
    "imagens/turma3.jpg",
    "imagens/turma4.jpg",
    "imagens/turma1.jpeg",
    "imagens/turma_5.jpeg",
    "imagens/turma_6.jpeg",
    "imagens/turma_7.jpeg",
    "imagens/turma_8.jpeg",
    "imagens/turma_9.jpeg",
    "imagens/turma_10.jpeg",
    "imagens/turma_11.jpeg",
    "imagens/turma_12.jpeg",
    "imagens/turma_13.jpeg",
    "imagens/turma_14.jpeg",
    "imagens/turma_15.jpeg",
    "imagens/turma_16.jpeg",
    "imagens/turma_17.jpeg",
    "imagens/turma_18.jpeg",
    "imagens/turma_19.jpeg",
    "imagens/turma_20.jpeg",
    "imagens/turma_21.jpeg",
    "imagens/turma_22.jpeg",
    "imagens/turma_23.jpeg",
    "imagens/turma_24.jpeg"
];

var imagemAtual = 0;

function moverImagens() {
    var img = document.querySelector("#imgturma");
    img.src = imagens[imagemAtual]; 
    img.height = 600;
    img.width = 600;

    imagemAtual++;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }
}
function moverImagensTras(){
    var img = document.querySelector("#imgturma");
    img.src = imagens[imagemAtual]; 
    img.height = 600;
    img.width = 600;

    imagemAtual--;

    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    }

}


function moverImagensMobile() {
    var img = document.querySelector("#imgturma");
    img.src = imagens[imagemAtual]; 
    img.height = 10;
    img.width = 10;

    imagemAtual++;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }
}
function isMobile() {
    return window.innerWidth < 768; 
 }

  function AlbumMobile() {
    var img = document.querySelector("#imgturma");
    if (img && isMobile()) {
        moverImagensMobile();  
    }
  }
