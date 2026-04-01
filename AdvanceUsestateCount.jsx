import React, { useState } from 'react'
import './count.css'

const AdvanceUsestateCount = () => {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const toIncrese = () => {
        if (count < 100) {
            setCount(count + step);
        }
    }

    const toDecrese = () => {
        if (count > 0) {
            setCount(count - step)
        }
    }

    const toReset = () => {
        setCount(0)
    }

    return (
        <div className='countermain'>
            <div className='counter'>
                <h1>UseState Counter Challenge</h1>
                <h2>Count : {count}</h2>
                <h2>Step : <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} /></h2>
                <div className='countbtn'>
                    <button className='btns' onClick={toIncrese}>Increment</button>
                    <button className='btns' onClick={toDecrese}>Decrement</button>
                    <button className='btns' onClick={toReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default AdvanceUsestateCount