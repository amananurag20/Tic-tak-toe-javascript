const board = document.getElementById('board')
const squares = document.getElementsByClassName('square')

let playerX=true;
let gameOver = false;
const winningPattern=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const HeadingMessage = document.createElement('h2')
HeadingMessage.textContent = `PlayerX's turn!`
HeadingMessage.style.marginTop = '4px'
HeadingMessage.style.fontSize='30px'
HeadingMessage.style.color='yellow'
board.before(HeadingMessage)



function isGameTie(){
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true
};

function gameWinner(currentChance){
    for(let i = 0; i < winningPattern.length; i++){
        const [a, b, c] = winningPattern[i]
        if(squares[a].textContent === currentChance && squares[b].textContent === currentChance && squares[c].textContent === currentChance){
            return true
        }
    }
    return false
            
};


function restartButton() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
    playerX = true;
    gameOver = false; 
    HeadingMessage.textContent = `PlayerX's turn!`;
}


for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {

        if (gameOver) {
            alert('Game over! Please restart the game.');
            return; 
        };

        if(squares[i].textContent !== '') {
            return;
        };

        let currentChance = playerX ? "X" : "O";
        squares[i].textContent = currentChance;
        
        if(gameWinner(currentChance)) {
            HeadingMessage.textContent = `Game over! ${currentChance} wins!`;
            gameOver = true;
            return;
        }

        if(isGameTie()) {
            HeadingMessage.textContent = `Game is tied!`;
            gameOver = true;
            return;
        }

        playerX = !playerX;
        HeadingMessage.textContent = playerX ? `X's turn!` : `O's turn!`;
    });
}
