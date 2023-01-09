const arr = [2, 4, -7, 6, 7, 9, -99, -3];


const newArr = arr.map(item => {
    return item * 2;
})

console.log(newArr)


// const newArray = arr.map(item => {
//     if (item < 0) {
//         return item * (-1)
//     } else if (item > 0) {
//         return item * 2
//     }
// })

// console.log(newArray);

// const arr = [2, 4, -7, 6, 7, 9, -99, -3, 24];

// let result = arr.find(item => {
//     return item > 2
// })

// console.log(result);


// const newArr = arr.filter(item => {
//     return item % 4 == 0
// })

// console.log(newArr);
// console.log(arr);

function findThreeLettersWord(arr) {
    let result = arr.find((item) => {
        return item.length === 3
    })
    console.log(result)
}


findThreeLettersWord(['Green', 'Red', 'Blue', 'Sar']);
