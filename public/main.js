async function slides() {
  const response = await fetch('/carousel')
  return await response.json()
}

const carousel = {
  slides: null,
  current: 0
}

slides().then(documents => (carousel.slides = documents))

function switchSlide() {
  document
    .querySelector('#carousel')
    .setAttribute('src', `${carousel.slides[carousel.current].image}`)
}

setInterval(() => {
  if (carousel.current < carousel.slides.length - 1) {
    carousel.current++
  } else {
    carousel.current = 0
  }
  switchSlide()
  progress()
}, 3000)

document.querySelector('.left').addEventListener('click', () => {
  carousel.current--
  if (carousel.current < 0) {
    carousel.current = carousel.slides.length - 1
  }
  console.log('decrement, now on #' + carousel.current)
  switchSlide()
  progress()
})

document.querySelector('.right').addEventListener('click', () => {
  carousel.current++
  if (carousel.current > carousel.slides.length - 1) {
    carousel.current = 0
  }
  console.log('increment, now on #' + carousel.current)
  switchSlide()
  progress()
})

const indicator = document.querySelector('#indicator-container')

const progress = () => {
  const $indicators = carousel.slides.map((slide, index) => {
    const $indicator = document.createElement('div')

    if (index === carousel.current) {
      $indicator.className = 'indicator active'
    } else {
      $indicator.className = 'indicator inactive'
    }

    return $indicator
  })
  indicator.innerHTML = ''
  $indicators.reduce((parent, child) => {
    parent.appendChild(child)
    return parent
  }, indicator)
}
