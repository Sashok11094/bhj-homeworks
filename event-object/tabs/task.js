document.addEventListener('DOMContentLoaded', () =>{
  const tabs = document.querySelector('.tabs')
  const tabButtons = tabs.querySelectorAll('.tab')
  const tabContents = tabs.querySelectorAll('.tab__content')

  tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabButtons.forEach(button => {
        button.classList.remove('tab_active')
      })

      tabContents.forEach(content => {
        content.classList.remove('tab__content_active')
      })

      tab.classList.add('tab_active')
      tabContents[index].classList.add('tab__content_active')
    })
  })
}) 