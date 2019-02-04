let p1score = 0;
let p2score = 0;
const p1score_span = document.getElementById("score-p1");
const p1score_span = document.getElementById("score-p2");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getPlayer2Choice() {
        const choices = ['r', 'p', 's'];
        const randomNumber = (Math.floor(Math.random() * 3));
        return choices[randomNumber];
    }

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(Player1, Player2) {
    const Player1Choice_div = document.getElementById(Player1);
    p1score++;
    p1score_span.innerHTML = p1score;
    p2score_span.innerHTML = p2score;
    result_div.innerHTML = `${convertToWord(Player1)} + " beats " + ${${convertToWord(Player2)}} +". You win! :D"`;
    Player1Choice_div.classlist.add('green-glow');
    setTimeout(() => Player1Choice_div.classlist.remove('green-glow'), 500);
}

function lose(Player1, Player2) {
    const Player1Choice_div = document.getElementById(Player1);
    p2score++;
    p1score_span.innerHTML = p1score;
    p2score_span.innerHTML = p2score;
    result_div.innerHTML = `${convertToWord(Player2)} + " beats " + ${convertToWord(Player1)} +". You lose! :(";
    Player1Choice_div.classlist.add('red-glow')`;
    setTimeout(() => Player1Choice_div.classlist.remove('red-glow'), 500);
}

function draw(Player1, Player2) {
    const Player1Choice_div = document.getElementById(Player1);
    p1score_span.innerHTML = p1score;
    p2score_span.innerHTML = p2score;
    result_div.innerHTML = `${convertToWord(Player1)} + " is the same as " + ${convertToWord(Player2)} +". So it's a draw! :o"`;
    Player1Choice_div.classlist.add('draw-glow');
    setTimeout(() => Player1Choice_div.classlist.remove('draw-glow'), 500);
}

function game(Player1Choice) {
    const Player2Choice = getPlayer2Choice();
    switch (Player1Choice + Player2Choice) {
        case "rs":
        case "sp":
        case "pr":
            win(Player1Choice, Player2Choice);
            break;

        case "sr":
        case "ps":
        case "rp":
            lose(Player1Choice, Player2Choice);
            break;

        case "rr":
        case "ss":
        case "pp":
            win(Player1Choice, Player2Choice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();
