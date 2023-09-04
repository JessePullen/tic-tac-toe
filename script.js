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
                    gameController.updateBoard();
                    gameController.checkWinner();
                }
            });
        });
    };
    // Resets board by replacing all grid items with no content
    const newBoard = () => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach((gridItem) => {
            gridItem.textContent = '';
        });
    }
    // New game button resets board and player turn
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
    // Returns token for player whose turn it is
    const playerTurn = () => {
        return players[turn].token;
    };
    // Changes turn when token is placed on board
    const changeTurn = () => {
        if (turn === 0) {
            turn = 1;
        } else {
            turn = 0;
        }
    }
    // Resets turn to player1 when new game button is pressed
    const resetTurn = () => {
        turn = 0;
    }
    const winningMoves = [
        [[0], [1], [2]], //top row
        [[3], [4], [5]], //middle row
        [[6], [7], [8]], //bottom row
        [[0], [3], [6]], //left column
        [[1], [4], [7]], //middle column
        [[2], [5], [8]], //right column
        [[0], [4], [8]], //diagonal top-left to bottom-right
        [[2], [4], [6]]  //diagonal top-right to bottom-left
    ]

    const updateBoard = () => {
        let currentBoard = [];

        const gridItems = document.querySelectorAll('.grid-item');

        gridItems.forEach((gridItem) => {
            currentBoard.push(gridItem.textContent);
        });
    }

    const checkWinner = () => {

    };
    return { playerToken, turn, winningMoves, changeTurn, playerTurn, resetTurn, updateBoard, checkWinner };
})();

gameBoard.setBoard();
gameBoard.makeMove();