const leaders = new Map([
    ["group23", "ramaz shavtavishvili"],
    ["group15", "prokop benzema"],
    ["group14", "demetre goisashvili"], // es magari vigacaa
    ["group53", "inazi gorgiladze"],
    ["group13", "bolodan meore"]
])

console.log(leaders.get("group23"));
console.log(leaders.get("group15"));
console.log(leaders.get("group14"));
console.log(leaders.get("group53"));
console.log(leaders.get("group13"));

console.log(leaders.size)

leaders.forEach((value) => {
    console.log(`${value}`);
});


// in viyenebt imistvis rom mivwvdet indexebs da of rom mivwvdet elemenebs