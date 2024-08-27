// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

const answerArr = ['00', '10', '20', '01', '11', '21', '02', '12']

function start() {
  const puzzlePieces = document.getElementsByClassName('board')[0].children
  bindEventListeners(puzzlePieces)
}

function bindEventListeners(pieces) {
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].addEventListener('click', function (evt) {
      checkSides(i, evt)
    })
  }
}

function checkSides(index, evt) {
  const clicked = evt.srcElement.src
  const puzzlePieces = document.getElementsByClassName('board')[0].children
  const currentArr = []
  for (let i = 0; i < puzzlePieces.length; i++) {
    let image = puzzlePieces[i].src.split('/').pop()
    currentArr.push(image)
  }

  let blankI

  if (
    (currentArr[index - 3] === 'blank.jpg') |
    (currentArr[index - 1] === 'blank.jpg') |
    (currentArr[index + 1] === 'blank.jpg') |
    (currentArr[index + 3] === 'blank.jpg')
  ) {
    console.log('will swap')
    swapPieces(clicked)
  }
}

function swapPieces(clicked) {
  const imgName = clicked.split('/').pop()
  console.log(imgName)
  const img1 = document.querySelector(`img[src="public/${imgName}"]`)
  const img2 = document.querySelector(`img[src="public/blank.jpg"]`)
  if (img1 && img2) {
    img1.src = `public/blank.jpg`
    img2.src = `public/${imgName}`
    checkWin()
  } else {
    console.log('One or both images not found.')
  }
}

function checkWin() {
  const puzzlePieces = document.getElementsByClassName('board')[0].children
  console.log(puzzlePieces)

  let winState = true
  for (let i = 0; i < puzzlePieces.length - 1; i++) {
    let image = puzzlePieces[i].src.split('/').pop()
    let answer = image.substring(0, image.lastIndexOf('.'))
    if (answerArr[i] !== answer) {
      winState = false
      break
    }
  }

  if (winState === true) {
    console.log('YOU WINNNN')
  } else {
    console.log('not a winnnn')
  }
}
