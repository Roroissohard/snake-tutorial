import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody =  [{ x: 11, y: 11}];
let newSegments = 0;


export function update() {
    const inputDirection = getInputDirection();
 for (let i = snakeBody.length - 2; i >= 0; i--){
     snakeBody[i + 1] = {...snakeBody[i]};
 }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
 snakeBody.forEach(segment =>{
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
 }) 
}


export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake{
    return snakeBody.some(segment => {
        return snakeBody.some(segment, position);
    })
}

export function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}