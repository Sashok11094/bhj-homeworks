const hasToollip = document.querySelectorAll('.has-tooltip')
console.log(hasToollip)
hasToollip.forEach( el => {
    el.addEventListener ('click', (e) => {
        e.preventDefault()
 

    const delTooltip = document.querySelector('.tooltip')
    if (delTooltip) {
        delTooltip.remove()
    }
   
    const newTooltip = document.createElement('div')
    newTooltip.className = 'tooltip tooltip_active'
    newTooltip.textContent = el.title
    
    const rect = el.getBoundingClientRect()

    newTooltip.style.left = rect.left + 'px'
    newTooltip.style.top = (rect.bottom + 10) + 'px'
    newTooltip.style.backgroundColor =('rgb(112, 112, 112)');

    document.body.appendChild(newTooltip)
    })
})

document.addEventListener('click', (e) => {
    if(!e.target.classList.contains('has-tooltip')) {
        const tooltip = document.querySelector('.tooltip')
        if(tooltip) {
            tooltip.remove()
        }
    }
})

window.addEventListener('scroll', () => {
    const tooltip = document.querySelector('.tooltip')
     if(tooltip) {
         tooltip.remove()
     }

})

