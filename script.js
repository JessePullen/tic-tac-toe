// Creates player object
const Player = (name, icon) => {
    return { name, icon };
};

// Assigns player name and icon for playing using player factory - can be user input in future
const player1 = Player('Player 1', 'x');
const player2 = Player('Player 2', 'o');

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
                grid.classList.add(`grid-item-${columns+index}`);
                gridContainer.appendChild(grid);
            }
        }
    };
    return { setBoard, board };
})();

gameBoard.setBoard();