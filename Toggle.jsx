import React, { useState } from 'react'
import './Toggle.css'
import { FaToggleOn } from "react-icons/fa";


const Toggle = () => {
    const [toggle, setToggle] = useState(false);


    const changeTheme = () => {
        setToggle(!toggle);
    }
    return (
        <>
            <h1 className='text-center'>TOGGLE BUTTON <FaToggleOn style={{color:'orange',fontSize:'60px'}}/></h1>
            <div className='toggle_out' style={{ backgroundColor: toggle ? 'green' : 'rgba(137, 131, 131, 0.571' }}>
                <button className={`toggle_in ${toggle ? "tsecond" : "tfirst"}`} onClick={changeTheme}>{toggle ? "ON" : "OFF"}</button>


            </div>
        </>
    )
}

export default Toggle