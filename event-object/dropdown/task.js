const dropdownList = document.querySelectorAll('.dropdown')

dropdownList.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value')
    const list = dropdown.querySelector('.dropdown__list')
    const links = dropdown.querySelectorAll('.dropdown__link')

    value.addEventListener('click', (e) => {
      e.preventDefault()
      list.classList.toggle('dropdown__list_active')
    })

    links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default link behavior
          value.textContent = link.textContent.trim()
          list.classList.remove('dropdown__list_active')
      })
    })
});
