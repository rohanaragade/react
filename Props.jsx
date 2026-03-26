import React from 'react'

const Props = ({name,total,captain,children}) => {
  return (
    <div>
        <h1>{name} Is Greteset Franchise Ever In history Of Ipl</h1>
        <h2>{name} has {total} Trophies</h2>
        <h3> Captain Is The Man , The Myth , The Legend  {captain}</h3>
        <div>
            {children}
        </div>
        <h2></h2>
    </div>
  )
}

export default Props