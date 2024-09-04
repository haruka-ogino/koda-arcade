// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

// line below grabs all the children from that classname:
document.getElementsByClassName('board')[0].children

function start() {
  const puzzlePieces = document.getElementsByClassName('board')[0].children
  return puzzlePieces
}

function bindEventListeners(dots) {
  for (let i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen(evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  evt.target.classList.remove('blue')
  evt.target.classList.remove('invisible')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
  evt.target.classList.toggle('blue')
  evt.target.classList.remove('green')
  evt.target.classList.remove('invisible')
  updateCounts()
}

// CREATE FUNCTION hide HERE
function hide(evt) {
  evt.target.classList.toggle('invisible')
  evt.target.classList.remove('green')
  evt.target.classList.remove('blue')
  updateCounts()
}

function updateCounts() {
  let totals = {
    blue: 0,
    green: 0,
    invisible: 0,
  }

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  totals.green = document.getElementsByClassName('green').length
  totals.blue = document.getElementsByClassName('blue').length
  totals.invisible = document.getElementsByClassName('invisible').length
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals(totals) {
  for (let key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
