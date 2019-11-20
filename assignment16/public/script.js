async function showMonsters(){
    let monstersJson = await fetch('api/monsters');
    let monsters = await monstersJson.json();
    let monstersDiv = document.getElementById("monster-div");

    //Delete old monsters, for updating
    let oldMonsters = document.getElementsByClassName("monsters");
    if (oldMonsters.length > 0){
        for (let i = oldMonsters.length -1; i >= 0; i--){
            oldMonsters[i].remove();
        }
    }

    for(i in monsters){
        monstersDiv.append(getMonsterElem(monsters[i]));
    }
}

function getMonsterElem(monster){
    let monsterDiv = document.createElement("div");

    //Monster Details
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

    //create edit and delete links
    let editLink = document.createElement("a");
    editLink.href = "#edit-monster-form";
    editLink.innerHTML = "Edit";
    editLink.setAttribute("data-id", monster.id);
    editLink.onclick = showEditMonster;
    let deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.innerHTML = "Delete";
    deleteLink.setAttribute("data-id", monster.id);
    deleteLink.onclick = deleteMonster;
    monsterDescElem.append(editLink);
    monsterDescElem.append(deleteLink);


    monsterDiv.append(monsterName);
    monsterDiv.append(monsterUlElem);
    monsterDiv.append(monsterDescElem);

    return monsterDiv;
}

async function showEditMonster(){
    const id = this.getAttribute("data-id");
    document.getElementById("edit-monster-id").innerHTML = id;

    let response = await fetch(`api/monsters/${id}`);
    let monster = await response.json();
    document.getElementById("edit-name").value = monster.name;
    document.getElementById("edit-abilities").value = monster.abilities;
    document.getElementById("edit-weaknesses").value = monster.weakness;
    document.getElementById("edit-description").value = monster.description;

    return false;
}

async function editMonster(){
    let id = document.getElementById("edit-monster-id").textContent;
    let name = document.getElementById("edit-name").value;
    let abilities = document.getElementById("edit-abilities").value;
    let weakness = document.getElementById("edit-weaknesses").value;
    let description = document.getElementById("edit-description").value;
    let monster = {"name": name, "abilities": abilities, "weakness": weakness, "description": description}; 

    let response = await fetch(`/api/monsters/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(monster),
    });

    if(response.status != 200){
        console.log("Error editing monster");
    }

    //update the monster list
    showMonsters();
}

async function deleteMonster(){
    const id = this.getAttribute("data-id");
    
    let response = await fetch(`/api/monsters/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error deleting monster");
        return;
    }

    showMonsters();
    return false;
}


async function addMonster(){
    //get the monster inforamtion
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
        console.log("Error adding monster");
        return;
    }

    let result = await response.json();
    showMonsters();
}

window.onload = function(){
    this.showMonsters();

    const addMonsterBtn = this.document.getElementById("create-monster-btn");
    addMonsterBtn.onclick = this.addMonster;

    let editMonsterButton = document.getElementById("edit-monster-btn");
    editMonsterButton.onclick = editMonster;
}