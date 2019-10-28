"using strict"

//Creating classes in javascript
class Person {
    constructor(firstName, lastName){
        //  use '_' for private variable
        // Dont need to declare class variables
        this._firstName = firstName;
        this._lastName = lastName;
    }

    getFirstName(){
        return this._firstName;
    }

    getLastName(){
        return this._lastName;
    }

    setFirstAndLastName(firstName,lastName){
        this._firstName = firstName;
        this._lastName  = lastName;
    }
}

me = new Person("Joe", "Mama");
console.log(me);
console.log(me.getFirstName());
console.log(me.getLastName());
console.log(typeof(Person));

me.setFirstAndLastName("Deez", "Nutz");
console.log(me);
console.log(me.getFirstName());
console.log(me.getLastName());
console.log(typeof(Person));
