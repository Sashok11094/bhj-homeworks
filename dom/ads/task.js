document.addEventListener('DOMContentLoaded', () => {
  const rotator = document.querySelector('.rotator')
  const rotatorCase = rotator.querySelectorAll('.rotator__case')
  let currentIndex = 0

  function rotateText() {
      rotatorCase[currentIndex].classList.remove('rotator__case_active')
      currentIndex = (currentIndex + 1) % rotatorCase.length
      
      const nextCase = rotatorCase[currentIndex]
      nextCase.classList.add('rotator__case_active')

      const speed = nextCase.dataset.speed ? parseInt(nextCase.dataset.speed) : 1000
      setTimeout(rotateText, speed)
  }

  const initialSpeed = rotatorCase[0].dataset.speed ? parseInt(rotatorCase[0].dataset.speed) : 1000
  setTimeout(rotateText, initialSpeed)
})