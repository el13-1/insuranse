

document.addEventListener('DOMContentLoaded', () =>{
  const buttonAll = document.querySelectorAll('.btn');
  const modalWindow = document.querySelector('.modal');
  const close = document.querySelector('.modal__close');

  buttonAll.forEach(element => {
    element.addEventListener('click', () =>{
      modalWindow.style.display = 'flex';
    });
  });

  close.addEventListener('click', ()=>{
    modalWindow.style.display = 'none';
  })
})