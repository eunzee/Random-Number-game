//1-100까지 랜덤번호 지정
//유저가 숫자를 입력, go버튼 누름
//유저가 랜덤번호 맞추면 정답입니다!
//랜덤번호>유저번호 Up!!
//랜덤번호<유저번호 Down!!
//다시하고 버튼 누르면 게임 리셋
//5번의 기회 끝나면 게임 끝(버튼 disable)
//유저가 1-100 범위 밖의 숫자를 입력하면 알리기, 이때 기회는 차감하지 않음
//유저가 이미 입력한 숫자를 또 입력하면 알리기, 이때 기회는 차감하지 않음

let randomNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultText = document.getElementById("result-text");
let resultImage = document.getElementById("result-image")
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance");
let history = [];


playButton.addEventListener("click",play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
});

function pickRandomNum(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("랜덤숫자", randomNum)
}

function play() {
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultText.textContent = "1과 100사이의 숫자를 입력하세요."
        return;
    }

    if(history.includes(userValue)){
        resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요."
        return;
    }

    chances --;
    chanceArea.textContent = `남은 횟수 : ${chances}번`

    if(userValue < randomNum ){
        resultText.textContent = "UP!!"
       
    }else if (userValue > randomNum){
        resultText.textContent = "DOWN!!"
        
    }else {
        resultArea.textContent = "정답입니다!"
        playButton.disabled = true;
    }

    history.push(userValue);
    console.log(history)

    if(chances < 1){
        gameOver = true;
    }
    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    pickRandomNum();
    resultText.textContent = "숫자를 입력해 보세요:)"
    playButton.disabled = false;
}


pickRandomNum();