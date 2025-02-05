const imgs = document.querySelectorAll(".img");
userScore=0;
compScore=0;

const genCompChoice = () =>{
    const options = ["Rock","Paper","Scissors"]
    const randidx =Math.floor(Math.random()*3);
    return options[randidx];
}

const drawGame = () => {
    const msg = document.querySelector(".msg");
    msg.style.backgroundColor="#081b31";
    msg.innerText="Game was Draw";
}

const showWinner = (userChoice,compChoice,userWin) =>{
    if(userWin){
        userScore++;
        const msg = document.querySelector(".msg");
        msg.style.backgroundColor="green";
        msg.innerText=`Your ${userChoice} beats My ${compChoice}`;
        const uscore = document.querySelector("#uscore");
        uscore.innerText=userScore;
    }else{
        compScore++;
        const msg = document.querySelector(".msg");
        msg.style.backgroundColor="red";
        msg.innerText=`My ${compChoice} beats Your ${userChoice}`;
        const cscore = document.querySelector("#cscore");
        cscore.innerText=compScore;
    }
}

const playGame = (userChoice, compChoice)=>{
    userWin = true;
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        if(userChoice === "Rock"){
            userWin = compChoice === "Scissors" ? true : false;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Rock" ? true : false;
        }
        else{
            userWin = compChoice === "Paper" ? true : false;
        }
        showWinner(userChoice,compChoice,userWin);
    }
}

const winnerDeclare = () =>{
    if(userScore === 5){
        userScore=0;
        compScore=0;
        cscore.innerText=0;
        uscore.innerText=0;

        const msg = document.querySelector(".msg");
        msg.style.backgroundColor="blue";
        msg.innerText="You won the Game";
    }
    else if(compScore === 5){
        userScore=0;
        compScore=0;
        cscore.innerText=0;
        uscore.innerText=0;
        
        const msg = document.querySelector(".msg");
        msg.style.backgroundColor="brown";
        msg.innerText="You Lost the Game";
    }
}

imgs.forEach((img)=>{
    img.addEventListener("click", ()=>{
        const userChoice = img.getAttribute("id");
        console.log(userChoice);
        const compChoice = genCompChoice();
        console.log(compChoice);
        playGame(userChoice,compChoice);
        winnerDeclare(userScore,compScore)
    })
})

const btn = document.querySelector(".button")

btn.addEventListener("click", () => {
   const uscore = document.querySelector("#uscore");
   uscore.innerText=0;
   const cscore = document.querySelector("#cscore");
   cscore.innerText=0;
   userScore=0;
   compScore=0;
})


