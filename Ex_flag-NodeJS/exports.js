// function getFlag(string) {
    
//     let flagContent 
//     process.argv.forEach((arrayContent , flagIndex) => {
//         if (arrayContent.includes(string)) {  
//             const flagContentIndex = flagIndex + 1;
//             flagContent = process.argv[flagContentIndex]      
//         }
//     });
//     return flagContent;
// }

function getFlag(flag) {
    const index = process.argv.indexOf(flag) + 1
    const flagContent = process.argv[index]
    return flagContent
}

module.exports = getFlag;