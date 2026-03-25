import React from 'react'

const ConditionalRendering = () => {
    const age = 17;
    const array = [5,6];
    // const price = 200;

    // if(price >199){
    //     return "You Can Abale To Eat CHiken Thali "
    // }else{
    //     return "You Cant Affort It"
    // }
    
  return (
    <div>
        <h1>Conditional Rendering</h1>
        <p>{age >18 ? <i>You Can Vote</i>:<i>You Cannot Vote</i>} </p>
        <p>{!array && "No Elements Found"}</p>
        <p>{array.length}</p>

    </div>
  )
}

export default ConditionalRendering