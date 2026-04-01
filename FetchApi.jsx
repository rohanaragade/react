import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(respons => respons.json())
            .then(data => setUser(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h3>Fetch Api</h3>
            {user.map((value) => {
                return <li key={value.id}>{value.title}</li>
            })}
        </div>
    )
}

export default FetchApi