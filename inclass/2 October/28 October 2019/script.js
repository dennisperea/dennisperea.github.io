"using strict"
/* 1 3 2 4 5
* await lets you keep going throught the rest of the code instead of blocking
*/
async function displayShoe(){
    console.log("3");
    let response = await fetch("https://dennisperea.github.io/inclass/2%20October/28%20October%202019/json/shoe.json");
    console.log("4");
    console.log(response);
    console.log("5");

    let shoeJson = await response.json();
    let shoeName = shoeJson.name;
    let shoeBrand = shoeJson.brand;
    let reviews = shoeJson.comments;

    //append a section with info about the shoe to page
    let section = document.createElement("section");
    section.innerHTML = `${shoeName} by ${shoeBrand}`;
    let content = document.getElementById("content");
    content.append(section);
    
}

window.onload = function(){
    this.console.log("1");
    this.displayShoe();
    this.console.log("2");

    let content = document.createElement("section");
    
}