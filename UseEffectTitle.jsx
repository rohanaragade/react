import React, { useEffect, useState } from 'react'

const UseEffectTitle = () => {
    
    const [counts, setCount] = useState(0);
    
    
        useEffect(() => {
            document.title = `Clicks ${counts}`;
    
        }, [counts]);
    
        const ToIncrements = () => {
            setCount(counts + 1);
        }
    

    
    return (
        <div>
            <h2 className='mx-5'>{counts}</h2>
            <button className='btn btn-dark mx-3 p-2' onClick={ToIncrements}>Click Me For UseEffect</button>
        </div>
    )
}

export default UseEffectTitle