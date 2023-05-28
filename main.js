/*funcionalidad para ocultar o mostrar un elemento de texto*/
let ocultoTexto_btn = document.getElementById('ocultoTexto_btn');
let ocultoTexto = document.getElementById('ocultoTexto');

ocultoTexto_btn.addEventListener('click', toggleText);

function toggleText() {
  ocultoTexto.classList.toggle('vicible');

  if (ocultoTexto.classList.contains('vicible')) {
    ocultoTexto_btn.style.display = 'none';
  }
}

/*funcionalidad de recargar la página cuando se hace clic en el elemento del logo con la clase "logoFortram"*/
document.addEventListener("DOMContentLoaded", function() {
  var logo = document.querySelector(".logoFortram");
  logo.addEventListener("click", function() {
    location.reload();
  });
});