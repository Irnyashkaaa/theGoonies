

let green = document.getElementById('firstBlockGreen')
let firstBlockBackground = document.getElementById('firstBlockBackground')
let firstBlockText = document.getElementById('firstBlockText')
let hoverTextBlock = document.getElementById('hoverTextBlock')
let hoverTextBlockTitle = document.getElementById('hoverTextBlockTitle')
let hoverTextBlockContent = document.getElementById('hoverTextBlockContent')
let firstBlockLine = document.getElementById('firstBlockLine')


let bigElement = document.getElementById('bigElement')
let coin1 = document.getElementById('coin1')
let coin2 = document.getElementById('coin2')
let coin3 = document.getElementById('coin3')
let coin4 = document.getElementById('coin4')


let scare = document.getElementById('scare')
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY
    green.style.width = 100 + scrollTop + '%'
    green.style.left = -7 * scrollTop + 'px'
    green.style.top = -3 * scrollTop + 'px'

    firstBlockText.style.opacity = 1 - scrollTop / 300
    firstBlockBackground.style.opacity = 1 - scrollTop / 500

    hoverTextBlock.style.opacity = scrollTop / 200
    if (scrollTop > 3300) {
        scare.style.transform = `scale(${scrollTop * 0.001})`
        scare.style.opacity = 0.3 * (scrollTop / 5000)
    }else if (scrollTop >= 1305 && (scrollTop - 1400) < 850) {

        coin1.style.transform = 'scale(0.4) rotate(' + scrollTop / 200 % Math.PI + 'rad)';
        coin1.style.top = scrollTop - 1400 + 'px'

        coin2.style.transform = 'scale(0.5) rotate(' + -scrollTop / 200 % Math.PI + 'rad)'
        coin2.style.top = 1000 - scrollTop / 2.2 + 'px'

        coin3.style.transform = `scale(0.4) rotate(${scrollTop / 200 % Math.PI}rad)`
        coin3.style.top = scrollTop * 0.8 - 1100 + 'px'

        coin4.style.transform = `scale(0.6) rotate(${-scrollTop / 200 % Math.PI}rad)`
        coin4.style.top = 1100 - scrollTop / 2.5 + 'px'

        bigElement.style.transform = `scale(0.4) rotate(${scrollTop / 1000 - Math.PI / 2}rad)`

    } else if (scrollTop >= 450) {
        hoverTextBlock.style.opacity = 1 - scrollTop / 700
    } else if (scrollTop >= 400) {
        green.style.display = `none`
        firstBlockLine.style.height = scrollTop / 10 * 3 + 'px'
    } else {
        green.style.display = `block`
    }


    

})
