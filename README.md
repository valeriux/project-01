# GA - SEI - PROJECT-01 (Space-Invaders)

### Timeframe
* 5 days

## Technologies used

* JavaScript (ES6).
* HTML5 + HTML5 Audio.
* CSS Animation.
* GitHub.

## Installation

1. Clone or download the repo.
2. Open the `index.html` in your browser of choice.

## My Game - Space Invaders
<img width="1430" alt="Screenshot 2019-04-05 at 11 40 58" src="https://user-images.githubusercontent.com/47470930/55622317-c2b79480-5797-11e9-99bd-74c027ab6c24.png">

You can play the hosted version here: [Space Invaders] (https://valeriux.github.io/SEI-Project-01/).

### Game overview

This is my own re-creation of the classic Space Invaders game.

Space Invaders is one of the most addicting games. The idea of the game is very simplistic. You are a space ship who must destroy the invading enemy space aliens as they descend. Use the [SPACE] bar to fire your gun and the arrow keys to move right and left.


### Controls
- Space ship movements: ← → keys
- [SPACE] bar to fire your gun


### Game Instructions

1. The game begins with a welcome screen and on the bottom of the screen are the game instructions. The game is started by clicking on the "START" button.

<img width="1430" alt="Screenshot 2019-04-05 at 11 43 20" src="https://user-images.githubusercontent.com/47470930/55622406-07433000-5798-11e9-9610-abf2b63e8b36.png">

2. After the "START" button has been clicked the game starts. The user starts on 3 lives and a score of zero. The player can stars using the arrow keys left and right to move, and the [SPACE] bar to kill the enemy space aliens.

<img width="810" alt="Screenshot 2019-07-01 at 14 21 12" src="https://user-images.githubusercontent.com/47470930/60439894-8915ee80-9c0b-11e9-879e-031a75fa1ce7.png">

3. Points are gained every time player killed an enemy space alien.

<img width="810" alt="Screenshot 2019-07-01 at 14 16 12" src="https://user-images.githubusercontent.com/47470930/60439449-cfb71900-9c0a-11e9-8307-fbf2669d2e5b.png">


4. A player can have a maximum of 3 lives. If the player loses all their lives the Game is Over.
   Game is Over is show in a new window with two messages:
   1. Game Over:  You ran out of lives.
   2. Your score: X

<img width="1430" alt="Screenshot 2019-04-05 at 12 04 25" src="https://user-images.githubusercontent.com/47470930/55623463-fba53880-579a-11e9-8a6d-71288d60237e.png">

5. You loose if:
  - The aliens reached planet Earth.
  - You ran out of lives.

6. You win if:
  - You kill all the aliens.

## Process

The starting point for this game was creating in html one div with the class name of wrap, in css some style to calc the width 13*13, and the last part was to create the logic in Javascript to create all my game divs. The aliens are generated by an array and the aliens movement are generated by for each. The initial position for my gamer was set up by playerIndex. To obtain the position of my player function move was created to find the square with the class of “player”, remove the class of player from that square and to add the class of player to square the player should move to.

### Challenges

The biggest challenge for this project was create the logic to kill my aliens and make them disappear from my array.

<img width="618" alt="Screenshot 2019-07-01 at 14 31 44" src="https://user-images.githubusercontent.com/47470930/60440631-20c80c80-9c0d-11e9-9cd0-dfbb3c034a2d.png">

### Wins

A big win for this game was to get the aliens disappear when they were shot.

## Future features

I would like to add:
- Three difficulty levels.
- Three types of missile: slow straight ones, fast straight ones and wiggly ones which are the most powerful.
- A base shelters.
