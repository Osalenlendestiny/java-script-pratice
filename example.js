const prompt = require("prompt-sync")({sight: true});
let result;
const operator = prompt('Enter Operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt ('Enter number1:'));
const number2 = parseFloat(prompt ('Enter number2:'));
    switch (operator){
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2}= ${result}`);
        break;
        case '-':
            result = number1 - number2;
            console.log(`${number1}- ${number2} = ${result}`);
            break;
    
         case '*':
                result = number1 * number2;
                console.log(`${number1} * ${number2} = ${result}`);
                break;
            
                case '/':
                    result = number1 / number2;
                    console.log(`${number1} / ${number2} = ${result}`);
                    break;
        
                    default :
                        console.log('invaild operator');
                        break;
                    }
   
                    