console.log(process.argv);

function getFlag(string) {
    
    let flagContent 
    process.argv.forEach((arrayContent , flagIndex) => {
        if (arrayContent.includes(string)) {  
            const flagContentIndex = flagIndex + 1;
            flagContent = process.argv[flagContentIndex]      
        }
    });
    return flagContent;
}

const nome = getFlag('--name');
const greeting = getFlag('--greeting');

console.log(nome + ', ' + greeting);




// function getFlag(string) {
//     const flagIndex = process.argv.findIndex(string)
//     const flagContentIndex = flagIndex + 1
//     const flagContent = process.argv[flagContentIndex].value
    
//     return flagContent   
// }

// const flagContentArray = []

// process.argv.forEach(element => {
//     if (element.includes('--')) {
//         flagContentArray.push(getFlag(String(element)))
//     }    
// });

// flagContentArray.forEach(element => {
//     console.log(element);
// });