// const list = [1, 2, 3, 47, 8, 9, 0]

// // function getListArray(elem, index,array) {
// //     console.log(`index = ${index} olanda element = ${elem} olur, array = ${array[0]}`);
// // }

// // let getListArray = item => console.log(item)

// list.forEach((item, index) => {
//     console.log(index)
// })

// function printNegatives(list) {
// function callBack(element, index, arr) {
//     if (element > 0) {
//         console.log(element);
//     }
// }
// let forEa = list.forEach(callBack);

// }

// printNegatives([2, 3, -2, 0, -1]);

let list = [2, 3, -2, 0, -1]

list.forEach(element => {
    if (element < 0) {
        console.log(element);
    }
});