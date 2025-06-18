function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    overlayElement.style.display= 'block';
    backdropElement.style.display = 'block';
    
}

function closePlayerConfig(){
    overlayElement.style.display= 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorElement.textContent='';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerconfig(event){
    event.preventDefault();
    const formdata = new FormData(event.target);
    const enteredPlayerName = formdata.get('player-name').trim();
   
    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        errorElement.textContent = 'please enter a valid name!';
        return;
    }

    const updatedPlayerData = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerData.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;
    closePlayerConfig();

}