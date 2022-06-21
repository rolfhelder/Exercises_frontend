/* Transformar nota de 0 a 100 em letra conforme legenda abaixo:
A >= 90
B >= 80
C >= 70
D >= 60
F < 59

//sol 1 - usando if
if(num_grade >= 90){
    letter_grade = 'A'
} else if(num_grade>=80){
    letter_grade = 'B'
} ...

// sol 2 - usando % e switch
const num_grade = -10
const switch_grade = (num_grade - (num_grade % 10))/10
console.log(switch_grade)


switch(switch_grade) {
    case 9: 
        letter_grade = 'A' 
        console.log(letter_grade);
        break;
    case 8: 
        letter_grade = 'B' 
        console.log(letter_grade);
        break;
    case 7: 
        letter_grade = 'C' 
        console.log(letter_grade);
        break;
    case 6: 
        letter_grade = 'D' 
        console.log(letter_grade);
        break;
    case 5: 
    case 4:
    case 3:
    case 2: 
    case 1: 
    case 0:    
        letter_grade = 'F' 
        console.log(letter_grade);
        break;

    default:
        console.error('nota inválida'); 
        break;
}
*/

function letterScore(score){
    if(score >100 || score<0) {
        console.error('nota inválida');
    } else {
        score = (score - (score % 10))/10
            switch(score) {
                case 10:
                case 9: 
                    score = 'A' 
                    return score;
                case 8: 
                    score = 'B' 
                    return score;
                case 7: 
                    score = 'C' 
                    return score;
                case 6: 
                    score = 'D' 
                    return score;
                case 5: 
                case 4:
                case 3:
                case 2: 
                case 1: 
                case 0:    
                    score = 'F' 
                    return score;
            
                default:
                    console.error('nota inválida'); 
                    break;
            }
        }
}

for (let index = -50; index <= 110; index += 30) {
    console.log(letterScore(index));
}
