This Hangman game is a simple, interactive application built using React. The player must guess a random word letter-by-letter. Too many incorrect guesses will result in the hangman being fully drawn, symbolizing a loss, while correctly guessing the word results in a win.

FEATURES
Dynamic Word Guessing: Each game loads a random word that the player attempts to guess.
Interactive Components: Components react to user interactions, providing a dynamic gaming experience.
State Management: React state is used to track and update the game's status, guessed letters, and hangman drawing.
Game Restart: Players can start a new game at any point.
Win/Loss Notifications: Clear notifications for game outcomes.
Help Modal: Easy access to game rules through a UI element.
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

PREREQUISITES FOR THIS GAME/APP
You need to have Node.js and npm installed on your computer. Node.js comes with npm (Node Package Manager) which lets you install software (node modules) that Node.js can run.

Download Node.js from here: Node.js Official Site.

HOW TO INSTALL
Follow these steps to run this project in your local environment:

CLONING OF THE REPOSITORY

bash
Copy code
git clone https://github.com/YourUsername/hangman-game.git
cd hangman-game
Install Dependencies

bash
Copy code
npm install
Run the Application

bash
Copy code
npm start
This command runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

HANGMAN GAME RULES
Start the Game: When you start the game, a random word is chosen which you need to guess.
Guess Letters: Click on the letters to make a guess.

WON OR LOSS:
Win: You win if you correctly guess the word before the hangman is fully drawn.
Lose: You lose if the hangman is fully drawn before you guess the word.

BUILT WITH :
React - The web framework used
Create React App - Toolchain used to set up the development environment
React-Bootstrap/Custom CSS - For styling components

COMPONENTS
Keyboard: Renders the keyboard allowing the user to select letters.
Word Display: Shows the current state of the guessed word.
Hangman Display: Displays the hangman as guesses are made.
Help Modal: Provides information on how to play the game.
Restart Button: Allows users to restart the game at any time.

CODE STRUCTURE
src/components/: Contains all the React components.
src/App.js: The main React component that includes all other components.
src/index.js: Entry point for the React application.
