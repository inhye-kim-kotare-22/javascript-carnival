// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

var currentUnicorn = [0, 0, 0]

function changeUnicorn(e) {
  let unicorn = e.target
  let unicornIndex
  if (unicorn.id == 'uni0') {
    unicornIndex = 0
  } else if (unicorn.id == 'uni1') {
    unicornIndex = 1
  } else if (unicorn.id == 'uni2') {
    unicornIndex = 2
  }
  if (currentUnicorn[unicornIndex] < 3) {
    currentUnicorn[unicornIndex]++
  }
  if (currentUnicorn[unicornIndex] == 3) {
    alert('Thank you unicorn ' + unicornIndex)
  }
  unicorn.src = './images/unicorn-' + currentUnicorn[unicornIndex] + '.png'
}

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = changeUnicorn
}
