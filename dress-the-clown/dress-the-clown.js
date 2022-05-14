// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
document.onkeydown = checkKey
function checkKey(e) {
  e = e || window.event
  console.log(e)
  if (e.keyCode == '38') {
    changeClothes(-1)
  } else if (e.keyCode == '40') {
    changeClothes(1)
  } else if (e.keyCode == '37') {
    changeClown(-1)
  } else if (e.keyCode == '39') {
    changeClown(1)
  }
}
let headChange = document.getElementById('head')
let bodyChange = document.getElementById('body')
let shoesChange = document.getElementById('shoes')

var headIndex = 0
var bodyIndex = 0
var shoesIndex = 0

var clothingIndex = 0

function changeClown(shift) {
  if (clothingIndex == 0) {
    headIndex += shift
    if (headIndex < 0) headIndex = 5
    if (headIndex > 5) headIndex = 0

    headChange.src = './images/head' + headIndex + '.png'
  }
  if (clothingIndex == 1) {
    bodyIndex += shift
    if (bodyIndex < 0) bodyIndex = 5
    if (bodyIndex > 5) bodyIndex = 0

    bodyChange.src = './images/body' + bodyIndex + '.png'
  }
  if (clothingIndex == 2) {
    shoesIndex += shift
    if (shoesIndex < 0) shoesIndex = 5
    if (shoesIndex > 5) shoesIndex = 0

    shoesChange.src = './images/shoes' + shoesIndex + '.png'
  }
}

function changeClothes(shift) {
  clothingIndex += shift
  if (clothingIndex < 0) clothingIndex = 2
  if (clothingIndex > 2) clothingIndex = 0
}
