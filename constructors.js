var houseKeeper1 = {
    yearsOfExperience : 12,
    name : "Jane",
    cleaningRepo : ["room", "lobby","desk"]
}

//constructor function 
function HouseKeeper(yearsOfExperience , name , cleaningRepertoire ){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

//in console
var  houseKeeper2 = new HouseKeeper(9 , "tom ", ["lobby" , "bedroom "] );
console.log(houseKeeper2.name);
