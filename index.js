// Масив з емоджі
const emojis = ["😍", "😍", "😺", "😺", "🙄", "🙄", "😫", "😫", "🥱", "🥱", "🐶", "🐶", "🦁", "🦁", "🐨", "🐨"];

// Перемішуємо масив для випадкового розташування емоджі
let shutEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

// Масив для відстеження відкритих карточок
let openCards = [];

// Цикл для створення кожної карточки
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shutEmojis[i];

  // Обробник кліку на карточці
  box.onclick = function () {
    // Перевірка, чи карточка вже відкрита і чи не відкрито вже дві карточки
    if (!this.classList.contains('boxOpen') && openCards.length < 2) {
      // Додаємо клас 'boxOpen' до відкритої карточки
      this.classList.add('boxOpen');
      // Додаємо відкриту карточку до масиву openCards
      openCards.push(this);

      // Перевірка, чи відкрито дві карточки
      if (openCards.length === 2) {
        // Отримуємо значення обох відкритих карточок
        let card1 = openCards[0].innerHTML;
        let card2 = openCards[1].innerHTML;

        // Перевірка, чи значення карточок співпадають
        if (card1 === card2) {
          // Якщо так, додаємо клас 'boxMatch' до обох карточок
          openCards.forEach(card => {
            card.classList.add('boxMatch');
            card.classList.remove('boxOpen');
          });

          // Очищаємо масив openCards
          openCards = [];

          // Перевіряємо, чи гра завершилася
          if (document.querySelectorAll('.boxMatch').length === emojis.length) {
            alert('congratulations you are the winner');
          }
        } else {
          // Якщо значення карточок не співпадають, закриваємо їх після короткої затримки
          setTimeout(() => {
            openCards.forEach(card => {
              card.classList.remove('boxOpen');
            });
            openCards = [];
          }, 500);
        }
      }
    }
  };

  // Додаємо карточку до гри
  document.querySelector('.game').appendChild(box);
}














