class Customer{
    name;
    age;
    address;

    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

}

let customer1 = new Customer("John Doe", 30, "123 Main St");
console.log(customer1); 