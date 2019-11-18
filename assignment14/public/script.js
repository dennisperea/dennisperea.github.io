async function showMonsters(){
    let monstersJson = await fetch('api/monsters');
    let monsters = await monstersJson.json();
    let monstersDiv = document.getElementById("monster-div");

    for(i in monsters){
        monstersDiv.append(getMonsterElem(monsters[i]));
    }
}

function getMonsterElem(monster){
    let monsterDiv = document.createElement("div");
    monsterDiv.classList.add("monsters")
    let monsterName = document.createElement("h3");
    monsterName.innerHTML = monster.name;

    let monsterUlElem = document.createElement("ul");
    let monsterAbilitiesLiElem = document.createElement("li");
    monsterAbilitiesLiElem.innerHTML = "Abilities: " + monster.abilities;
    monsterUlElem.append(monsterAbilitiesLiElem);
    let monsterWeaknessLiElem = document.createElement("li");
    monsterWeaknessLiElem.innerHTML = "Weakness: " + monster.weakness;
    monsterUlElem.append(monsterWeaknessLiElem);

    let monsterDescElem = document.createElement("p");
    monsterDescElem.innerHTML = monster.description;

    monsterDiv.append(monsterName);
    monsterDiv.append(monsterUlElem);
    monsterDiv.append(monsterDescElem);
    return monsterDiv;
}

async function addMonster(){
    //get the song inforamtion
    console.log("here")
    const monsterName = document.getElementById("name").value;
    const monsterAbilities = document.getElementById("abilities").value;
    const monsterWeakness = document.getElementById("weaknesses").value;
    const monsterDescription = document.getElementById("description").value;

    
    let monster = {"name": monsterName, "abilities": monsterAbilities, "weakness": monsterWeakness, "description": monsterDescription}; 

    let response = await fetch('/api/monsters/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(monster),
    });

    if(response.status != 200){
        console.log("Error adding song");
        return;
    }

    let result = await response.json();
    showMonsters();
}

window.onload = function(){
    this.showMonsters();

    const addMonsterBtn = this.document.getElementById("create-monster-btn");
    addMonsterBtn.onclick = this.addMonster;
}