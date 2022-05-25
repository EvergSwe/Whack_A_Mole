# Whack A Mole

![Responsive Test](/assets/images/responsive_check_Whack_a_mole.PNG)

[View website on GitHub pages](https://github.com/EvergSwe/Whack_A_Mole)

[View website](https://evergswe.github.io/Whack_A_Mole/)

# Introduction

Playing digital games has become one of the most popular leisure activities for people of all ages, genders and backgrounds. But it has more advantages but leasure as training the different capabilities like
reducing reaction time without compromising accuracy. This is discussed in this publication from 2009 (https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2871325/). On the basis of this input I decided to develop
an easy click game known as "whack a mole" for my second project using html, css and javascript syntax. The game has two levels of difficultis based on how long time the mole is visable before it moves to a randome
new square in the grid and scores are collected based on number of hits e.g. "click" a mole. 

# UX process

## User stories

As a game user:
- I would like to have fun and spend some time to Whack a Mole
- I would like to understand the purpose with the game
- I would like to know how to start the game
- I would like to know what time is left for the game
- I would like to know my score
- I would like to have different levels of difficulties

As a site owner:
- I would like to give same game experiance no matter which device is used
- I would like the game to be intuitive
- I would like the User to continue to play the game on higher difficulties


## Design
Basic design structure was created with the ambition to focus on JavaScript part of the Whacka a Mole game Project and return to 
design in agail way of working. Time limitation made the design of game at acceptable level.

## Structure & Skeleton
Based on the given user stories input and web search for whack a mole games a basic wireframe and functional diagram was created

![Wireframe Whack a Mole](/assets/images/WireFrame_Whack_A_Mole.PNG)

![Function Diagram](/assets/images/functional_diagram_Whack_A_Mole.PNG)

## Surface

Surface are based on easy structure with color schemas following retro game style

![Color Schema Old Game](/assets/images/retro-game-by-schemecolor.png)



# Features

### Game Instruction 
To be able to easely understand gama purpose a specific button is added. When clicking the button a popup box including instructions is shown. 
Instruction is removed by clicking the close button.

### Start Game Easy and Hard 
Two option of difficulti levels added with the difference of time interval between the move of mole. Selection is made by clicking one of the two buttons
and game is started. Intervall has been tested iteratively and resultet in easy has an interval of 1 second and hard has an interval of 0.6 seconds.

### TimeLeft Countdown 
At the start of game the timeleft start at 30 seconds and count down to 0 when the Game Over alert pops up.

### Randomly place Mole in Square 
In html-file 9 divs are created in the gamearea which is used to randomly add a class to the div. Mole Class is removed from existing div and assigned
 same or new randomly calculated div when time interval is ended.

### Score  
Mouse down event listenere are added to squares in the game area and used to check if mose down event is registered at the same element as the randomly placed mole class.
If this is true score is increase with 1, else nothing is happening with score.

### Game Over alert
When timeleft is 0 an alert pops up with the message of score achived during the game


### Development planned for next increment
- improve styling as the focus was on MVP and java script
- add a hammer for hitting the mole
- add a score message at the mole when hit
- add a mole animation when hit

# Testing

### Feature testing
Manual tests has been performed according to below test procedure. One bug has been detacted related to re-start of game and 
Mole left from previouse game. When hitting the Mole you can gain one additional score prior to re-starting the game. Bug is 
acceptable as it har only minor impact to score.

![Test Case Whack A Mole](/assets/images/TestCase_Whack_A_Mole.PNG)


### Browser interface testing (UI)
Below procesers has been available and used for testing the UI.

- Google Chrome (desktop device)
Game UI as expected however could be improved


- Microsoft Edge (desktop device)
Game UI as expected however could be improved
 

- Safari (mobile device)
Game UI as expected and one issu identified with Game instruction, image is not shown why alt text instead are visible.



## Automated testing

Automated testing of html, css programming language has been done by using third party tools. Google Chorme extension devtools, Lighthouse, has been used for general improvements of webpage quality. It has audits for performance, accessibility, progressive web apps, SEO

1. [HTML Validator by w3.org](https://validator.w3.org/#validate_by_uri)

- Result
  - passed without remarks
![HTML Validator](/assets/images/W3C_HTML_Check_Whack_A_Mole.PNG)

2. [CSS Validator](https://jigsaw.w3.org/css-validator)

- Result
  - Passed without remarks
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

3. [JSHint JavaScript Validator](https://jshint.com)

- Result
  - Passed with accapteble remarks

  ![JS validator](/assets/images/jshint_Whack_A_Mole.PNG)



3. [Google Chrome Lighthouse Extension](https://developers.google.com/web/tools/lighthouse)

- Lighthouse test mobile:

![Lighthouse mobile test](/assets/images/Lighthouse_check_mobile_Whack_A_Mole.PNG)

- Lighthouse test desktop:

![Lighthouse desktop test](/assets/images/Lighthouse_check_desktop_Whack_A_Mole.PNG)


## Test Conclution

- Two issues detected during tesing
  - You could gain one additonal score prior to restarting game 
  - Image in Game Instruction popup does not render and alt text is displayed in Safari on mobile device
In all the test result is accaptable with regards to both functional tests as well as UI tests. 

# Deployment

### Github deployment steps

1. Login into https://github.com/
2. Select Kayak_Classes -> https://github.com/EvergSwe/Kayak_Classes
3. Select Settings
4. Scroll down to Gibhub Pages and select the link to dedicated tab
5. Go to source drop down and select branch main, root and Save
6. Page is now successfully published on Github Pages

# Credits

## Code
- code inspiration has been picked up from variouse sources
  - Code Institute Love Math project and course material
  - https://www.w3schools.com/jsref/
  - https://stackoverflow.com/
  - https://www.freecodecamp.org/


- code challanges has been resolved by reading different sources
  - Code Institute Slack
  - https://developer.mozilla.org/
