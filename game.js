const playerElement = document.querySelector(".PlayerY");
const arrow = document.querySelector(".arrowX");
const scoreElement = document.querySelector(".scorevalue");
let playerYPos = 180;
let arrowXPos = 700;
let arrowYPos = 400;
let score = 0;


setInterval(() => {

    scoreElement.textContent = score;
    arrowXPos -= 10;
    arrow.style.left = arrowXPos + "px";
    const a = arrow.getBoundingClientRect();
    console.log(a);

    const p = playerElement.getBoundingClientRect();
    console.log(p);


    if (p.left < a.right && p.right > a.left && a.top < p.bottom && a.bottom > p.top) {
        console.log("Game Over");
        alert("Game Over");
        restartGame();

    }

    if (arrowXPos < 0) {
        score++;


        console.log(score);
        arrowXPos = 700;
        let randomYPos = Math.floor(Math.random() * 300) + 20;
        arrow.style.top = randomYPos + "px";
    }
}, 20);



document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key == "ArrowUp") {
        playerYPos -= 25;
        if (playerYPos < 25) playerYPos = 20;
    }
    if (e.key == "ArrowDown") {
        playerYPos += 25;
        if (playerYPos > 300) playerYPos = 320;
    }

    playerElement.style.top = playerYPos + "px";

});

function restartGame() {
    score = 0;
    scoreElement.textContent = score;
    playerYPos = 180;
    arrowXPos = 700;
    arrowYPos = 200;
    playerElement.style.top = playerYPos + "px";
    arrow.style.left = arrowXPos + "px";
    arrow.style.top = arrowYPos + "px";
}