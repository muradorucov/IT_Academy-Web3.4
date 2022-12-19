// let world = " Dunya"
// let world2 = "Mars"



// myFunction(world, world2)

// function myFunction(b, a) {
//     console.log(`Hello ${b},${a}`);
// }

// let name = "Murad";
// console.log(name);

// function getNameChange() {
//     let surename = "Amil"
//     console.log(a);



//     function getFunc() {
//         // let a = 8
//         surename = "Orucov"
//     }
// }


// getNameChange()

// console.log(surename);




// function getUserName() {
//     let userName = prompt("Enter your name:")
//     console.log(`${userName} is a JS Developer`);
// }

// getUserName()

// let balans = 3500;
// let money = prompt();

// function getShowBalans(param) {
//     balans -= param
//     alert(balans)
// }


// getShowBalans(money)

// function getName(param){
//     console.log(`${param} is active now`);
// }


// getName("Murad")
// getName("Emil")
// getName("Haci")



let data = prompt("4,5,+ bu formatda daxil edin!")//4,5,/

dataArr = data.split(",")// ["4","5","/"]
function calc(a, b, c) {
    switch (c) {
        case "+":
            alert(a + b);
            break;
        case "-":
            alert(a - b);
            break;
        case "*":
            alert(a * b)
            break;
        case "/":
            alert(a / b)
            break;
        default:
            alert("Yanliş dəyər")
    }
}

calc(+dataArr[0], +dataArr[1], dataArr[2])