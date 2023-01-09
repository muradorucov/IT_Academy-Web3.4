// const car = {
//     id: "24",
//     marka: "BMW",
//     model: "M5",
//     color: "Blue",
//     speedMax: 310,
//     img: "http://hmg-prod.s3.amazonaws.com/images/2021-bmw-m5-competition-1146-1625696565.jpg",
//     changeColor: function () {
//         console.log(this.color);
//     },
//     changeModel(param) {
//         return param
//     }
// }
// console.log(car);

// car.changeColor();
// console.log(car.changeModel("X6"));

// console.log(car);





const car = {
    id: 34,
    marka: "Bmw",
    model: 'M5',
    color: "Black",
    maxSpeed: 310,
    getSayHello() {
        console.log(this.model);
    },
    getChangeColor(param) {
        this.color = param
    },
    getChangeMaxSpeed: function (param) {
        return this.maxSpeed += param
    },
    getSetModel: () => {
        console.log(car.model)
    }
}


console.log(car)

car.getChangeColor('Red');
console.log(car.getChangeMaxSpeed(45))



console.log(car)



// function Person(name, surename, age) {
//     this.name = name;
//     this.surename = surename;
//     this.age = age;
// }





// const user1 = new Person('Murad','Orucov',45)


// console.log(user1);