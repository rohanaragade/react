import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        setInterval(()=>{
            setCount(new Date().toLocaleTimeString())
        },1000)

    }, []);

    return (
        <div>
            <h2 className='mx-5'>{count}</h2>
        </div>
    )
}

export default UseEffect