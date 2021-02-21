

document.addEventListener('DOMContentLoaded', () =>{
  const buttonAll = document.querySelectorAll('.btn');
  const modalWindow = document.querySelector('.modal');
  const close = document.querySelector('.modal__close');
  const login = document.querySelector('.login');
  const loginForm = document.querySelector('.modal__log');
  const closeLog = document.querySelector('.log__close');

  buttonAll.forEach(element => {
    element.addEventListener('click', () =>{
      modalWindow.style.display = 'flex';
    });
  });

  close.addEventListener('click', ()=>{
    modalWindow.style.display = 'none';
  });

  login.addEventListener('click', ()=>{
    loginForm.style.display = 'flex';
  });

  closeLog.addEventListener('click', ()=>{
    loginForm.style.display = 'none';
  });
})