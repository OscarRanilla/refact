import  { useState } from 'react';
import './Calculator.css'

const Calculator=()=>{
   
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);
  
    const results = (operation) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
    
        if (isNaN(number1) || isNaN(number2)) {
          setResult("Por favor, introduce números válidos");
          return;
        }
    
        switch (operation) {
          case "sum":
            setResult(number1 + number2);
            break;
          case "subtract":
            setResult(number1 - number2);
            break;
          case "multiply":
            setResult(number1 * number2);
            break;
          case "divide":
            setResult(number2 !== 0 ? number1 / number2 : "No se puede dividir por 0");
            break;
          default:
            break;
        }
      }


    return(
        <div className="calculator">
            <h2 >Calculadora</h2>
            <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Número 1"
            />
            <input 
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Número 2"
            />
            <div className="buttons">
                <button onClick={() => results("sum")} >+</button>
                <button onClick={() => results("subtract")} >-</button>
                <button onClick={() => results("multiply")}  >×</button>
                <button onClick={() => results("divide")}  >÷</button>
            </div>
            <div>{result !== null && (
                <div>
                    <h3>Resultado:</h3>
                    <p>{result}</p>
                </div>
              
            )}
            </div>
        </div>
        )
       
}

export default Calculator;