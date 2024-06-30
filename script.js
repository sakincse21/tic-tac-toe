const winSets = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

let moves = 1;
let player1Name = '';
let player2Name = '';

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function () {
    reset();
    player1Name = document.getElementById('playerOne').value;
    player2Name = document.getElementById('playerTwo').value;
    if (player1Name == '' || player2Name == '') {
        alert('Please add your names...');
    } else {
        document.getElementById('scoreBoard').innerText = 'Game is on!';
        document.getElementById('rightBox').style.display='block';
    }
})

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function () {
    reset();
    setNamesNull();
    document.getElementById('scoreBoard').innerText = 'Welcome!';
})

function buttonClick(buttonID) {
    if (player1Name != '' && player2Name != '') {
        let winCheck = false;
        const cell = document.getElementById(buttonID);
        if (cell.innerText == '') {
            if (moves % 2 != 0) {
                cell.innerText = 'X';
            } else {
                cell.innerText = 'O';
            }

            for (let i = 0; i < winSets.length; i++) {
                const cellCheck1 = document.getElementById(parseInt(winSets[i][0])).innerText;
                const cellCheck2 = document.getElementById(parseInt(winSets[i][1])).innerText;
                const cellCheck3 = document.getElementById(parseInt(winSets[i][2])).innerText;

                if ((cellCheck1 != '') && (cellCheck1 == cellCheck2) && (cellCheck2 == cellCheck3)) {
                    winCheck = true;
                    break;
                }
            }
            moves++;
            if (winCheck == true) {
                moves--;
                if (moves % 2 != 0) {
                    document.getElementById('scoreBoard').innerText = player1Name + ' Won...!';
                } else {
                    document.getElementById('scoreBoard').innerText = player2Name + ' Won...!';
                }
            }
            if (moves >= 10 && winCheck == false) {
                document.getElementById('scoreBoard').innerText = 'Match Draw';
            }
        }
    } else {
        alert('Please add players name...');
    }
}

document.getElementById('1').addEventListener('click', function () {
    buttonClick('1');
});
document.getElementById('2').addEventListener('click', function () {
    buttonClick('2');
});
document.getElementById('3').addEventListener('click', function () {
    buttonClick('3');
});
document.getElementById('4').addEventListener('click', function () {
    buttonClick('4');
});
document.getElementById('5').addEventListener('click', function () {
    buttonClick('5');
});
document.getElementById('6').addEventListener('click', function () {
    buttonClick('6');
});
document.getElementById('7').addEventListener('click', function () {
    buttonClick('7');
});
document.getElementById('8').addEventListener('click', function () {
    buttonClick('8');
});
document.getElementById('9').addEventListener('click', function () {
    buttonClick('9');
});

function reset() {
    moves = 1;
    const allCells = document.getElementsByClassName('cells');
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].innerText = '';
    }
}

function setNamesNull() {
    document.getElementById('playerOne').value = '';
    document.getElementById('playerTwo').value = '';
}