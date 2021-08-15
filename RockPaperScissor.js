let userScore = 0;
let compScore = 0;

function random(){
    var rand = Math.floor(Math.random()*3)+1;
    if(rand===1){
        return 'r';
    }
    else if(rand ==2){
        return 'p';
    }
    else if(rand ==3){
        return 's';
    }
}
function tie(){
    document.getElementById('result').textContent='Round tied!';
}
document.getElementById('rock-icon').addEventListener('click',function(){
    //checking
    if(random()==='r'){
        tie();
    }
    else if(random()==='p'){
        document.getElementById('result').textContent='User ROCK Stopped by Computer PAPER. COMP WIN!';
        compScore++;
        document.getElementById('comp-score').textContent=compScore;
    }
    else if(random()==='s'){
        document.getElementById('result').textContent='User ROCK Destroyed Computer SCISSOR. USER WIN!';
        userScore++;
        document.getElementById('user-score').textContent=userScore;
    }
});

document.getElementById('paper-icon').addEventListener('click',function(){
    //checking
    if(random()==='p'){
        tie();
    }
    else if(random()==='s'){
        document.getElementById('result').textContent='User PAPER Cut into pieces by Computer SCISSOR. COMP WIN!';
        compScore++;
        document.getElementById('comp-score').textContent=compScore;
    }
    else if(random()==='r'){
        document.getElementById('result').textContent='User PAPER Stopped Computer ROCK. USER WIN!';
        userScore++;
        document.getElementById('user-score').textContent=userScore;
    }
});

document.getElementById('scissor-icon').addEventListener('click',function(){
    //checking
    if(random()==='s'){
        tie();
    }
    else if(random()==='r'){
        document.getElementById('result').textContent='User SCISSOR Destroyed by Computer ROCK. COMP WIN!';
        compScore++;
        document.getElementById('comp-score').textContent=compScore;
    }
    else if(random()==='p'){
        document.getElementById('result').textContent='User SCISSOR Cut into pieces Computer PAPER. USER WIN!';
        userScore++;
        document.getElementById('user-score').textContent=userScore;
    }
});