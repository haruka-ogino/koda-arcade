document.addEventListener('DOMContentLoaded', createArr)

function createArr() {
  const images = []

  for (let i = 0; i < 15; i++) {
    const number = i + 1
    let element
    if (i < 9) {
      element = `00${number}`
    } else {
      element = `0${number}`
    }
    images.push(element)
  }

  shuffleImgs(images)
}

function shuffleImgs(imagesArray) {
  // knuth shuffle
  for (let i = imagesArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]]
  }
  displayImgs(imagesArray)
}

function displayImgs(images) {
  const imageContainer = document.getElementsByClassName('jigsaw-pieces')[0]
  const boardContainer = document.getElementsByClassName('jigsaw-board')[0]

  for (let i = 0; i < images.length; i++) {
    const blankImg = document.createElement('img')
    blankImg.src = `../public/jigsaw-sootsprites/image_part_090.png`
    blankImg.alt = 'puzzle piece on board'
    blankImg.className = 'jigsaw-piece'
    boardContainer.appendChild(blankImg)

    const img = document.createElement('img')
    img.src = `../public/jigsaw-sootsprites/image_part_${images[i]}.png`
    img.alt = 'puzzle piece'
    img.className = 'jigsaw-piece'
    img.width = 200
    imageContainer.appendChild(img)
  }

  bindPiecesListeners()
  bindBoardListeners()
}

function bindPiecesListeners() {
  const imageContainer =
    document.getElementsByClassName('jigsaw-pieces')[0].children

  for (let i = 0; i < imageContainer.length; i++) {
    imageContainer[i].addEventListener('click', function (evt) {
      handlePiecesClick(evt)
    })
  }
}

let clicked = null

function handlePiecesClick(evt) {
  clicked = evt.target
}

function bindBoardListeners() {
  const board = document.getElementsByClassName('jigsaw-board')[0].children

  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', function (evt) {
      if (evt.target.src.includes('090')) {
        placePiece(evt)
      } else {
        removePiece(evt)
      }
    })
  }
}

function placePiece(evt) {
  let clickedElement = evt.target

  clickedElement.src = `../public/jigsaw-sootsprites/${clicked.src
    .split('/')
    .pop()}`
  clicked.style.visibility = 'hidden'
  checkWin()

  resetClicked()
}

function removePiece(evt) {
  const imageContainer =
    document.getElementsByClassName('jigsaw-pieces')[0].children

  for (let i = 0; i < imageContainer.length; i++) {
    if (imageContainer[i].src === evt.target.src) {
      imageContainer[i].style.visibility = 'visible'
      position = i
      console.log(i)
      evt.target.src = `../public/jigsaw-sootsprites/image_part_090.png`
    }
  }
}

function resetClicked() {
  clicked = null
}

function checkWin() {
  const imageContainer =
    document.getElementsByClassName('jigsaw-board')[0].children
  let winState = true
  for (let i = 0; i < imageContainer.length; i++) {
    if (i <= 8) {
      if (!imageContainer[i].src.includes(`00${i + 1}`)) {
        console.log('not a win')
        winState = false
        break
      }
    } else if (i > 8) {
      if (!imageContainer[i].src.includes(`0${i + 1}`)) {
        console.log('not a win')
        winState = false
        break
      }
    }
  }
}

function displayAnswer() {
  const bodyContainer = document.getElementsByTagName('body')

  const img = document.createElement('img')
  img.src = '../public/jigsaw-sootsprites/soots-solution-easy.jpeg'
  img.alt = 'jigsaw puzzle answer'
  img.className = 'answer'

  bodyContainer.appendChild(img)
}
