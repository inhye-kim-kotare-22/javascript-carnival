// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let squares = document.getElementsByTagName('td')
showMole()
function showMole() {
  let randomPosition = squares[Math.floor(Math.random() * 25)]
  console.log(randomPosition)
  let mole = document.createElement('img')
  mole.src = 'mole.PNG'
  randomPosition.appendChild(mole)
  mole.id = 'mole'
  mole.onclick = clickWhack
}

function clickWhack(e) {
  let mole = e.target
  console.log('click')
  mole.remove()
  showMole()
  var audio = new Audio('./whack-audio.wav')
  audio.play()
}
