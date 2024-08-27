// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

// line below grabs all the children from that classname:
// document.getElementsByClassName('board')[0].children

function start() {
  const puzzlePieces = document.getElementsByClassName('board')[0].children
  bindEventListeners(puzzlePieces)
}

// event listener mouse events:
// [single piece position].addEventListener([mouse event], fn call)
// mouse events:
// contextmenu
// click
// dblclick
// fn call is what you want to happen after the mouse event is experienced by the single piece position

function bindEventListeners(pieces) {
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].addEventListener('click', handleClick)
  }
}

let firstClick
let secondClick

// toggle means if the class is there, remove it, otherwise, add it
function handleClick(evt) {
  evt.preventDefault()
  const clickedPieces = document.getElementsByClassName('clicked')[0]
  if (!clickedPieces) {
    evt.target.classList.toggle('clicked')
    firstClick = evt.srcElement.src
    console.log('first click: ' + firstClick)
  } else if (clickedPieces && clickedElement.children.length === 1) {
    evt.target.classList.toggle('clicked')
    secondClick = evt.srcElement.src
    console.log('second click: ' + secondClick)
    swapImgs()
  } else if (clickedPieces && clickedElement.children.length > 2) {
    return
  }
}

// line below adds class
// evt.target.classList.toggle([classname])
// line below removes class
// evt.target.classList.remove([classname])

// line below counts
// document.getElementsByClassName([classname]).length
