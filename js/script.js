const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes')


function clock() {

    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30

    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`

    // innerHTML - это свойство, которое позволяет получить или изменить содержимое HTML-элемента.

    hoursNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()

    // ! рекурсия - функция вызывает саму себя

    setTimeout(() => {
        clock()
    }, 1000);
}


clock()

// setTimeout(() => {
//     console.log('hello');
// }, 5000);


// setInterval(() => {
//     console.log('hello');
// }, 2000)

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem')

// console.log(tabsItem);
// console.log(tabsContentItem);

tabsItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeAndAddActiveClass(item, tabsItem)
        removeAndAddActiveClass(tabsContentItem[i], tabsContentItem)
    })
})

function removeAndAddActiveClass(element, arr) {
    arr.forEach(item => {
        item.classList.remove('active')
    })
    element.classList.add('active')
}



const btnState = document.querySelector('.stopwatch__btn'),
    stopwatch__hours = document.querySelector('.stopwatch__hours'),
    stopwatch__minutes = document.querySelector('.stopwatch__minutes'),
    stopwatch__seconds = document.querySelector('.stopwatch__seconds'),
    tabsLink = document.querySelector('.tabsLink__span')

let stpwsec = 0
let stpwmin = 0
let stpwhour = 0

function stopwatch() {
    stpwsec++

    if (stpwsec == 60) {    
        stpwsec = 0
        stpwmin++
        if (stpwmin == 60) {
            stpwmin = 0
            stpwhour++
        }
    }
    stopwatch__seconds.innerHTML = stpwsec
    stopwatch__minutes.innerHTML = stpwmin
    stopwatch__hours.innerHTML = stpwhour

}

function startStop(state) {
    if (state == 'active') {
        setInterval(() => {
            stopwatch()
        }, 1000)
    }
    else if (state == 'stop') {
        clearInterval(() => {
            stopwatch()
        }, 1000)
    }
}

btnState.addEventListener('click', () => {
    if (btnState.innerHTML == 'start') {
        btnState.innerHTML = 'stop'
        tabsLink.classList.add('active')
        startStop('active')
    }
    else if (btnState.innerHTML == 'stop') {
        btnState.innerHTML = 'reset'
        tabsLink.classList.remove('active')
        tabsLink.classList.add('active_clear')
        startStop('stop')
    }
    else {
        btnState.innerHTML = 'start'
        tabsLink.classList.remove('active_clear')
    }
})

