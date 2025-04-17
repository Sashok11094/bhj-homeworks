document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal')

  function checkReveals () {
    reveals.forEach(reveal => {
      const rect = reveal.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if(rect.top  < windowHeight) {
        reveal.classList.add('reveal_active')
      }
    })
  }

  checkReveals()
  window.addEventListener('scroll', checkReveals)


})