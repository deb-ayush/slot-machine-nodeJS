//Slot Machine Project in node js
//User bets on each line

//functions in the slot machine
// 1. Deposit money
// 2. Determine no. of lines to bet on
// 3. Collect a bet amt
// 4. Spin the the slot machine
// 5. Check if user won
// 6. Distriution of winnings
// 7. Play again

// function deposit(){
    //old way of defining functions
// }

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "S": 2,
    "A": 4,
    "B": 6,
    "C": 8
}

const SYMBOL_VALUES = {
    "S": 5,
    "A": 4,
    "B": 3,
    "C": 2
}

const deposit = () => {
    while(true){
    const depositAmt = prompt("Enter amount to deposit: ");
    const numberDepositAmt = parseFloat(depositAmt);

    if(isNaN(numberDepositAmt) || numberDepositAmt <= 0){
        console.log("Invalid Deposit!");
    }else{
        return numberDepositAmt;
    }
  }
};

const getNumberOfLines = () =>{
    while(true){
        const lines = prompt("Enter the number of lines to bet on: ");
        const numberOfLines = parseInt(lines);
    
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number!, Try between 1 & 3");
        }else{
            return numberOfLines;
        }
      }
}

const getBet = (balance, lines) =>{
    while(true){
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
    
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance/lines)){
            console.log("Amount exceeds your wallet!");
        }else{
            return numberBet;
        }
      }
}

const spin = () => {
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i=0; i<count;i++){
            symbols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for (let i =0; i<COLS; i++){
        const reelSymbols = [...symbols];
        for(let j=0; j<ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

const reels = spin();
console.log(reels);

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
console.log();