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
                grid.classList.add(`${columns+index}`);
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
                    gridItem.textContent = gameController.playerToken;
                    // changeTurn();
                }
            });
        });
    };
    return { board, setBoard, makeMove };
})();

// Used to make turns and game logic
const gameController = (() => {
    const playerTurn = () => {
        // Change player turn on grid item being populated
        //let token = player1.token
    };
    const changeTurn = () => {
        
    }
    let playerToken = player1.token;
    return { playerToken };
})();

gameBoard.setBoard();
gameBoard.makeMove();