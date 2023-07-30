const myModal = document.getElementById('modal-contactame');
const myElement = document.getElementById('contactame');

myModal.addEventListener('shown.bs.modal', () => {
    myElement.focus();
});

let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
//1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Diseñadora')
  .pauseFor(700)
  .deleteChars(20)
  .typeString('Maria Jose Alvarez')
  .pauseFor(2000)
  .deleteChars(10)
//   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//   .pauseFor(1000)
  .start();
