const contacto = document.getElementById('contacto');

contacto.addEventListener('click', () => {
  const formulario = document.getElementById('formulario');

  if (formulario.style.visibility === 'hidden') {
    formulario.style.visibility = 'visible';
  } else {
    formulario.style.visibility = 'hidden';
  }
});