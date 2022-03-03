// Fs = filesystem
const fs = require("fs");

// Reading files

// Skaber en pakke af data kaldet "Buffer" som bliver sendt når vi læser filen blog1.txt
// Asynkron funktion. Den stopper ikke kode for at køre videre, men kører når den kan
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     // Bruger toString for at gøre bufferen læsbar og vi ser "Hello" i terminalen
//     console.log(data.toString());
// })

// console.log('This will be logged first');

// Writing files

// Erstatter filen med File was written
// fs.writeFile('./docs/blog1.txt', 'Hello World', () =>{
//     console.log('File was written');
// });

// //Skaber en ny fil da der ikke eksisterer en fil med navnet, og skriver File was written
// fs.writeFile('./docs/blog2.txt', 'Hello, again?', () =>{
//     console.log('File was written');
// });

// Directories

//Laver en ny mappe med navnet assets
// fs.mkdir('./assets', (err)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder created');
// });

// Hvis der IKKE eksisterer en mappe med navnet assets, skal der laves en mappe der hedder det
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder created");
//   });
// } else {
//     fs.rmdir('./assets', (err) =>{
//         if(err) {
//             console.log(err);
//         }
//         console.log('Folder deleted');
//     });
// }


// Deleting files
//Sletter filer, hvis de eksisterer
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('File deleted');
    })
}
