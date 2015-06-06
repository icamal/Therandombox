console.log("you shouldent be seeing this!")
console.log("bad boy! >:(")


var button = document.getElementById('button')

var vanish = document.getElementById('vanish')

var show = document.getElementById('show')

vanish.addEventListener('click', function (){
  document.getElementById('box').style.backgroundColor = 'transparent'
})

show.addEventListener('click', function (){
  document.getElementById('box').style.backgroundColor = randomColor()
})

button.addEventListener('click', function (){
  console .log('Battery critical!')
//alert('Battery Is Critical!')

document.body.style.backgroundColor = randomColor()
})

function randomColor() {
  var red = Math.floor(Math.random() * 255)
    var green = Math.floor(Math.random() * 255)
      var blue = Math.floor(Math.random() * 255)
  return 'rgb(' + red +', ' + green +', ' + blue +')'

}
