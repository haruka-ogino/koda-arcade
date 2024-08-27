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
    pieces[i].addEventListener('click', function (evt) {
      handleClick(i, evt)
    })
  }
}

// toggle means if the class is there, remove it, otherwise, add it
function handleClick(i, evt) {
  // const clickedPieces = document.getElementsByClassName('clicked')[0]
  if (clickedOne[0] === 10) {
    evt.target.classList.toggle('clicked')
    clickedOne[0] = i
    clickedOne[1] = evt.srcElement.src
    console.log('first click:')
    console.log(clickedOne)
  } else if (clickedTwo[0] === 10) {
    // evt.target.classList.toggle('clicked')
    clickedTwo[0] = i
    clickedTwo[1] = evt.srcElement.src
    console.log('second click:')
    console.log(clickedTwo)
    swapImgs()
  } else {
    return
  }
}

function swapImgs() {
  const imgName1 = clickedOne[1].split('/').pop()
  const imgName2 = clickedTwo[1].split('/').pop()

  const img1 = document.querySelector(`img[src="public/${imgName1}"]`)
  const img2 = document.querySelector(`img[src="public/${imgName2}"]`)

  // console.log(img1.src)
  // console.log(img2)

  if (img1 && img2) {
    //   // Log the images to ensure they are correctly selected
    console.log('Before swap:', img1.src, img2.src)

    // Swap the src attributes
    img1.src = `public/${imgName2}`
    img2.src = `public/${imgName1}`

    console.log('After swap:', img1.src, img2.src)
    resetGame(imgName2)
  } else {
    console.log('One or both images not found.')
  }
}

function resetGame(imgName) {
  clickedOne[0] = 10
  clickedTwo[0] = 10
  clickedOne[1] = ''
  clickedTwo[1] = ''
  const img = document.querySelector(`img[src="public/${imgName}"]`)
  console.log(img)
  img.classList.remove('clicked')
}
const clickedOne = [10, '']
const clickedTwo = [10, '']

// line below adds class
// evt.target.classList.toggle([classname])
// line below removes class
// evt.target.classList.remove([classname])

// line below counts
// document.getElementsByClassName([classname]).length
