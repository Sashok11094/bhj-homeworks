const counter = document.getElementById('clicker__counter')
const image = document.getElementById('cookie')
let clickCount = 0

image.onclick = function () { 
  clickCount++
  counter.textContent = clickCount
    if(image.width === 200) {
      image.width = 180
      image.height = 180
    } else {
      image.width = 200
      image.height = 200
    }
  
}
  
