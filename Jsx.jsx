import React from 'react'

const Jsx = () => {
  return (
    <div>
        <Moviees />
    </div>
  )
}

const Moviees = () =>{  
  const movie = "Dhurander The Revenge";
  const rating = "9.0";
  const summary ="The film follows a powerful and fearless intelligence officer who becomes involved in a dangerous national security mission. While working to protect the country, he faces hidden enemies, political conspiracies, and high-risk operations.";
  const age =19;
  
  return (
    <div>
        <div>
            <img src="src/Images/dhurandhar.avif" alt="Dhrundar" />
        </div>
        <h2>Name : {movie}</h2>
        <h3>Rating : {rating}</h3>
        <p>Summary : {summary}</p>
        <button>{age > 18 ? "Watch Now" : "Not Available"}</button>
        {/* <button>{age && "Watch Now" }</button> */}
    </div>
  )
}




export default Jsx