# Node.js Slot Machine Game 🎰

This is a simple slot machine game built with Node.js, where you can bet on multiple lines and try their luck to win virtual currency. The game is running entirely in the console.

## Features
- **Deposit Money**: Start by depositing a certain amount of virtual money to play with.
- **Bet on Lines**: Choose the number of lines (1-3) to bet on.
- **Place a Bet**: Place a bet amount for each line.
- **Spin the Slot Machine**: Spin the reels to try and win!
- **Win Check**: Check if you’ve won based on the symbols that land on the reels.
- **Winnings Distribution**: Winnings are calculated and added to your balance.
- **Play Again**: Option to continue playing or cash out your winnings.

## How to Play
1. **Install Dependencies**: Make sure you have Node.js installed, then install the required package using:
   ```bash
   npm install prompt-sync

## Run the Game:
    node slot-machine.js
    
## Gameplay:
    Deposit your starting balance. (in the console only)
    Choose the number of lines to bet on (1-3).
    Place your bet per line.
    Spin the slot machine and check the result.
    If you win, the winnings are added to your balance.
    Keep playing until you run out of money or decide to quit.

## Code Overview
    deposit(): Allows the player to deposit money before starting the game.
    getNumberOfLines(): Prompts the player to choose the number of lines to bet on.
    getBet(balance, lines): Collects the bet amount based on the player's balance and the number of lines chosen.
    spin(): Spins the slot machine and generates random symbols on each reel.
    transpose(reels): Transposes the reels to check the rows for matching symbols.
    printRows(rows): Displays the rows after the spin.
    getWinnings(rows, bet, lines): Calculates the winnings based on matching symbols on the lines bet.
    game(): The main function that runs the game loop, handling user inputs and game state.
