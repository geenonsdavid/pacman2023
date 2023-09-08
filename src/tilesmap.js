const gameDiv = document.getElementById('game');


/**créer le plateau */
/*
// 1 = wall
// 0 = coin
// 2 = ground
// 3 = pacman
// 4 = power
*/
const layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ,1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4 ,1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [2, 2, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 2, 2],
    [2, 2, 2, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 2, 2, 2],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [2, 2, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 2, 2],
    [2, 2, 2, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2],
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 4, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 4, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

/**créer le plateau */
function createBoard() {
    let caseplateau = 0;
    for (let i = 0; i < layout.length; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        gameDiv.appendChild(row);

        for (let j = 0; j < layout[i].length; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('id', caseplateau++);
            row.appendChild(square);

            if (layout[i][j] === 1) {
                square.classList.add('wall');
                // modifier la taille des murs
                
            } else if (layout[i][j] === 0) {
                square.classList.add('coin');
            } else if (layout[i][j] === 2) {
                square.classList.add('ground');
            } else if (layout[i][j] === 3) {
                square.classList.add('pacman');
            } else if (layout[i][j] === 4) {
                square.classList.add('power');
            }
        }
    }
}

createBoard();

/**créer le pacman */
getCaseByIndex(20).classList.add('pacman');
function getCaseByIndex (index) {
    let caseIndex = document.querySelector(`[id="${index}"]`);
    return caseIndex;
}

