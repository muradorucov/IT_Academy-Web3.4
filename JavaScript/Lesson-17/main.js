// const obj = {
//     isPremium : true,
//     list: ['uzunburun', {
//         game: 'Ps5'
//     },
//     {
//         game: 'Ps5'
//     },
//     {
//         game: 'Ps5'
//     },
//     {
//         game: 'Ps5'
//     },
//     {
//         game: 'Ps4'
//     }],
//     level: 14
// }

// console.log(obj.level);
// console.log(obj.list);
// const arr = [1, 2, 3, 55, 6]
// let arr2 = [45, 6, 8, 0]
// let arr3 = [455667, 6, 8, 0]
// arr2 = arr 

// arr2 = arr3
// console.log(arr2);

// const me = {
//     name: 'Murad Orujov',
//     gender: 'male',
//     birthDate: '09.35.2023'
// }
// me.bextiyar = "Bextiyar"

// console.log(Object.keys(me));

// Object.keys(me).forEach(item => console.log(me[item]))

// const newObj = {...me}
// console.log("new Obj",newObj);

// delete newObj.birthDate
// // me.bextiyar = "Bextiyar"

// console.log("new Obj",newObj);
// console.log("me",me);


// const arr = [1, 2, 3, 55, 6]


// const newObj = [...arr]

// console.log("me", me.ke);
// console.log('clone',newObj);


// const arr = [1, 2, 3, 55, 6]

// const [first, second, ...oth] = arr
// console.log('rest ilk versiya',oth);
// console.log('arr ilk versiya',arr);

// oth[0] = 5;

// console.log('rest ikinci versiya',oth);
// console.log('arr ikinci versiya',arr);

// const newArr = [...arr]



// me.level = "78"
// me.name = 'Qasim'
// delete me.birthDate

// console.log(me);
// console.log(me.birthDate);

'use strict';

const stockItem = {
    id : 10101,
    place : "4-cu sira",
    weight : "56kq",
    obj : {
        name : "book"
    }
}

const shopItem  = {...stockItem, price: "65 usd" }

delete shopItem.place

shopItem.obj.name = "CopyBook"

console.log(shopItem);