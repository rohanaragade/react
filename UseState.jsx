import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);

    const valueIncrese = () =>{
        setCount(count+1);
    }
  return (
    <div className='container'>
        <h1 className='mx-4'>{count}</h1>
        <button className='btn btn-secondary' onClick={valueIncrese}>INCRESE</button>
    </div>
  )
}

export default UseState