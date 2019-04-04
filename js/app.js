document.addEventListener('DOMContentLoaded', () => {

  ///////////////Creating my div tags my board name is "wrap" 13*13 ////////////
  const wrap = document.querySelector('.wrap')
  const width = 13
  const squares = []

  //////////////////////////////////////////////////////////////////////////////
  const missileAudio    = document.querySelector('audio')
  const btnStart        = document.querySelector('.button')
  const secondScreen    = document.querySelector('.second_screen')
  const scoreBoard      = document.querySelector('.score')
  const showFinalScore  = document.querySelector('.show-final-score')
  const livesboard      = document.querySelector('.lives')

  let score = 0
  let timeUp = false
  let alienMoveInterval = null
  let alienBombInterval = null
  let gameTimer = null
  let lives = 3
  let playerIndex
  //let intervalID = null
  //////////////This for is to create my div tags on my wrap////////////////////
  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    squares.push(square)
    wrap.appendChild(square)
  }

  //Creating my function move to take the position of my player.
  function move() {
    // Find the square with the class of "player"
    const player = squares.find(square => square.classList.contains('player'))
    // Remove the class of player from that square
    player.classList.remove('player')
    // Add the class of player to square the player should move to
    squares[playerIndex].classList.add('player')
  }

  function alienWasShot(missilesIndex, missilesInterval) {
    // //Remove missiles class.
    squares[missilesIndex].classList.remove('missiles')
    score++
    scoreBoard.textContent = score
    clearInterval(missilesInterval)
    const index = aliensArray.indexOf(missilesIndex)
    //Splice: Adds/removes items to/from an array, and returns the removed item//
    aliensArray.splice(index,1)
    console.log('spliced', aliensArray)
    // //Remove Alien class.
    squares[missilesIndex].classList.remove('aliens')
    squares[missilesIndex].classList.remove('missiles')
  }

  //Index for my missiles.
  function shootMissiles() {
    // Get the index of the square above the player
    let missilesIndex = playerIndex - width
    // Get the DOM element of the square above the player
    let missiles = squares[missilesIndex]
    // Add the class of missiles to that square
    missiles.classList.add('missiles')
    // Move missiles up
    const missilesInterval = setInterval(() => {
      // Remove missiles class from the current square
      missiles.classList.remove('missiles')
      if (missilesIndex - width < 0) clearInterval(missilesInterval)

      else {// Set the new index for the missiles square
        missilesIndex -= width
        // Get the new DOM element of the next square
        missiles = squares[missilesIndex]
        // Add missiles class to the next square up
        missiles.classList.add('missiles')
      }
      /////////////////Remove my aliens when they Alien got shot////////////////
      if(squares[missilesIndex].classList.contains('aliens')){
        alienWasShot(missilesIndex, missilesInterval)
      }
    }, 80)//Repeat every 60ms//
  }

  const keydownHandler = (e) => {
    switch(e.keyCode) {
      case 37:
        // Left
        if(playerIndex % width > 0) {
          playerIndex--
          move()
        }
        break

      case 39:
        // Right
        if(playerIndex % width < width - 1) {
          playerIndex++
          move()
        }
        break

      case 32:
        // Laser SpaceBar
        shootMissiles()
    }
  }

  // Creating my Aliens Array//
  let aliensArray = []

  // Function to create my aliens.//
  function createAliens(){
    squares.forEach((square, index) => {
      square.classList.remove('aliens')
      if(aliensArray.includes(index)) square.classList.add('aliens')
    })
  }

  //Function activated when I click my btnStart.
  function start() {
    playerIndex = 162
    //Index for my player position 162
    squares[playerIndex].classList.add('player')
    document.addEventListener('keydown', keydownHandler)
    clearInterval(alienMoveInterval)
    aliensArray = [
      1, 3, 5, 7,
      9, 11, 13, 15,
      17, 19, 21, 23,
      25, 27, 29, 31,
      33, 35, 37, 39,
      41, 43, 45, 47,
      49, 51, 53, 55,
      57, 59, 61, 63
    ]
    createAliens()
    collision()

    aliensArray.forEach(alien => {
      squares[alien].classList.add('aliens')
    })

    alienMoveInterval = setInterval(() =>{
      squares.forEach(square => square.classList.remove('aliens'))
      aliensArray = aliensArray.map(alien => alien + 1)

      aliensArray.forEach(alien => {
        squares[alien].classList.add('aliens')
      })

      if(aliensArray.some(index => index > 156)){
        gameOver('GAME OVER: The aliens reached planet Earth.  ' + 'Your score is: ' + score)
        clearInterval(alienMoveInterval)
      }

      if(aliensArray.length === 0){
        gameOver('GAME OVER: YOU WIN!!!.  ' + 'Your score is: ' + score)
        clearInterval(alienMoveInterval)
      }
      //Message for Game Over when aliens reached the bottom.
    }, 240)

    //////////////////New Set Interval for Alien Bombs///////////////////////////
    //Declaring a const for bomIndex and choosing my aliens randomly.//
    alienBombInterval = setInterval(() =>{
      const bombIndex = aliensArray[Math.floor(Math.random()*(aliensArray.length))]
      dropBomb(bombIndex)
    },160)
    score = 0
    scoreBoard.textContent = score

    lives = 50
    livesboard.textContent = lives

    timeUp = false

    secondScreen.classList.add('hide')//Hide the secondScreen when the time is end.
    // Initializing music
    gameTimer = setTimeout(() => {//Setting my timeout when my time is finish.
      timeUp = true
      gameOver('YOU RAN OUT OF LIVES!!!  ' + 'Your score is: ' + score)
    }, 10000000)
  }

  //When btnStart is click I activate my class start.
  btnStart.addEventListener('click', start)

  function gameOver(message){
    // stop EVERYTHING...
    squares[playerIndex].classList.remove('player')
    document.removeEventListener('keydown', keydownHandler)
    showFinalScore.classList.add('show')
    secondScreen.classList.remove('hide')//The time is end when the timeup = true and remove my secondScreen.
    clearInterval(alienBombInterval)
    clearInterval(alienMoveInterval)
    clearInterval(gameTimer)
    gameTimer = null
    alienBombInterval = null
    showFinalScore.textContent = message
  }

  //Function for dropping bombs
  function dropBomb(bombIndex) {
    let missilesIndex = bombIndex + width
    let missile = squares[missilesIndex]
    const missilesInterval = setInterval(() => {
      if (missile) missile.classList.remove('bomb')
      if (missilesIndex + width >= width**2) clearInterval(missilesInterval)
      else if (missile) {
        missilesIndex += width
        missile = squares[missilesIndex]
        squares[missilesIndex].classList.add('bomb')
      }
    }, 150)
  }

  //Player and Bomb collision
  function collision() {
    const collisionInterval = setInterval(() => {
      const currentPlayer = squares[playerIndex]
      if (currentPlayer.classList.contains('bomb')) {
        currentPlayer.classList.remove('bomb')

        if (lives > 0) {
          lives--
          livesboard.textContent = lives
        }
        if (lives === 0) {
          gameOver('YOU RAN OUT OF LIVES!!!  ' + 'Your score is: ' + score)
          clearInterval(collisionInterval)
        }
      }
    }, 100)
  }
})
