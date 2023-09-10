function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    var btnTopo = document.getElementById('btnTopo');

    if (window.scrollY >= 200) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

function isMobile() {
    return window.innerWidth < 768; 
  }
  
  // Função para ocultar o botão em dispositivos móveis
  function ocultarBotaoTopoEmMobile() {
    var btnTopo = document.getElementById('btnTopo');
    if (btnTopo && isMobile()) {
      btnTopo.style.display = 'none';
    }
  }
  
  
  ocultarBotaoTopoEmMobile();
