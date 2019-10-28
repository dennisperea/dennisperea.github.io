"using strict"

class Food{
    constructor(name,calories){
        this._name = name;
        this._cal = calories;
    }

    getFoodName(){
        return this._name;
    }

    getCalories(){
        return this._cal;
    }

    getTableRow(){
        let trElem = document.createElement("tr");
        let tdNameElem = document.createElement("td");
        let tdCallElem = document.createElement("td");
        tdNameElem.innerHTML = this._name;

    }
}

foods = [];
foods.push(new Food("Popcorn", 5));
foods.push(new Food("Chicken", 200));

let total = 0;
for (elem of foods){
    total+= elem.getCalories();
}

console.log("total: " + total);