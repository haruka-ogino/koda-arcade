document.addEventListener('DOMContentLoaded', start)

function start() {
  // const images = [
  //   '001',
  //   '002',
  //   '003',
  //   '004',
  //   '005',
  //   '006',
  //   '007',
  //   '008',
  //   '009',
  //   '010',
  //   '011',
  //   '012',
  //   '013',
  //   '014',
  //   '015',
  // ]
  // const two = 2
  // const newNum = two.toString()
  // randomise fn to be built
  createArr()
}

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
    console.log(element)
    images.push(element)
  }

  displayImgs(images)
}

function displayImgs(images) {
  const imageContainer = document.getElementsByClassName('jigsaw-pieces')[0]

  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img')
    img.src = `../public/jigsaw-sootsprites/image_part_${images[i]}.png`
    img.alt = 'puzzle piece'
    img.width = 200
    imageContainer.appendChild(img)
  }
}
