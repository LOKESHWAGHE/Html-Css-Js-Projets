let userscore = 0;
let computerscore=0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const computerScorePara = document.querySelector("#computer-score");

const getcompchoice= () =>{
    const options =["rocks" , "paper" , "scissor"];
    const randomindx= Math.floor(Math.random() * 3);
    return options[randomindx];
}

const showWinner = (userWin) =>{

  if(userWin){
    userscore++;
    userScorePara.innerText = userscore;
    console.log("you win!");
    msg.innerText = " User win the game";
  }
  else{
    computerscore++;
    computerScorePara.innerText = computerscore;
    console.log("compuuter win");
    msg.innerText = " computer win the game";
  }
};

const draw= () =>{
    console.log("the game was draw");
    msg.innerText = "Game is Draw";
}

const playgame = (userchoice)=>{
    console.log("userchoice is = " , userchoice);

    const computerchoice = getcompchoice();
    console.log("computerchoice is = " , computerchoice);

    if(userchoice === computerchoice){
        draw();
    }
    else{
        let userWin = true;
        if(userchoice=== "rock"){
        userWin = computerchoice === "paper" ? false : true;
    } 
    else if(userchoice ==="paper"){
        userWin = computerchoice === "scissors" ? false : true;
    }
    else{
        userWin = computerchoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click" , ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});