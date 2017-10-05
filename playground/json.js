// var obj = {
//     name: 'Andres'
// };

// var stringObj = JSON.stringify(obj); // Set an object to A string. 
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andres", "age": 23}';
// var person = JSON.parse(personString); // turn it back into an Object

// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

