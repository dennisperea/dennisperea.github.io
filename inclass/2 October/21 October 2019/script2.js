"using strict"

class Person {
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        returnthis._firstName + "*";
    }

    set firstName(fname){
        this._firstName = fname + "!";
    }
}

me = new Person("Amy", "Smith");
me.firstName = "Bobby"; // me.setFirstName("Bobby");  CALLS ON SET METHOD
console.log(me.firstName);  // me.getFirstName();
