const overlayElement = document.getElementById("overlay");
const backdropElement = document.getElementById("backdrop");

const editplayer1btn =document.getElementById("edit-player1");
const editplayer2btn =document.getElementById("edit-player2");
const cancelButton = document.getElementById('cancel-btn');

editplayer1btn.addEventListener('click', openPlayerConfig);
editplayer2btn.addEventListener('click', openPlayerConfig);
cancelButton.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);
