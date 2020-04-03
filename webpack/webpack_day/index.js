import a from './a'
import b from './b'
import pic from './img/timg.jpg'
import './index.css'

import axios from 'axios'

var img = new Image()
img.src = pic
img.className = "pic"
var root = document.getElementById('root')
root.appendChild(img)

// console.log(pic)

axios.get('/api/info').then((res) => {
  console.log(res)
})


// 既然webpack默认只认识js模块，非js模块该怎么办？
// loader
a()
b()

function lm () {
  console.log('welcome to lm')
}

lm()