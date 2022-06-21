/* crie uma função que transforme uma string de celsius para farenheit e vice-versa.

C = 5/9 * (F - 32)
F = C * 9/5 +32
*/

/* sol 1 - duas funções
function celsiusFarenheit (array){
    let farenheit = [];
    for (const index in array) {
        farenheit[index] = array[index] * 9/5 + 32
        farenheit[index] = farenheit[index].toFixed(2)
    }
    //console.log(farenheit)
    return farenheit
}

function farenheitCelsius (array){
    let celsius = [];
    for (const index in array) {
        celsius[index] = (array[index] - 32)* 5/9
        celsius[index] = celsius[index].toFixed(2)
    }
    //console.log(celsius)
    return celsius
}

let teste = [0, 100, 37, 36.6, 40]

console.log(celsiusFarenheit(teste))
console.log(farenheitCelsius(celsiusFarenheit(teste)))
*/

/* sol 2 - função única

// function transformDegree(array){
//     const transform = []
    
//     for (let temperature of array) {
//         const isCelsius = temperature.toUpperCase().includes('C')
//         const isFarenheit = temperature.toUpperCase().includes('F')
//         if(isCelsius){
           
//             const temperatureNumber = temperature.toUpperCase().replace('C','')
//             const temperatureInFarenheit = temperatureNumber * 9/5 + 32
//             //console.log(temperatureInFarenheit);
//             const temperatureString = temperatureInFarenheit.toFixed(2)+'F'
//             //console.log(temperatureString);
//             transform.push(temperatureString)
            
//         } else if(isFarenheit){
//             const temperatureNumber = temperature.toUpperCase().replace('F','')
//             const temperatureInCelsius = (temperatureNumber - 32)* 5/9  
//             const temperatureString = temperatureInCelsius.toFixed(2) + 'C'
//             transform.push(temperatureString)
//         } else{
//             transform.push('invalid')
//             throw new Error('invalid format')
//         }
//     }
//     return transform
// }

// let teste = ['0C' , '0.00F' , '100c' , '100f', 'asd', '12k']

// try {
//     transformDegree(teste)
// } catch (error) {
//     console.error(error);
// }
// console.log(transformDegree(teste)); 
*/

/* sol 3 - função única sem throw 

// function transformDegree(array){
//     const transform = []
    
//     for (let temperature of array) {
//         const isCelsius = temperature.toUpperCase().includes('C')
//         const isFarenheit = temperature.toUpperCase().includes('F')
//         if(isCelsius){
           
//             const temperatureNumber = temperature.toUpperCase().replace('C','')
//             const temperatureInFarenheit = temperatureNumber * 9/5 + 32
//             //console.log(temperatureInFarenheit);
//             const temperatureString = temperatureInFarenheit.toFixed(2)+'F'
//             //console.log(temperatureString);
//             transform.push(temperatureString)
            
//         } else if(isFarenheit){
//             const temperatureNumber = temperature.toUpperCase().replace('F','')
//             const temperatureInCelsius = (temperatureNumber - 32)* 5/9  
//             const temperatureString = temperatureInCelsius.toFixed(2) + 'C'
//             transform.push(temperatureString)
//         } else{
//             transform.push('invalid')
//         }
//     }
//     return transform
// }

// let teste = ['0C' , '0.00F' , '100c' , '100f', 'asd', '12k']

// console.log(transformDegree(teste)); 
*/

/* solução rocketseat

Eu entendi errado o enunciado da questão. A entrada da função era apenas uma única string e não um array de strings
*/

function transformDegree(temperatureString){

    const isCelsius = temperatureString.toUpperCase().includes("C")
    const isFarenheit = temperatureString.toUpperCase().includes("F")
    
    //fluxo de erro
    if ( !isCelsius && !isFarenheit) {
        throw new Error('invalid entry')
    }

    //fluxo farenheit
    if (isFarenheit) {
        const temperatureNumber = temperatureString.toUpperCase().replace("F","");
        
        //arrow function ºF -> ºC
        let farenheitToCelsius = (farenheit) => 5/9 * ( farenheit - 32)

        const updatedTemperatureNumber = farenheitToCelsius(temperatureNumber);
        const updatedSign = 'C'
        const updatedTemperatureString = updatedTemperatureNumber.toFixed(2) + updatedSign
        
        return updatedTemperatureString

    // fluxo celsius 
    //o fluxo erro e o fluxo farenheit abordam todos os casos exceto se a temperatura for celsius    
    } else {
        const temperatureNumber = temperatureString.toUpperCase().replace("C","");
        
        //arrow function ºF -> ºC
        let celsiusToFarenheit = (celsius) => 9/5 * celsius + 32

        const updatedTemperatureNumber = celsiusToFarenheit(temperatureNumber);
        const updatedSign = 'F'
        const updatedTemperatureString = updatedTemperatureNumber.toFixed(2) + updatedSign
        return updatedTemperatureString
    }
    
}

try {
    
    console.log(transformDegree('0F'))
    console.log(transformDegree('0f'))
    console.log(transformDegree('0C'))
    console.log(transformDegree('0c'))
    
    //console.log(transformDegree('0Z'))
    console.log(transformDegree('abc'))
    console.log(transformDegree('100'))
    console.log(transformDegree('100C'))
    console.log(transformDegree('100F'))

} catch (error) {
    console.log(error);
}
