// Creates player object
const Player = (name, token) => {
    return { name, token };
};

// Assigns player name and token for playing using player factory - can be user input in future
const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');

// Creates game board in array and draws on page - Module automatically calls itself
const gameBoard = (() => {
    const board = [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2]
    ];
    // Loops through columns and indices to dynamically create game board
    const setBoard = () => {
        const gridContainer = document.querySelector('.grid-container');
        for (columns in board) {
            for (index in board[columns]) {
                const grid = document.createElement('div');
                grid.classList.add('grid-item');
                grid.classList.add(`${columns + index}`);
                gridContainer.appendChild(grid);
            }
        }
    };
    // Allows each grid item to be clicked on and to call a function on click
    const makeMove = () => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach((gridItem) => {
            gridItem.addEventListener('click', () => {
                if (gridItem.textContent === '') {
                    gridItem.textContent = gameController.playerTurn();
                    gameController.changeTurn();
                }
            });
        });
    };
    const newBoard = () => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach((gridItem) => {
            gridItem.textContent = '';
        });

    }
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        gameBoard.newBoard();
        gameController.resetTurn();
    });
    return { board, setBoard, makeMove, newBoard };
})();

// Used to make turns and game logic
const gameController = (() => {
    const players = [player1, player2];
    let turn = 0;
    let playerToken = players[turn].token;
    const playerTurn = () => {
        return players[turn].token;
    };
    const changeTurn = () => {
        if (turn === 0) {
            turn = 1;
        } else {
            turn = 0;
        }
    }
    const resetTurn = () => {
        turn = 0;
    }
    return { playerToken, turn, changeTurn, playerTurn, resetTurn };
})();

gameBoard.setBoard();
gameBoard.makeMove();