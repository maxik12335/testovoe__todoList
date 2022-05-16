// Список курсов
let courses = [
    { name: "Courses in England", prices: 100 },
    { name: "Courses in Germany", prices: 500 },
    { name: "Courses in Italy", prices: 100 },
    { name: "Courses in Russia", prices: 400 },
    { name: "Courses in China", prices: 250 },
    { name: "Courses in USA", prices: 200 },
    { name: "Courses in Kazakhstan", prices: 324 },

];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// render
const list = document.querySelector('.list'),
    listItem = document.querySelectorAll('.list__item')

function renderList(arr) {
    arr.forEach(item => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `<span>${item.name}</span><span>${item.prices} </span>`
        listItem.classList.add('list__item')
        list.append(listItem)
    })
}

renderList(courses)

// filter

// filter__BUTTONS ----

// first
function rednerListFilterOne() {
    const newArr = courses.filter(item => {
        console.log(item.prices < 300)
        return item.prices < 300
    })

    renderList(newArr)
}

const firstFilter = document.querySelector('.filter__one')
firstFilter.addEventListener('click', () => {
    list.innerHTML = ''
    rednerListFilterOne()
})

//second

function rednerListFiltertwo() {
    const newArr = courses.filter(item => {
        console.log(item.prices >= 300 && item.prices < 500)
        return (item.prices >= 300 && item.prices < 500)
    })

    renderList(newArr)
}

const secondFilter = document.querySelector('.filter__two')
secondFilter.addEventListener('click', () => {
    list.innerHTML = ''
    rednerListFiltertwo()
})

//third

function rednerListFilterthree() {
    const newArr = courses.filter(item => {
        return item.prices >= 500
    })

    renderList(newArr)
}

const thirdFilter = document.querySelector('.filter__three')
thirdFilter.addEventListener('click', () => {
    list.innerHTML = ''
    rednerListFilterthree()
})

// filter__INPUT

const inputSearch = document.querySelector('.input__search')
inputSearch.addEventListener('input', (e) => {
    list.innerHTML = ''
    console.log(e.target.value)
    const newArr = courses.filter(item => {
        return !item.name.indexOf(e.target.value)
    })

    renderList(newArr)
    if (e.target.value === '') {
        list.innerHTML = ''
        renderList(courses)
    }
})