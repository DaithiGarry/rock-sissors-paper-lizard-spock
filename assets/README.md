![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)
# **Rock, Paper, Scissors, Lizard, Spock.**
The rock, paper, scissors, lizard, spock game is the ultimate homage to the game created in the hit T.V. series, The Big Bang Theory. This game is an extension of the current, less complex game, rock, paper, scissors. This application will allow users to play against a truly random opponent in the computer, as people who are aware or each others personality, tend to be able to gain an advantage by prediction how their opponent might guess.

This game is targetted at adult and children; in addition to, fans of the Big Bang Theory. Players will be able to learn the rules of the game and have bundle of fun with this new update to the common decision making game of rock, paper, scissors.

![image of differnet displays](/assets/images/images_of_different_display_size.png)
------
## Features
### Existing Features
- Header
  - At the top of the page the header shows the game name centrally, Rock, Paper, Scissors, Lizard, Spock in a clear font, which is contrasting from the background.
  - The header makes it clear to the user what game they are playing.
  - On the right side of the header is a reset/refresh button, which acts to refresh if the player wants to play another game.
  - On the left side of the header is a spoke hand signal icon, to provide balance to the header, with an icon either side of the header title and to provide the user with a spock reference for fun.

![image of heading](/assets/images/heading.png)

- Game Options
  - The game options include clear instructions of which icons represent which of the options, "rock, paper, scissors, lizard, spock" via a color coded list below. This colour coding buttons are interactive and allow the user to make their choice.
  - Each interaction button also contains the symbol for each option, "rock, paper, scissors, lizard, spock".
  - This section also explains to the user that the first to five wins, wins the game.

![image of game options](/assets/images/game_options.png)

- Game Results
  - When the user make a decision on what option to play. Their choice is registered in the "Your choice" field. 
  - The Javascript code generates a random choice which is registered in the "Computer choice" field.
  - The result of the game, whether the player wins or loses is generated in the "results" field.
  - The score board is then update, for player "wins" and "loses".
  - If the player reachs 5 wins or 5 loses, a message is displayed to state that the game is over.

![image of game results](/assets/images/game_results.png)

- Footer
  - The footer section shows the rules of the game, "rock, paper, scissors, lizard, spock".

![image of the footer](/assets/images/footer.png)

## Features Left to implement
- The coding for the generated results is very verbose and needs to be condensed. The code below was tested but didnt seem to work on the first attempt.

![image of code to be implement in the result generation section](/assets/images/more_consise_code_for_result.png)

- The rule which allow you to win the round needs to appear when the user wins or loses; for example, if the user gets "Lizard" and the computer gets "Spock", when the user wins, another section should show the rule that, "Lizard posions Spock" etc.

## Testing
- The game has been tested on Chrome
- The game header, instruction, options, results and footer text is readable and understandable.
- The game results are correct when the game is functioning correctly.
  - On occasion, the game will drop, skip or miss the user selection.
- The score board functions correctly.
- The game will conclude correctly when five wins or loses are achieved.
- The game reset button works correctly.
- The colors (dark yellow for Lizard) has been registered as an issue on the lighthouse test.
- Also, the color coded method (explanation same color as the icons) is reducing the accessibility score on the lighthouse test. Each icon need to be directly labelled.

![lighthouse test showing poor accesibility](/assets/images/lighthouse_test.png)

- This project responds well with different screen sizes.

## Unsolved Bugs
- When trying to code for the results section of the code, I had to use a very verbose style of code. I have tried to implement the code below, which is cleaner and more consise but it was non repsonsive when i tested it.

![image of code to be implement in the result generation section](/assets/images/more_consise_code_for_result.png)

- Even though I have implemented a DOM content loaded event listener to insure the button elements on the page are loaded before the game starts, the game on occasion will drop, skip or miss a round of retrieving the player or users choice.

![DOMContentLoaded event listener](/assets/images/DOMContentLoaded.png)

## Validator testing
- NuHTML checker showed that a stray footer was found on line 72 of the HTML file. However, this is the only footer in the document.

![stray footer found in HTML](/assets/images/stray_footer_tag.png)

- W3C CSS validation service showed that no errors were found in the CSS.

![no erros in css](/assets/images/css_validator.png)

- jshint.com service showed 17 warnings in the javascript file.

![jshint warnings](/assets/images/javascript%20warnings.png)

## Deployment
- The site was deployed to Github pages.
- The live link can be found at [github](https://daithigarry.github.io/rock-sissors-paper-lizard-spock/)

## Content
- The site was styled on the Love Maths project.
- All javascript code is my own from my learnings from the course and piecing together ideas from w3schools and other websites.
- The HTML layout is similar to the Love Maths project but with large alterations and in most sections with total new code.
- The CSS layout is similar to the Love Maths project but with large alterations and in most sections with total new code.
- The icons were taken from fontawesome.
- The image icon was taken from the web.