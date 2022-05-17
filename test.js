//  пуcть null = 2000, если [200, null] и null = 0, если [null, 200]

// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
// rename: requiredRange = pricesFilter
let pricesFilter1 = [null, 200];
let pricesFilter2 = [100, 350];
let pricesFilter3 = [200, null];

// courses add range
courses.forEach(item => {
    let start = item.prices[0] || 0
    let end = item.prices[1] || 2000
    item.prices = []
    for (let i = start; i <= end; i++) {
        item.prices.push(i)
    }
})

// filter add range
function filterArrTransfrom(filter) {
    let start = filter[0] || 0,
        end = filter[1] || 2000,
        filterArr = []

    for (let i = start; i <= end; i++) {
        filterArr.push(i)
    }

    filterArr.forEach((i, idx) => {
        filter[idx] = i
    })
}

filterArrTransfrom(pricesFilter1)
filterArrTransfrom(pricesFilter2)
filterArrTransfrom(pricesFilter3)

// add listener on buttons
const buttonsFilter = document.querySelectorAll('.button-filter')

function buttonFilter(buttonFilter, filter, filterCount) {
    buttonFilter.addEventListener('click', () => {
        let newArr = []
        courses.filter((item, idx) => {
            for (let i = filter[0]; i <= filter[filter.length - 1]; i++) {
                if (item.prices.indexOf(filter[i]) > -1) {
                    newArr.push(item)
                    return
                }
            }
        })
        console.log(newArr, `filter ${filterCount}`)
    })
}

buttonFilter(buttonsFilter[0], pricesFilter1, 1)
buttonFilter(buttonsFilter[1], pricesFilter2, 2)
buttonFilter(buttonsFilter[2], pricesFilter3, 3)
