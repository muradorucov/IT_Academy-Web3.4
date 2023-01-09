// const arr = [1,2,3,4,6]
// console.log(arr);
// arr.push([2,4,5])


// console.log(arr);

// const users = ['Murad']
// console.log(users);

// let newUser = prompt("")


// users.push(newUser)

// console.log(users);



// const arr = ['Murad', 'Kazim', 'Cabbar']
// console.log(arr);

// let removeUser = arr.pop()
// arr.pop()

// console.log(removeUser);
// console.log(arr);


// const arr = ['Murad', 'Kazim', 'Cabbar']
// console.log(arr);
// let elem = arr.shift()
// console.log(elem);

// const arr = ['Murad', 'Kazim', 'Cabbar']
// console.log(arr.unshift("HesenAga"));


// const list = ["Salam","Hell","Hi"]
// let str = list.join(" ve ")
// console.log(str);



// let str = "Hello World Dunya";

// let arr = str.split()
// console.log(arr);



// const nameParts = ['John', 'Jonah', 'Jameson'];
// let first = nameParts[0]
// let second = nameParts[1]
// let three = nameParts[2]

// console.log(first);
// console.log(second);
// console.log(three);


// const nameParts = ['John', 'Jonah', 'Jameson', "Semender"];

// const [first, ...others] = nameParts

// // console.log(first);
// // // console.log(second);

// let arrrr = {...others}
// console.log(others);
// console.log(arrrr);


const nameParts = [1, 4, 5, 6];
// const newArr = nameParts;
// // // newArr[0] = 5

const newArr = [45,56,"Emil",99,...nameParts,45,68,"Heybetov",34]

const copyaninCopyasi = [...newArr,"Emil ile "]
// newArr.push("Murad")

console.log(nameParts);
console.log(newArr);
console.log(copyaninCopyasi);

// let max = Math.max(...nameParts)

// console.log(max);