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

// event listener mouse events:
// [single piece position].addEventListener([mouse event], fn call)
// mouse events:
// contextmenu
// click
// dblclick
// fn call is what you want to happen after the mouse event is experienced by the single piece position

// line below adds class
// evt.target.classList.toggle([classname])
// line below removes class
// evt.target.classList.remove([classname])

// line below counts
// document.getElementsByClassName([classname]).length
