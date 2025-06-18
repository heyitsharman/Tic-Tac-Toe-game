let editedPlayer = 0;
const players = [
    {
        name : '',
        symbol : 'X',
    },
    {
        name : '',
        symbol : 'O',
    }
];
const overlayElement = document.getElementById("overlay");
const backdropElement = document.getElementById("backdrop");
const errorElement = document.getElementById("config-errors");
const editplayer1btn =document.getElementById("edit-player1");
const editplayer2btn =document.getElementById("edit-player2");
const cancelButton = document.getElementById('cancel-btn');
const formElement = document.querySelector('form');


editplayer1btn.addEventListener('click', openPlayerConfig);
editplayer2btn.addEventListener('click', openPlayerConfig);
cancelButton.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerconfig);