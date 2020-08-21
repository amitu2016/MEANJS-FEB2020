



class Person {

    constructor() {
        console.log("I am in Constructor");
    }

    getPersonName() {
        return "I am a Person";
    }

    getPersonAddress() {
        return "Mumbai";
    }

    getPersonDetails() {
        const name = this.getPersonName(); 
        const address = this.getPersonAddress();
        return name+ " " + address;
    }

    static main() {
        let p = new Person();
        const detail = p.getPersonDetails();
        console.log(detail);
    }
}

Person.main();