import TileMap  from './TileMap.js';
const tileSize = 15;
const canvas = document.getElementById('gameCanvas');
console.log(canvas);
const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);


function gameLoop() {
    tileMap.draw(ctx);
}
tileMap.setCanvasSize(canvas);

setInterval(gameLoop, 1000/75);