let btn = document.querySelector('.coffe')
const nav = document.querySelector('.nav')
const topNav = nav.offsetTop

window.onscroll = function() {
  fixaTop()
}

function fixaTop() {
  if (window.pageYOffset >= topNav) {
    nav.classList.add('fixa')
  } else {
    nav.classList.remove('fixa')
    
  }
}

let c = (el) => document.querySelector(el)

window.onload = function () {
  if(btn.classList.contains('active')){
           coffe.map((item, index) => {

            let coffeIt = document.querySelector('.model-comtent .model-item').cloneNode(true)
            
            coffeIt.querySelector('.item-name').innerHTML = item.name
            coffeIt.querySelector('.item-info').innerHTML = item.info
            coffeIt.querySelector('.model-item-img img').src = item.img
            coffeIt.querySelector('.item-price').innerHTML = item.price
            
          coffeIt.style.opacity = 0
            c('.area').append(coffeIt)
            setTimeout(() => {
              coffeIt.style.transition = 'ease-in 0.5s'
            coffeIt.style.opacity = 1
            }, 200)
          })
  }
}

document.querySelectorAll('.nav a').forEach((item, index) => {
  
  item.addEventListener('click', (e) => {
    e.preventDefault()
    
    switch (index) {
      case 0:
        c('.area').innerHTML = ''
        c('.food').classList.remove('active')
        
        e.target.classList.add('active')
        coffe.map((item, index) => {
          
          let coffeItem = document.querySelector('.model-comtent .model-item').cloneNode(true)
          
          coffeItem.querySelector('.item-name').innerHTML = item.name
          coffeItem.querySelector('.item-info').innerHTML = item.info
          coffeItem.querySelector('.model-item-img img').src = item.img
          coffeItem.querySelector('.item-price').innerHTML = item.price
          
          coffeItem.style.opacity = 0
            c('.area').append(coffeItem)
            setTimeout(() => {
            coffeItem.style.transition = 'ease-in 0.5s'
            coffeItem.style.opacity = 1
            }, 200)
          })
          
        break;
      case 1:
        c('.area').innerHTML = ''
        c('.coffe').classList.remove('active')
        e.target.classList.add('active')
        food.map((item, index) => {
          let foodItem = document.querySelector('.model-comtent .model-item').cloneNode(true)
          
          foodItem.querySelector('.item-name').innerHTML = item.name
          foodItem.querySelector('.item-info').innerHTML = item.info
          foodItem.querySelector('.model-item-img img').src = item.img
          foodItem.querySelector('.item-price').innerHTML = item.price
          
          foodItem.style.opacity = 0
            c('.area').append(foodItem)
            setTimeout(() => {
            foodItem.style.transition = 'ease-in 0.5s'
            foodItem.style.opacity = 1
            }, 200)
          })
          
        break;
      default:
    }
    
  })
})
