// lifting state in react is when two or more child component needs the same state value then we can move the state from child component to parent / common component and pass the state to multiple child component by prpops .

import React, { useState } from 'react'

const UseStateLifting = () => {
    const [inputValue, setInputValue] = useState(" ");
    return (
        <div>
            <Child1 inputValue ={inputValue} />
            <Child2 inputValue = {inputValue} setInputValue= {setInputValue}  />
        </div>
    )
}

const Child1 = ({inputValue}) => {
    return <>
    <h5>My Name IS : {inputValue}</h5>
    </>
}

const Child2 = ({inputValue , setInputValue}) => {
    
    return <>
        <input type='text' placeholder='Eneter your name' onChange={(e) => setInputValue(e.target.value)}  value={inputValue}/>
    </>
}

export default UseStateLifting