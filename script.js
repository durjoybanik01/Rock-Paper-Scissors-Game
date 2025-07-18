let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")



const genCompChoice = () =>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
    console.log("Game was draw!")
    msg.innerText = "Game was Draw, play again!"
    msg.style.backgroundColor = "blue";
}

const showWinner= (userWin, userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        console.log("You Win!");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose")
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice} `
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);
    if(userChoice === compChoice){
        //draw game
        drawGame();
   }else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissors,paper
        userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper") {
        //scissors,rock
        userWin = compChoice === "scissors" ? false : true;
    }else{
        //paper,scissors
        compChoice === "rock"? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
   }


}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
