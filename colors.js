
init();


function selectO() {
    const oButton = document.querySelector('.mode');
    const xButton = document.querySelector('.mode.selected');

    xButton.classList.remove('selected');
    oButton.classList.add('selected');
}


function selectX() {
    const buttons = document.querySelectorAll('.mode');

    buttons[0].classList.remove('selected');
    buttons[1].classList.add('selected');
}

function getNum(square) {
    const squares = document.querySelectorAll('.square');
    let i = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == square) {
            return i;
            //console.log(i);
        }
    }
}

//after a player makes their turn I use this method to determine
//if someone won the game
function checkWinner(square) {
    let letter = square.innerText;
    console.log(letter);
    // get the index of the square they clicked 
    const squares = document.querySelectorAll('.square');
    let i = getNum(square);
    // for (let i = 0; i < squares.length; i++) {
    //     if (squares[i] == square) {
    //         i = i;
    //         //console.log(i);
    //     }
    // }
    console.log(i);
    if (squares[1] == square || squares[7] == square) {
        if (squares[i - 1].innerText == 'X' && squares[i + 1].innerText == 'X' && square.innerText == 'X' || squares[i - 1].innerText == 'O' && squares[i + 1].innerText == 'O' && square.innerText == 'O') {
            const message = document.getElementById('message');
            message.innerText = "Winner!";
        }
    }

    if (squares[3] == square || squares[5] == square) {
        if (squares[i - 3].innerText == 'X' && squares[i + 3].innerText == 'X' && square.innerText == 'X' || squares[i - 3].innerText == 'O' && squares[i + 3].innerText == 'O' && square.innerText == 'O') {
            const message = document.getElementById('message');
            message.innerText = "Winner!";
        }
    }

    if (squares[0] == square) {
        if (squares[i + 1].innerText == 'X' && squares[i + 2].innerText == 'X' && square.innerText == 'X' || squares[i + 1].innerText == 'O' && squares[i + 2].innerText == 'O' && square.innerText == 'O') {
            const message = document.getElementById('message');
            message.innerText = "Winner!";
        }
        else if (squares[i + 3].innerText == 'X' && squares[i + 6].innerText == 'X' && square.innerText == 'X' || squares[i + 3].innerText == 'O' && squares[i + 6].innerText == 'O' && square.innerText == 'O' && square.innerText == 'O') {
            const message = document.getElementById('message');
            message.innerText = "Winner!";
        }
        else if (squares[i + 4].innerText == 'X' && squares[i + 8].innerText == 'X' && square.innerText == 'X' || squares[i + 4].innerText == 'O' && squares[i + 8].innerText == 'O' && square.innerText == 'O') {
            const message = document.getElementById('message');
            message.innerText = "Winner!";
        }
    }

    if (squares[2] == square) {
        if (squares[i + 3].innerText == 'X' && squares[i + 6].innerText == 'X' && square.innerText == 'X' || squares[i + 3].innerText == 'O' && squares[i + 6].innerText == 'O' && square.innerText == 'O') {
            const message = document.getElementById('message');
            message.innerText = "Winner!";
        }
        else if (squares[i + 3].innerText == 'X' && squares[i + 6].innerText == 'X' && square.innerText == 'X' || squares[i + 3].innerText == 'O' && squares[i + 6].innerText == 'O' && square.innerText == 'O' && square.innerText == 'O') {
            const message = document.getElementById('message');
            message.innerText = "Winner!";
        }
        else if (squares[i + 4].innerText == 'X' && squares[i + 8].innerText == 'X' && square.innerText == 'X' || squares[i + 4].innerText == 'O' && squares[i + 8].innerText == 'O' && square.innerText == 'O') {
            const message = document.getElementById('message');
            message.innerText = "Winner!";
        }
    }


}


function newGame() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(item => {
        //remove the html 
        item.innerHTML = '';
    });

    const text = document.getElementById('message');
    text.innerText = '';
}
// Init is just anything you want to have happen when the page loads
function init() {
    // Add your setup code/functions here



    const s = document.getElementById('container');


    let counter = 0;
    s.addEventListener('click', function (e) {

        if (e.target.className == 'square') {
            const square = e.target
            // console.log('clicked');
            counter++;

            if (counter % 2 == 1) {
                square.innerHTML = '<p>X</p>';
                selectO();
                checkWinner(square);
            }
            else {
                square.innerHTML = '<p> O </p>'
                selectX();
                checkWinner(square);
            }
        }

    });


    const newButton = document.getElementById('reset');
    newButton.addEventListener('click', function (e) {
        newGame();
        selectX();
        if (counter % 2 == 1) {
            console.log("THIS is where it is chagning");
            counter++;
        }
    });
}





