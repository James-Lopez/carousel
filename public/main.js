async function slides() {
  const response = await fetch('/carousel')
  return await response.json()
}

const carousel = {
  slides: null,
  current: 0
}

slides().then(documents => (carousel.slides = documents))

setInterval(function() {
  document
    .querySelector('#carousel')
    .setAttribute('src', `${carousel.slides[carousel.current].image}`)

  if (carousel.current < carousel.slides.length - 1) {
    carousel.current++
  } else {
    carousel.current = 1
  }
}, 3500)
