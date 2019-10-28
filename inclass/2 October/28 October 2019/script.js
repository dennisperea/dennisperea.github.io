"using strict"

function special(){
    console.log("In special beginning");
    console.log(setTimeout(doStuff,2000));
    console.log("In special ending");
}

function doStuff(){
    console.log("in do stuff");
}

window.onload = function() {
    this.console.log("Before calling special");
    this.special();
    this.console.log("After calling special");
}