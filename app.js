const fs = require('fs'); // we use the appendFileSync(''); for the const fs = require('fs');
const _ = require('lodash');

const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'The body of the note',
    demand: true,
    alias: 'b'
}


const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove all notes', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log("Note created");
        notes.logNote(note);
        
    }else {
        console.log("Note title taken");
    }
} else if(command === 'list'){
    var listNotes = notes.getAll();
    console.log(`Printing ${listNotes.length} note(s).`);
    listNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log("Note found");
        notes.logNote(note);
    } else{
        console.log("Note not found");
    }
} else if(command === 'remove'){
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note was removed': 'Note not found';
   console.log(message);
} else {
    console.log('Command not recognised');
}
























// console.log(_.isString(true));
// console.log(_.isString("Andres"));

// var filteredArray = _.uniq(['Mike']);
// console.log(filteredArray); // Unique strings, numbers etc. it doesnt duplicate. 




// var user = os.userInfo(); // Module FS and OS. 
// // we Use this var use = os.userInfo(); for de const os = require('os');


// // Option One(1) So you don't get the error.
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });


//Option Two(2)
//fs.appendFile('greetings.txt', `Hello ${user.username}!`);