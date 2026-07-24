// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

// }

// let customer1 = new Customer("John Doe", 30, "123 Main St");
// console.log(customer1); 

// let customer2 ={
//     name: "Jane Smith",
//     age: 25,
//     address: "456 Elm St",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 150
//                 },{
//                     id: 2,
//                     name: "variant2",
//                     price: 200
//                 },{
//                     id: 3,
//                     name: "variant3",
//                     price: 250
//                 }
//             ]
//         },{
//             id: 2,
//             name: "item2",
//             price: 200
//         },{
//             id: 3,
//             name: "item3",
//             price: 300
//         }
//     ],
//     father: {
//         name: "Robert Smith",
//         age: 55,
//         address: "789 Oak St"
//     }
// }
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items);
// console.log(customer2.father);
// console.log(customer2.items[0].name);
// console.log(customer2.items[0].variants[1].name);
// console.log(customer2.items[0].variants[1].id);
// console.log(customer2.items[0].variants[1].price);
// console.log(customer2.items[0].variants[2].name);
// console.log(customer2.items[0].variants[2].id);
// console.log(customer2.items[0].variants[2].price);



// DOM Manipulation

// document.write("<h2>DOM Manipulation</h2>");

console.log(document.title);

let heading = document.getElementById("heading");

// heading.innerText = "Sanuda";

// console.log(heading.innerText);

// function changeHeading(){
//     heading.innerText = "Sanuda";
//     console.log("Clicked");

// }

// let number = 0;
// function increaseValue() {
//     heading.innerText = "Sharada"+(++number);
//     console.log("Clicked");

// }

// function decreaseValue() {
//     heading.innerText = "Sharada"+(--number);
// }


function changeHeading() {

    let txtOutput = document.getElementById("input text");
    console.log(txtOutput.value);
    let heading = document.getElementById("heading");
    heading.innerText = txtOutput.value;
}


function btnSumOnAction() {
    let input1 = document.getElementById("txtInput01");
    let input2 = document.getElementById("txtInput02");

    let sum = parseInt(input1.value) + parseInt(input2.value);

    document.getElementById("heading").innerText = "SUM :"+sum;

    console.log(input1.value);
    console.log(input2.value);
    console.log(sum);
}