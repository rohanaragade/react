import React from 'react'

const NetFlixSeriesCompo = ({data}) => {
   const {name,id,img_url,rating,description,cast,watch_url} = data;
    return (
        <div>
            <li key={id}>
                <div>
                    <img src={img_url} alt="series" height="200" width="200" />
                </div>
                <h2>Name: {name} </h2>
                <h3>Rating: {rating}</h3>
                <p>Summary: {description}</p>
                <p>Cast: {cast}</p>
                <a href={watch_url} target='blank'>
                    <button>Watch Now</button>
                </a>
            </li>
        </div>
    )
}

export default NetFlixSeriesCompo