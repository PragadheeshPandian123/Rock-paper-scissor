var msgg="";

function rock(){
    msgg=msgg+"rock";
}

function scissors(){
    msgg=msgg+"scissors";
}

function paper(){
    msgg=msgg+"paper";
}

function randomNumForBotChoice(){
    let rand=Math.random();
    let new_rand=rand*3;
    let final_rand=Math.floor(new_rand);   
    return final_rand;
}

function rpsChoice(number){
    return ["scissors","rock","paper"][number];
}

function decideWinner(choice1,choice2){
    if(choice1===choice2){
        return "You tied";
    }
    else if(choice1!==choice2){
        if((choice1==="rock" && choice2==="scissors")||(choice1==="paper" && choice2==="rock")||(choice1==="scissors" && choice2==="paper")){
            return "You win";
        }
        else{
            return "You lose";
        }
    }
}

function decideScore(msg){
    if(msg==="You tied"){
        {};
    }
    else if(msg==="You win"){
        let val=document.getElementById("user-score").innerText;
        val=parseInt(val);
        let newVal=val+1;
        document.getElementById("user-score").innerText=newVal;
    }
    else if(msg==="You lose"){
        let val=document.getElementById("comp-score").innerText;
        val=parseInt(val);
        let newVal=val+1;
        document.getElementById("comp-score").innerText=newVal;
    }
}

function rpsFrontEnd(userChoiceImage,botChoiceImage,finalMessage){
    let imageDatabase={
        "rock":document.getElementsByClassName("rock")[0].src,
        "paper":document.getElementsByClassName("paper")[0].src,
        "scissors":document.getElementsByClassName("scissors")[0].src
    }

    let frontEnd=document.createElement("div");
    frontEnd.id="front-end";
    document.getElementById("body").appendChild(frontEnd);

    let userImg=document.createElement("img");
    userImg.src=`${imageDatabase[userChoiceImage]}`;
    

    let msg=document.createElement("h3");
    msg.className="final-msg";
    msg.innerText=finalMessage;

    let botImg=document.createElement("img");
    botImg.src=`${imageDatabase[botChoiceImage]}`;
    
    if(finalMessage==="You win"){
        userImg.className="final-user-win-choice";
        botImg.className="final-bot-lose-choice";
    }
    else if(finalMessage==="You lose"){
        userImg.className="final-user-lose-choice";
        botImg.className="final-bot-win-choice";
    }
    else{
        userImg.className="final-tie";
        botImg.className="final-tie";
    }

    document.getElementById("front-end").appendChild(userImg);
    document.getElementById("front-end").appendChild(msg);
    document.getElementById("front-end").appendChild(botImg);    
}

function rps(){
    let userChoice,botChoice;
    
    let botChoice_num= randomNumForBotChoice();
    botChoice=rpsChoice(botChoice_num);

    userChoice=msgg;
    msgg="";
    let winMsg=decideWinner(userChoice,botChoice);
    decideScore(winMsg);

    rpsFrontEnd(userChoice,botChoice,winMsg);
}

function main1(){
    document.getElementById("front-end").remove();
    scissors();
    rps();
}

function main2(){
    document.getElementById("front-end").remove();
    rock();
    rps();
}

function main3(){
    document.getElementById("front-end").remove();
    paper();
    rps();
}
