document.addEventListener('DOMContentLoaded', () => {
const spider = document.querySelector('.character')
let bottom = 0
let gravity = 0.9
let isJumping = false
let isGoingLeft = false
let isGoingRight = false
let left = 0
let rightTimerId
let leftTimerId

function jump() {
    if (isJumping) return
    spider.classList.remove('character-slide')
    spider.classList.add('character')
    let timerUpId = setInterval( function () {
    if (bottom > 250) {
        clearInterval(timerUpId)
        let timerDownId = setInterval( function () {
            if (bottom < 0) {
                clearInterval(timerDownId)
                isJumping = false
            }
            bottom -=5
            spider.style.bottom = bottom + 'px'
        }, 20) 
    }
    
    isJumping = true
    bottom += 30
    bottom = bottom * gravity
    spider.style.bottom = bottom + 'px'
    }, 20)
}

function slideLeft () {
    spider.classList.add('character-slide')
    spider.classList.remove('character')
    if (isGoingRight) {
        clearInterval(rightTimerId)
        isGoingRight = false
    }
    isGoingLeft = true
        leftTimerId = setInterval( function () {
        left -= 5
        console.log('going left')
        spider.style.left = left + 'px'
    },20)
}

function slideRight () {
    spider.classList.add('character-slide')
    spider.classList.remove('character')
    if (isGoingLeft) {
        clearInterval(leftTimerId)
        isGoingLeft = false
    }
    isGoingRight = true
    rightTimerId = setInterval( function () {
        left += 5
        console.log('going right')
        spider.style.left = left + 'px'
    },20)
}

//assign functions to keycodes:
function control(e) {
    if (e.keyCode === 38) {
        jump()
    } else  if(e.keyCode === 37) {
        slideLeft() //if we press left
    } else if(e.keyCode === 39) {
        slideRight() //if we press right
    }
}
document.addEventListener('keydown', control)


})