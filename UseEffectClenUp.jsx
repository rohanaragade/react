import React, { useEffect, useState } from 'react'

const UseEffectClenUp = () => {
    const [count, setCounts] = useState(0);

    useEffect(() => {
        const stopset = setInterval(() => {
            setCounts(count + 1);
        }, 1000)

        return (() => clearInterval(stopset));
    }, [count])




    return (
        <div>
            <h1 className='mx-4'>Toatl Count {count}</h1>
        </div>
    )
}

export default UseEffectClenUp