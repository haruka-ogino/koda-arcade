document.addEventListener('DOMContentLoaded', startGame)

function startGame() {
  const answer = 'CAMEL'

  let answerArr = []

  for (let i = 0; i < answer.length; i++) {
    const element = { letter: answer[i], show: false }
    answerArr.push(element)
  }

  displayAlphabet()
}

function displayAlphabet() {
  const letters = [
    { letter: 'A', show: true },
    { letter: 'B', show: true },
    { letter: 'C', show: true },
    { letter: 'D', show: true },
    { letter: 'E', show: true },
    { letter: 'F', show: true },
    { letter: 'G', show: true },
    { letter: 'H', show: true },
    { letter: 'I', show: true },
    { letter: 'J', show: true },
    { letter: 'K', show: true },
    { letter: 'L', show: true },
    { letter: 'M', show: true },
    { letter: 'N', show: true },
    { letter: 'O', show: true },
    { letter: 'P', show: true },
    { letter: 'Q', show: true },
    { letter: 'R', show: true },
    { letter: 'S', show: true },
    { letter: 'T', show: true },
    { letter: 'U', show: true },
    { letter: 'V', show: true },
    { letter: 'W', show: true },
    { letter: 'X', show: true },
    { letter: 'Y', show: true },
    { letter: 'Z', show: true },
  ]
  console.log('fn called!')

  const alphabetBoard = document.getElementsByClassName('alphabet-board')[0]

  for (let i = 0; i < letters.length; i++) {
    let alphabetLetter = document.createElement('button')
    alphabetLetter.textContent = letters[i].letter
    alphabetLetter.appendChild(document.createElement('span'))
    alphabetBoard.appendChild(alphabetLetter)
    alphabetLetter.addEventListener('click', function (evt) {
      handleLetterClick(evt)
    })
  }
}

function handleLetterClick(evt) {
  console.log(evt.target.textContent + ' clicked')

  // evt.target.classList.add('strike-through')
  if (evt.target.firstElementChild) {
    evt.target.firstElementChild.classList.add('strike-through')

    console.log(evt.target.firstElementChild.classList)
  }
}
