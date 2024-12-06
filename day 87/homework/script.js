let countries = new Map([
    ["Georgia", "Tbilisi"],
    ["France", "Paris"],
    ["Japan", "Tokyo"]
]);

countries.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
});


let cities = new Map([
    ["Tbilisi", "Georgia"],
    ["Paris", "France"],
    ["Tokyo", "Japan"]
]);

console.log(cities.has("Tbilisi"));
console.log(cities.has("London"));  

let students = new Map([
    ["Anna", 85],
    ["John", 90],
    ["Maria", 78]
]);

console.log(`John's score: ${students.get("John")}`);


let map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);

for (let key of map.keys()) {
    console.log(key);
}


let mapToDelete = new Map([
    ["City", "Tbilisi"],
    ["Country", "Georgia"],
    ["Continent", "Asia"]
]);

mapToDelete.delete("City");


let mapSize = new Map([
    ["Name", "Alice"],
    ["Age", 25],
    ["Country", "USA"]
]);

console.log(`Map size: ${mapSize.size}`);


let mapToUpdate = new Map([
    ["Language", "English"],
    ["Country", "USA"]
]);

mapToUpdate.set("Language", "Spanish");
console.log(mapToUpdate);

let emptyMap = new Map();

if (emptyMap.size === 0){
    console.log("its empty")
}else{
    console.log("its not empty")
}


let mapToClear = new Map([
    ["Key1", "Value1"],
    ["Key2", "Value2"]
]);

mapToClear.clear();