// Game 1
function season(a) {
  if (a < 1 || a > 12) {
      console.log('Неправильный параметр');
  } else if (a >= 3 && a <= 5) {
      console.log('Весна');
  } else if (a >= 6 && a <= 8) {
      console.log('Лето');
  } else if (a >= 9 && a <= 11) {
      console.log('Осень');
  } else {
      console.log('Зима');
  }
}

// Game 2

function gameTwo (){
  const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  fruits.sort(() => Math.random() - 0.5);
  alert('Перемешанные слова: ' + fruits.join(', '));
  
  const firstElement = fruits[0];
  const lastElement = fruits[fruits.length - 1];
  
  const userFirstElement = prompt('Чему равнялся первый элемент массива?');
  const userLastElement = prompt('Чему равнялся последний элемент массива?');
  
  if (userFirstElement === firstElement && userLastElement === lastElement) {
    alert('Поздравляю! Вы угадали оба элемента!');
  } else if (userFirstElement === firstElement || userLastElement === lastElement) {
    alert('Вы были близки к победе!');
  } else {
    alert('Вы ответили неверно. Попробуйте еще раз.');
  }

}
