import React, {useState} from 'react';

const Calculator = () => {
    let[number1,setNumber1] = useState("")
    let[number2,setNumber2] = useState("")
    let[char,setChar] = useState("")
    const[sum,setSum] = useState("")
    const handleNumber = (e) => {
        if(sum !== ""){
            setNumber1(e.target.value)
            setNumber2("")
            setChar("")
            setSum("")
        }
        else if(number1 === "" ){
            setNumber1(e.target.value)
        }
        else if(number2 === "" ){
            setNumber2(e.target.value)
        }
    }
    const handleChar = (e) => {
        setChar(e.target.value)
    }
    const handleReset = () => {
        setChar("")
        setNumber2("")
        setNumber1("")
        setSum("")
    }
    const handleSum = (e) => {
        number1 = parseInt(number1)
        number2 = parseInt(number2)
        if(char === "+"){
            setSum(number1 + number2)
        }
        else if(char === "-"){
            setSum(number1 - number2)
        }
        else if(char === "*"){
            setSum(number1 * number2)
        }
        else if(char === "%"){
            setSum(number1 % number2)
        }
        else if(char === "/"){
            setSum(number1 / number2)
        }   
    }
    return(
        <>
            <input type="text" className="sum" onChange={handleSum} placeholder={number1 + char + number2} value={sum} />
                <div className="grid-container">
                    <button className="grid-item" value={7} onClick={handleNumber}>7</button>
                    <button className="grid-item" value={8} onClick={handleNumber}>8</button>
                    <button className="grid-item" value={9} onClick={handleNumber}>9</button>
                    <button value="DEL" style={{backgroundColor:"#7171c3", color:"white"}} onClick={handleReset}>DEL</button>
                    <button className="grid-item" value={4} onClick={handleNumber}>4</button>
                    <button className="grid-item" value={5} onClick={handleNumber}>5</button>
                    <button className="grid-item" value={6} onClick={handleNumber}>6</button>
                    <button value="+" onClick={handleChar}>+</button> 
                    <button className="grid-item" value={1} onClick={handleNumber}>1</button>
                    <button className="grid-item" value={2} onClick={handleNumber}>2</button>
                    <button className="grid-item" value={3} onClick={handleNumber}>3</button>
                    <button value="-" onClick={handleChar}>-</button>
                    <button value="." onClick={handleChar}>.</button>
                    <button value={0} onClick={handleNumber}>0</button>
                    <button value="/" onClick={handleChar}>/</button>
                    <button value="*" onClick={handleChar}>x</button>
                    <button id="reset" value="RESET" style={{backgroundColor:"#647299",color:"white", width:"150px"}} onClick={handleReset}>RESET</button>
                    <button id="equal" value="=" className="equal" style={{backgroundColor:"red", width:"150px", marginLeft:"141px"}} onClick={handleSum}>=</button> 
                </div>
        </>
    )
}

export default Calculator;