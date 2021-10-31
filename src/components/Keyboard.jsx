import React, {useCallback, useRef, useState} from 'react';

const Keyboard = () => {
    const ref = useRef();
    const [operation, setOperation] = useState("");
    const onClick = (e) => {
            const math = `${e.target.value}${operation}`; 
            setOperation(math);
            console.log(operation, e.target.value)
    }
    const handleReset = () => {
        setOperation("");
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        if(!/\d/.test(e.target.value) && !/[-+/*]/.test(e.target.value)) {
            return;
        }
        const operatorIndex = operation.search(/[-+/*]/);

        if(operatorIndex === -1) {
            setOperation(e.target.value);
            console.log(operation)
        } else {
            const number = +operation.slice(operatorIndex+1);
            const regex1 = new RegExp(/[0-9]/, 'g' );
            const isNumber = regex1.test(number);
            if(isNumber) {
               setOperation(e.target.value);
            }
        }
    }

    const handleResult = useCallback(() => {
        const operatorIndex = operation.search(/[-+/*]/);
        console.log('operation: ', operation, operatorIndex);
        let number1, number2;
        if(operatorIndex !== -1) {
            number1 = +operation.slice(0, operatorIndex);
            const regex1 = new RegExp(/[0-9]/, 'g' );
            const isNumber = regex1.test(operation.slice(operatorIndex + 1));
            if(isNumber) {
                number2 = +operation.slice(operatorIndex + 1);
            }
        }


         console.log('numbers: ', number1, number2);
        if(!number1 || !number2) {
            return;
        }
        let operatorSignIndex = operation.search(/[-+/*]/);
        if(operatorSignIndex !== -1) {
            switch (operation[operatorSignIndex]) {
                case '+': {
                    setOperation(number1 + number2);
                    break;
                }
                case '-': {
                    setOperation(number1 - number2);
                    break;
                }
                case '*': {
                    setOperation(number1 * number2);
                    break;
                }
                case '/': {
                    setOperation(number1 / number2);
                    break;
                }
                case '%': {
                    setOperation(number1 % number2);
                    break;
                }
                default: return 0;
            }
        }   
    }, [ operation ]);

    // useEffect(() => {
    //     document.addEventListener('keydown', function(e) {
    //         if(e.key === 'Backspace') {
    //             const newOperation = operation.length ? operation.substring(0, operation.length -1) : operation;
    //             setOperation(newOperation);
    //             return;
    //         }
    //         if(!/[\d-+/*=]/.test(e.key)) {
    //             return;
    //         }
    //         if(e.key === '=') {
    //             handleResult();
    //         } else {
    //            setOperation(`${operation}${e.key}`);
    //         }
    //     });
    // }, [ handleResult, operation])
    return(
        <div ref={ref}>
        <input type="text" aria-label="result" className="sum" onChange={handleChange} placeholder={0} value={operation} />
            <div className="grid-container">
                    <button name="seven" className="grid-item" value={7} onClick={onClick}>7</button>
                    <button className="grid-item" value={8} onClick={onClick}>8</button>
                    <button className="grid-item" value={9} onClick={onClick}>9</button>
                    <button value="DEL" style={{backgroundColor:"#7171c3", color:"white"}} onClick={handleReset}>DEL</button>
                    <button className="grid-item" value={4} onClick={onClick}>4</button>
                    <button className="grid-item" value={5} onClick={onClick}>5</button>
                    <button className="grid-item" value={6} onClick={onClick}>6</button>
                    <button value="+" onClick={onClick}>+</button> 
                    <button className="grid-item" value={1} onClick={onClick}>1</button>
                    <button className="grid-item" value={2} onClick={onClick}>2</button>
                    <button className="grid-item" value={3} onClick={onClick}>3</button>
                    <button value="-" onClick={onClick}>-</button>
                    <button value="." onClick={onClick}>.</button>
                    <button value={0} onClick={onClick}>0</button>
                    <button value="/" onClick={onClick}>/</button>
                    <button value="*" onClick={onClick}>x</button>
                    <button className="action" value="RESET" style={{backgroundColor:"#647299",color:"white"}} onClick={handleReset}>RESET</button>
                    <button className="action" value="=" style={{backgroundColor:"red"}} onClick={handleResult}>=</button> 
                </div>
            </div>
    )
}

export default Keyboard;