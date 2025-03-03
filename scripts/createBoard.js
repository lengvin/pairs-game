import { startTimer } from "./timer.js";
import { createIconsArray, createCard} from "./cards.js";

const gameBoard = document.querySelector(".board");
// const startButton = document.querySelector(".board__button");
// const input = document.querySelector(".board__input");
// const card = document.querySelector('.card');

export function createBoard(count, columns) {
    gameBoard.textContent = "";
    const template = document.querySelector("#gameTableTemplate").cloneNode(true).content;
    // console.log(icons)
    const gameTable = template.querySelector('.table');
    const resetButton = template.querySelector(".table__button");
    const icons = createIconsArray(count);
    // for (let i = 0; i < count; i++) {
    //     gameTable.append(createCard());
    // }
    gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
    `;
    gameBoard.append(gameTable);
    resetButton.addEventListener("click", () => {
        location.reload();
    });
    icons.forEach((icon) => {
        gameTable.append(createCard(icon));
    });
    gameBoard.append(resetButton);
    startTimer();
}

