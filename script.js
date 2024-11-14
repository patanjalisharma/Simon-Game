let usersync = [];
let gamesync = [];

let buttoncol = ["yellow", "blue", "green", "pink"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false);
    console.log("Game is started");
    started = true;
    levelup();
})


function btnflash(bxn) {
    bxn.classList.add("flash");
    setTimeout(function () {
        bxn.classList.remove("flash");
    }, 200);
}

function userflash(bxn) {
    bxn.classList.add("userflash");
    setTimeout(function () {
        bxn.classList.remove("userflash");
    }, 200);
}

function levelup() {
    usersync = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randindx = Math.floor(Math.random() * 3);
    let randcolor = buttoncol[randindx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gamesync.push(randcolor);
    btnflash(randBtn);
}

function checkAns(index) {
    if (gamesync[index] == usersync[index]) {
        if (gamesync.length == usersync.length) {
            setTimeout(levelup, 400);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        resetGame();
    }
}


function btnPress() {
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    usersync.push(userColor);

    checkAns(usersync.length - 1);
}


let btn = document.querySelectorAll(".bxn");
for (btn of btn) {
    btn.addEventListener("click", btnPress);
}


function resetGame() {
    usersync = [];
    gamesync = [];
    level = 0;
    started = false;
}
