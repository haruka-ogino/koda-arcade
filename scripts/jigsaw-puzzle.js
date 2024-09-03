document.addEventListener('DOMContentLoaded', start)

function start() {
  const imageContainer = document.getElementsByClassName('jigsaw-pieces')[0]

  const images = [
    '001',
    '002',
    '003',
    '004',
    '005',
    '006',
    '007',
    '008',
    '009',
    '010',
    '011',
    '012',
    '013',
    '014',
    '015',
  ]
  // randomise fn to be built
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img')
    img.src = `../public/jigsaw-sootsprites/image_part_${images[i]}.png`
    img.alt = 'puzzle piece'
    img.width = 200
    imageContainer.appendChild(img)
  }
}
