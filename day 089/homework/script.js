function addStudents(name, grade) {
    if (!addStudents.students) {
        addStudents.students = new Map(); 
    }
    addStudents.students.set(name, grade); 
    console.log(addStudents.students);
}

addStudents("zurmuxti", "10");
addStudents("lamara", "9");



const originalArray = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueArray = removeDuplicates(originalArray);
function removeDuplicates(array) {
    return [...new Set(array)];
}


console.log("ორიგინალი მასივი:", originalArray);
console.log("უნიკალური მასივი:", uniqueArray);

