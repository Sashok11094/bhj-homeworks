const dead = document.getElementById('dead')
const lost = document.getElementById('lost')
const holes = document.getElementsByClassName('hole')

let countDead = 0
let countLost = 0

for (let i = 0; i < holes.length; i++) {
  holes[i].addEventListener('click', function() {

    if(this.classList.contains('hole_has-mole')) {
      countDead++
      dead.textContent = countDead
      
      if (countDead === 10) {
        alert ('Победа! Вы поймали 10 кротов!')
        resetGame()
      }
    } else {
      countLost++
      lost.textContent = countLost 
        if(countLost === 5 ) {
          alert ('Игра окончена! Вы промахнулись 5 раз!')
          resetGame()
        }
   }

  })
}

function resetGame () {
  countDead = 0
  countLost = 0
  lost.textContent = countLost 
  dead.textContent = countDead
}
