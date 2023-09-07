const gameDiv = document.getElementById('game');


/**créer le plateau */
const layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2 ,1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5 ,1],
    [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1],
    [3, 3, 3, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 3, 3, 3],
    [1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1],
    [3, 3, 3, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 3, 3],
    [1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1],
    [1, 1, 5, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 5, 1, 1],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
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
            } else if (layout[i][j] === 2) {
                square.classList.add('coin');
            } else if (layout[i][j] === 3) {
                square.classList.add('ground');
            } else if (layout[i][j] === 4) {
                square.classList.add('pacman');
            } else if (layout[i][j] === 5) {
                square.classList.add('power');
            }
        }
    }
}

createBoard();

/**créer le pacman */
getCaseByIndex(25).classList.add('pacman');



function getCaseByIndex (index) {
    let caseIndex = document.querySelector(`[id="${index}"]`);
    return caseIndex;
}

