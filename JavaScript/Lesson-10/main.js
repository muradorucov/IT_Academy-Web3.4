let startValue = 0;
let endValue = 1000;
let step = 1;


// function customLoop() {
//     if (startValue <= endValue) {
//         console.log(startValue);
//         startValue += step
//         customLoop()
//     }

// }

// customLoop()


// while (startValue < endValue) {
//     startValue += 2
//     console.log(startValue);
// }

// let num = 6

// while (num > 3) {
//     num--
//     console.log(num);
// }

// let num = +prompt();
// while (num < 100) {
//     console.log(num);
//     num += 7

// }

// let i = 0

// while (i < 100) {
//     console.log(i);
//     i++
// }

// let i = 1;
// let n = +prompt("eded daxil edin")

// while(i<=n){
//     console.log(`${i}-ci >>>>>>>>> I know how to use cycles`);
//     i++
// }


let start = 10;
let sum = 0;
while (start < 100) {
    start++
    if (start % 7 == 0) {
        sum += start
        console.log(`start=${start} olanda sum=${sum} olur`);
    }

}


console.log(sum);
