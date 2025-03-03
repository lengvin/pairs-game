import { gameLogic } from "./gameLogic.js";


function createCard(flippedIcon) {
    // Клонирование шаблона
    const template = document.querySelector('#cardTemplate').cloneNode(true).content;
    // Поиск нужного элемента
    const card = template.querySelector('.card');
    // Добавление иконки, название которой передаем через параметр flippedIcon
    card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);
  
    card.addEventListener('click', () => gameLogic(card));
  
    // ruturn card означает, что получившийся объект "выбрасывается" в то место, где будет вызвана функция createCard
    return card;
  }

function createIconsArray (initialCount) {
    const cardsIcons = ["compass", "cloud", "play", "bolt", "stop", "cogs", "atom",
      "basketball-ball", "arrows", "angle-left", "bars", "file", "filter", "gear",
       "folder", "folder-open", "shield", "scissors", "pen-clip"];
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    const duobleCards = dublicateElements(cards);
    return shuffleArray(duobleCards);
}

function dublicateElements (array) {
    let massive = [];
    array.forEach((item) => {
        massive.push(item, item);
      });
    return massive;
}

function shuffleArray (array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        // Отнимаем индекс
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
        // Генерируем рандомный индекс
    
        // Сохраняем элемент текущего индекса
        const temp = array[currentIndex];
        // По текущему индексу размещаем элемент по случайному индексу
        array[currentIndex] = array[randomIndex];
        // А на место элемента по случайному индексу ставим сохраненный элемент бывшего текущего индекса
        array[randomIndex] = temp;
    };
    
    // Возвращаем измененный массив
    return array;
}

export {createCard, createIconsArray};