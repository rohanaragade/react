// fetch api using async await  and after end of this code below is using promises

import React, { useEffect, useState } from 'react'
import './FetchApis.css'

const FetchApiPokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, [])

    console.log(pokemon);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error:  {error.message}</h1>
    }

    return (
        <div className='my-5'>
            <h1 className='text-center'>Lets Catch Pokemon</h1>
            <div className='card-demo my-5'>
                <div className='pokemon'>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt='image' />
                    <h1>{pokemon.name}</h1>
                    <div className='pokemon-stats'>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                        <p>Speed: {pokemon.stats[5].base_stat}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FetchApiPokemon

// fetch api using promise

// import React, { useEffect, useState } from 'react'
// import './FetchApis.css'

// const FetchApiPokemon = () => {
//     const [pokemon, setPokemon] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);


//     const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

//     const fetchPokemon = () => {
//         fetch(API)
//             .then((res) => res.json())
//             .then((data) => {
//                 setPokemon(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setError(error);
//                 setLoading(false);
//             })
//     };

//     useEffect(() => {
//         fetchPokemon();
//     }, [])

//     console.log(pokemon);

//     if (loading) {
//         return <h1>Loading...</h1>;
//     }

//     if (error) {
//         return <h1>Error:  {error.message}</h1>
//     }

//     return (
//         <div className='my-5'>
//             <h1 className='text-center'>Lets Catch Pokemon</h1>
//             <div className='card-demo my-5'>
//                 <div className='pokemon'>
//                     <img src={pokemon.sprites.other.dream_world.front_default} alt='image' />
//                     <h1>{pokemon.name}</h1>
//                     <div className='pokemon-stats'>
//                         <p>Height: {pokemon.height}</p>
//                         <p>Weight: {pokemon.weight}</p>
//                         <p>Speed: {pokemon.stats[5].base_stat}</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default FetchApiPokemon