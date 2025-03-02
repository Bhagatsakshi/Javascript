let randomNumber =parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guesSlot=document.querySelector('.guesses')
const remain=document.querySelector('.lastResult')
const lowORhigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame = true

if(playGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('enter valid number')
    }else if(guess<1){
        alert('enter number more than 1')
    }else if(guess>100){
        alert('enter number less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess===6) {
            displayGuess(guess)
            displayMsg(`Game Over , Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`you guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMsg(`number is too low`)
    }else if(guess > randomNumber){
        displayMsg(`number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guesSlot.innerHTML += `${guess} `
    numGuess++;
    remain.innerHTML=`${6-numGuess}`
}

function displayMsg(message) {
    lowORhigh.innerHTML=`<h3>${message}</h3>`
}

function endGame(params) {
    userInput.value='' //value cleaup
    userInput.setAttribute('disabled','')
    p.classList.add('buttton')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(params) {
    const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click',function (e) {
        //all reset
        randomNumber =parseInt(Math.random()*100+1);

        prevGuess=[]
        numGuess=1
        guesSlot.innerHTML = ''
        remain.innerHTML=`${6-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);

        playGame = true
    })
}