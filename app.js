let buttons = document.querySelectorAll('.shopping-list button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.color = 'lightgray';
    button.style.backgroundColor='blue';
  });
});
