let user={
    fullname:"abhishek ranjan",
    address: {
        city :"gurugram",
        state: "haryana"
    },
    mobileno: 1234567890,
    favcolour: ["black","white","blue"],
    demo: function(){
        return "demo function";
    }
}

console.log(user.fullname,user.address.city,user.mobileno,user.favcolour[1],user.demo());




Object methods

// Object.keys(variable name)

// console.log(Object.keys(user))

// console.log(Object.values(user))

// console.log(Object.entries(user));




const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

//  we can`t add a new key and value in pair but
//  we can change or update existing values

Object.freeze (car);

car.model = "Corolla";
car.colour = "black";
car.year = 2021;

console.log(car);



var date = new Date();
console.log(date);