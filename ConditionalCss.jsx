import React from 'react'
import './Conditional.css'

const ConditionalCss = () => {
    const colors = "black";
    const stylename = {
        color: 'orange'
    }
    return (
        <div>
            <h1 style={stylename}>Karvenager Is Most Demanded Place In Pune</h1>

            <h2 className={colors == "black" ? 'one' : 'two'}>One Has Red , Two Has Green , Three has Yelloow </h2>

            <h2 style={{ color: colors == "black" ? 'green' : 'yellow' }}>One Has Red , Two Has Green , Three has Yelloow </h2>

            <h2 className={` extra ${colors == "black" ? 'three' : 'two'}`}>One Has Red , Two Has Green , Three has Skyblue and Here Extra class is added</h2>
        </div>
    )
}

export default ConditionalCss