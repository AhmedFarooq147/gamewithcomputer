let userScore= 0;
let compScore=0;

let userChoice=document.querySelectorAll(".choice");
const userChoicePara=document.querySelector("#user")
const compChoicePara=document.querySelector("#comp")

userChoice.forEach((choice)=>{
   
    choice.addEventListener("click", ()=>{
     let userChoice=choice.getAttribute("id");
     playGame(userChoice)
    })

})
const msg=document.querySelector("#msg")
const showWinner=(userWIn, userChoice,compChoice)=>{
      if(userWIn){
       userScore++;
       userChoicePara.innerText= userScore;
       msg.innerText=`you win! ${userChoice} beats ${compChoice} `
       msg.style.backgroundColor="green"
      } else{
        console.log("you lose")
        msg.innerText=`you lose ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red"
        compScore++;
        compChoicePara.innerText= compScore;
      }
}

const playGame= (userChoice) => {
     
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice===compChoice){
         drawGame();
    } else{
        let userWIn= true;
    
        if(userChoice==="rock") {
            userWIn=compChoice==="paper" ? false : true ;
        } else if( userChoice==="paper"){
            userWIn=compChoice==="scissors" ? false : true;
        } 
        else {
              userWIn=  compChoice==="rock" ? false :true;
        }
        
        showWinner(userWIn,userChoice,compChoice);

    
    } 
};
const drawGame= ()=> {
    console.log("Game Was Draw")
    msg.innerText="Match was Draw"
    msg.style.backgroundColor="#081b31"
}
const genCompChoice= () => {
    const options=["rock","paper","scissors"]
    const randIdx=   Math.floor(Math.random() *3);
    return options [ randIdx];

}

