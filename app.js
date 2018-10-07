//  Tic Tac Board 
const grid =
    [...document.querySelectorAll('.row')]; // Object array for 


const cell = [
    document.querySelector('.top.left'),
    document.querySelector('.top.middle'),
    document.querySelector('.top.right'),
    document.querySelector('.middle.left'),
    document.querySelector('.center'),
    document.querySelector('.middle.right'),
    document.querySelector('.bottom.left'),
    document.querySelector('.bottom.middle'),
    document.querySelector('.bottom.right'),
];

console.log(grid);
console.log(cell);

winner = 0;
let i = 0;  //  click counter

grid.forEach(function (row) {
    row.addEventListener("click", cellClicked);
});


function cellClicked(e) {
    //reset board if game is over
    if ((winner == 1) || (i == cell.length && e.target.textContent == 'X') || (i == cell.length && e.target.textContent == 'O')) {
        console.log('NEW GAME');
        i = 0;
        clearBoard();
        winner = 0;

    } else if (e.target.textContent == '' && (i <= 9)) {   //  if cell is empty

        i++;
        console.log(i);

        writeXO();
        win();
        
        console.log(grid);
        console.log(cell);

        //check for Draw
        if (i == 9) {
            console.log('DRAW');
            console.log('GAME OVER');
        }

    }

    function clearBoard() {
        document.querySelector('.top.left').textContent = '';
        document.querySelector('.top.middle').textContent = '';
        document.querySelector('.top.right').textContent = '';
        document.querySelector('.middle.left').textContent = '';
        document.querySelector('.center').textContent = '';
        document.querySelector('.middle.right').textContent = '';
        document.querySelector('.bottom.left').textContent = '';
        document.querySelector('.bottom.middle').textContent = '';
        document.querySelector('.bottom.right').textContent = '';

    }

    function writeXO() {
        if (i % 2 != 0) {   //  Player 1 or 2
            e.target.textContent = 'X';
            a = 2;
        } else {
            e.target.textContent = 'O';
            a = 1;
        }
        console.log('Player ' + a + ' Turn');
    }

    function win() {

        var c0 = cell[0].textContent;
        var c1 = cell[1].textContent;
        var c2 = cell[2].textContent;
        var c3 = cell[3].textContent;
        var c4 = cell[4].textContent;
        var c5 = cell[5].textContent;
        var c6 = cell[6].textContent;
        var c7 = cell[7].textContent;
        var c8 = cell[8].textContent;

        //check rows
        if ((c0 == 'X' && c1 == 'X' && c2 == 'X') || (c3 == 'X' && c4 == 'X' && c5 == 'X') || (c6 == 'X' && c7 == 'X' && c8 == 'X')) {
            winner = 1;
            alert('Player 1 Wins');
        } else if ((c0 == 'O' && c1 == 'O' && c2 == 'O') || (c3 == 'O' && c4 == 'O' && c5 == 'O') || (c6 == 'O' && c7 == 'O' && c8 == 'O')) {
            winner = 1;
            alert('Player 2 Wins');

            //check columns
        } else if ((c0 == 'X' && c3 == 'X' && c6 == 'X') || (c1 == 'X' && c4 == 'X' && c7 == 'X') || (c2 == 'X' && c5 == 'X' && c8 == 'X')) {
            winner = 1;
            alert('Player 1 Wins');
        } else if ((c0 == 'O' && c3 == 'O' && c6 == 'O') || (c1 == 'O' && c4 == 'O' && c7 == 'O') || (c2 == 'O' && c5 == 'O' && c8 == 'O')) {
            winner = 1;
            alert('Player 2 Wins');

            //check diagonals
        } else if ((c0 == 'X' && c4 == 'X' && c8 == 'X') || (c2 == 'X' && c4 == 'X' && c6 == 'X')) {
            winner = 1;
            alert('Player 1 Wins');
        } else if ((c0 == 'O' && c4 == 'O' && c8 == 'O') || (c2 == 'O' && c4 == 'O' && c6 == 'O')) {
            winner = 1;
            alert('Player 2 Wins');

        }






    }



}





