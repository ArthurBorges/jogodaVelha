let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];

function handleMove(position) {
    if (board[position] == '') {
        board[position] = symbols[playerTime]

        if (playerTime == 0) {
            playerTime = 1;
            console.log(playerTime);
        } else {
            playerTime = 0;
            console.log(playerTime);
        }
    }
}