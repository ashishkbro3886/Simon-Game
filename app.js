let gameSeq = [];
let userSeq = [];
let btns = ["pink","blue","yellow","violet"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let body = document.querySelector("body");
let highScore = 0;
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();
    }
    
});
function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function (){
        btn.classList.remove("gameFlash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    }, 250);
}

function checkAns(ind){
    if(gameSeq[ind] === userSeq[ind]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "";
        },250);
        if(level > highScore){
            highScore = level;
        }
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.<br>
            High Score is ${highScore} .`
        reset();
    }
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * 3);
    let randomcolor = btns[random];
    gameSeq.push(randomcolor);
    let btn = document.querySelector(`.${randomcolor}`);
    gameFlash(btn);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",function(){
        let btn = this;
        btnPress(btn);
    });
}

function btnPress(btn){
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}

