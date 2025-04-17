document.addEventListener('DOMContentLoaded', () =>{
  const book = document.getElementById('book')
  const fontSizes = document.querySelectorAll('.font-size')

  fontSizes.forEach(size => {
    size.addEventListener('click', (e) => {
      e.preventDefault()

      fontSizes.forEach(btn => {
        btn.classList.remove('font-size_active')
      })

      size.classList.add('font-size_active')

      book.classList.remove('book_fs-big', 'book_fs-small')

      const fontSize = size.dataset.size
      if (fontSize) {
        book.classList.add(`book_fs-${fontSize}`)
      }

    })

  })

})