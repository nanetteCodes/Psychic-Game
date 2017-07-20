// Creating variables to hold the number of wins, losses, and turns left. They start at 0.//
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFarArray = [];
    var guessesSoFar;

    //array listing computer choices
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    


    //function run when user pushes key
    document.onkeyup = function(event) {
        // Randomly selected computer choices from the comChoices array
        console.log(event.key);
        //var using event.key to display guessesSoFar
        guessesSoFar = event.key;
        guessesSoFarArray.push(" " + guessesSoFar);

        if (event.key === computerGuess) {
            alert("You win! You must be psychic!");
            wins++;
        }

        if (event.key !== computerGuess) {
            guessesLeft--;
        }
        //resets guesses left after loosing
        if (guessesLeft === 0) {
            alert("You lost! You must not be psychic");
            losses++;
            guessesLeft = 10;
        }

        // Creating a variable to hold our new HTML. Keeps track of wins,losses, guesses left, guesses used

        var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Guesses so far: " + guessesSoFarArray + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

    }