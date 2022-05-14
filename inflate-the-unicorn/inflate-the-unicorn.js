// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')
var currentUnicorn = 0

for (let i = 0; i < unicorns.length; i++) {
  console.log(unicorns)
  unicorns[i].onclick = function () {
    console.log('clicked')
    if (currentUnicorn == 0) {
      unicorns[0].src = './images/unicorn-1.png'
      currentUnicorn = 1
    } else if (currentUnicorn == 1) {
      unicorns[1].src = './images/unicorn-2.png'
      currentUnicorn = 2
    } else if (currentUnicorn == 2) {
      unicorns[2].src = './images/unicorn-3.png'
      currentUnicorn = 3
    } else if (currentUnicorn == 3) alert('Unicorn Number 3 says thank you!')
  }
}
