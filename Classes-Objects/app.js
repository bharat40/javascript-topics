// const student = {
//     fullName: "Bharat Dhiman",
//     marks: 9.5,
//     printMarks: function () {
//         console.log("Marks :", this.marks);
//     }
// }

// object->is an entity having state and behaviour(properties and method)

// const employee = {
//     calTax() {
//         console.log("tax rate is 10%");
//     }
// };

// const arjun = {
//     salary: 50000,
//     calTax() {
//         console.log("tax rate is 20%")
//     }
// };

// arjun.__proto__ = employee;


// Classes

class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrandName(brand) {
        this.brandName = brand;
    }
};

let fortuner = new ToyotaCar();
fortuner.setBrandName("fortuner");
let lexus = new ToyotaCar();
lexus.setBrandName("lexus");