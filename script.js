const form = document.querySelector('form');
form.addEventListener('submit', e => {
  const pass1 = document.querySelector('#newPassword');
  const pass2 = document.querySelector('#confirmPassword');
  const errorMsg = document.querySelector('.pass-error');
  if (pass1.value !== pass2.value) {
    e.preventDefault();
    console.log(pass1, pass2);  
    pass1.classList.add('error'); 
    pass2.classList.add('error');
    errorMsg.style.display = 'block';
  } else {return;}
});