import React, { useState } from 'react'

const UseStatemap = () => {
    const [users, setUsers] = useState([
        { name: 'Rohan', city: 'Pune' },
        { name: 'Mayur', city: 'Nagpur' },
        { name: 'Aniket', city: 'Shedyal' }
    ]);

    const userCount = users.length;
    const userAvg = users.reduce((sum,n) =>sum+n.age,0)/userCount;

    return (
        <div>
            <br />
            {users.map((data, index) => {
                return (
                    <p key={index}>{data.name} - {data.city}</p>
                )
            })}
            <p>Users Count - {userCount}</p>
            <p>Users age Avg - {userAvg}</p>
        </div>
    )
}

export default UseStatemap