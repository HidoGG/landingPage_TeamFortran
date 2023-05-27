
// let ocultoTexto_btn = document.getElementById('ocultoTexto_btn');

// let ocultoTexto = document.getElementById('ocultoTexto');

// ocultoTexto_btn.addEventListener('click', toggleText);
 
// function toggleText() {
    
//     ocultoTexto.classList.toggle('vicible');
//     ocultoTexto_btn.classList.remove('vicible');
    
// }

let ocultoTexto_btn = document.getElementById('ocultoTexto_btn');
let ocultoTexto = document.getElementById('ocultoTexto');

ocultoTexto_btn.addEventListener('click', toggleText);

function toggleText() {
  ocultoTexto.classList.toggle('vicible');

  if (ocultoTexto.classList.contains('vicible')) {
    ocultoTexto_btn.style.display = 'none';
  }
}