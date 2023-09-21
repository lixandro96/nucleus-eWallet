const btnShow = document.querySelector('.show__navegacion');
const btnhide = document.querySelector('.hide__navegacion');
const navegacion = document.querySelector('.navegacion');

btnShow.addEventListener('click', () => {
  btnShow.classList.add('hide');
  btnShow.classList.remove('show');
  btnhide.classList.remove('hide');
  navegacion.classList.toggle('navegacion__show')
})
btnhide.addEventListener('click', () => {
  btnShow.classList.remove('hide');
  btnhide.classList.add('hide');
  navegacion.classList.toggle('navegacion__show')
})