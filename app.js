const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id   //when an event occurs store it by id as userChoice
    userChoiceDisplay.innerHTML=userChoice //change the inner html with the button choice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)
    if(randomNumber == 1){
        computerChoice = 'rock'
    }
    if(randomNumber == 2){
        computerChoice = 'paper'
    }
    if(randomNumber == 3){
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = "it's a Draw"
    }
    if(computerChoice ==='rock' && userChoice ==='paper'){
        result = "You win!"
    }
    if(computerChoice ==='paper' && userChoice ==='rock'){
        result = "You lose!"
    }
    if(computerChoice ==='scissors' && userChoice ==='paper'){
        result = "You lose!"
    }
    if(computerChoice ==='paper' && userChoice ==='scissors'){
        result = "You win!"
    }
    if(computerChoice ==='rock' && userChoice ==='scissors'){
        result = "You lose!"
    }
    if(computerChoice ==='scissors' && userChoice ==='rock'){
        result = "You win!"
    }
    resultDisplay.innerHTML=result
}