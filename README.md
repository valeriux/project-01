# GA - SEI - PROJECT-01 (Space-Invaders)

### Timeframe
* 7 days

## Technologies used

* JavaScript (ES6).
* HTML5 + HTML5 Audio.
* CSS Animation.
* GitHub.

## Installation

1. Clone or download the repo.
2. Open the `index.html` in your browser of choice.

## My Game - Space Invaders
<img width="1418" alt="Screenshot 2019-04-05 at 11 40 58" src="https://user-images.githubusercontent.com/47470930/55622317-c2b79480-5797-11e9-99bd-74c027ab6c24.png">

You can play the hosted version here: [Space Invaders](https://valeriux.github.io/project-01/).

### Game overview

This is my own re-creation of the classic Space Invaders game.

Space Invaders is one of the most addicting games. The idea of the game is very simplistic. You are a space ship who must destroy the invading enemy space aliens as they descend. Use the [SPACE] bar to fire your gun and the arrow keys to move right and left.


### Controls
- Space ship movements: ← →
- [SPACE] bar to fire your gun


### Game Instructions

1. The game begins with a welcome screen and on the bottom of the screen are the game instructions. The game is started by clicking on the "START" button.

<img width="1430" alt="Screenshot 2019-04-05 at 11 43 20" src="https://user-images.githubusercontent.com/47470930/55622406-07433000-5798-11e9-9610-abf2b63e8b36.png">


2. After the "START" button has been clicked the game starts. The player can stars using the arrow keys left and right to move, and the [SPACE] bar to kill the enemy space aliens.

<img width="766" alt="Screenshot 2019-04-05 at 11 47 24" src="https://user-images.githubusercontent.com/47470930/55622636-a49e6400-5798-11e9-9556-425077f66dfa.png">

3. Points are gained every time player killed an enemy space alien.

<img width="737" alt="Screenshot 2019-04-05 at 11 51 44" src="https://user-images.githubusercontent.com/47470930/55622856-43c35b80-5799-11e9-98c4-f2a5a6b62642.png">

4. A player can have a maximum of 3 lives. If the player loses all their lives the Game is Over.
   Game is Over is show in a new window with two messages:
   1. Game Over:  You ran out of lives.
   2. Your score: X

<img width="1426" alt="Screenshot 2019-04-05 at 12 04 25" src="https://user-images.githubusercontent.com/47470930/55623463-fba53880-579a-11e9-8a6d-71288d60237e.png">

5. You loose if:
  - The aliens reached planet Earth.
  - You ran out of lives.

6. You win if:
  - You kill all the aliens.

## Process

The starting point for this game was creating in html one div with the class name of wrap, in css some style to calc the width 13*13, and the last part was to create the logic in Javascript to create all my game divs. The aliens are generated by an array and the aliens movement are generated by for each. The initial position for my gamer was set up by playerIndex. To obtain the position of my player function move was created to find the square with the class of “player”, remove the class of player from that square and to add the class of player to square the player should move to.

### Challenges

In general this project was a big challenge for me. Initially was super difficult create the logic to kill my aliens and make them disappear of my array.

### Wins

A big win for this game was to get the aliens disappear when they were shot.

## Future features

I would like to add three difficulty levels.

I would like to add 3 types of missile: slow straight ones, fast straight ones and wiggly ones which are the most powerful.

I would like to add some base shelters.
