let currentRound = 1;
let gameIsOver = false;

function startGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom players name!');
        return;
    }

    resetGame();

    gameArea.style.display = 'block';
    activePlayerName.textContent = players[activePlayer].name;
}

function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    const selectedField = event.target;
    const selectedRow = +selectedField.dataset.row - 1;
    const selectedCol = +selectedField.dataset.col - 1;

    if (gameData[selectedRow][selectedCol] > 0 || gameIsOver) {
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedCol] = activePlayer + 1;

    const winnerId = checkForGameOver();

    if (winnerId !== 0) {
        endGame(winnerId); // someone won
        return;
    }

    if (currentRound === 9) {
        endGame(0); // draw (only if last move AND no winner)
        return;
    }

    currentRound++;
    switchPlayer();
}


function checkForGameOver() {
    
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }

    if (
        gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0]
    ) {
        return gameData[0][2];
    }

    return 0; 
}

function endGame(winnerId) {
    gameIsOver = true;
    const gameOverElement = document.getElementById('game-over');
    gameOverElement.style.display = 'block';

    if (winnerId === 0) {
        gameOverElement.firstElementChild.textContent = "It's a draw!";
    } else {
        const winnerName = players[winnerId - 1].name;
        document.getElementById('winner-name').textContent = winnerName;
        gameOverElement.firstElementChild.textContent = `You won! ${winnerName}!`;
    }
}


function resetGame() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameArea.style.display = 'block';

    document.getElementById('game-over').style.display = 'none';

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
        }
    }

    for (const fieldElement of gameFieldElements) {
        fieldElement.textContent = '';
        fieldElement.classList.remove('disabled');
    }

    activePlayerName.textContent = players[activePlayer].name;
}
