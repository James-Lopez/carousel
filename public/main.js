const images = data =>
  data.map(item => ({
    id: item._id,
    src: item.image
  }))

fetch('/carousel')
  .then(res => res.json())
  .then(data => images(data))
  .then(items => console.log(items))
