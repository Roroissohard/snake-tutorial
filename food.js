import { onSnake, expandSnake } from "./snake";

let food = { x: 0, y: 0 };

export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = {x : 20, y : 10}
    }
 }

  

export function draw(gameBoard){

    const foodElement = document.createElement('div');
    snakeElement.style.gridRowStart = food.y;
    snakeElement.style.gridColumnStart = food.x;
    snakeElement.classList.add('food');
    gameBoard.appendChild(foodElement);
 }