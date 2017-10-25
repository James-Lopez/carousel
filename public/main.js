async function slides() {
  const response = await fetch('/carousel')
  return await response.json()
}

const carousel = {
  slides: null,
  current: 0
}

function switchSlide() {
  document
    .querySelector('#carousel')
    .setAttribute('src', `${carousel.slides[carousel.current].image}`)
}

slides().then(documents => (carousel.slides = documents))

setInterval(() => {
  switchSlide()
  if (0 < carousel.current < carousel.slides.length - 1) {
    carousel.current++
  } else if (carousel.current > carousel.slides.length - 1) {
    carousel.current = 1
  } else if (carousel.current < 0) {
    carousel.current = carousel.slides.length - 1
  }
}, 3000)

document.querySelector('.left').addEventListener('click', () => {
  carousel.current--
  console.log('left, now on #' + carousel.current)
  switchSlide()
})

document.querySelector('.right').addEventListener('click', () => {
  carousel.current++
  console.log('right, now on #' + carousel.current)
  switchSlide()
})
