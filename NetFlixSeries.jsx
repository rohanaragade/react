import React from 'react'
import netflixdata from "../Api/NetflixSeriesApi"
import NetFlixSeriesCompo from './NetFlixSeriesCompo'

const NetFlixSeries = () => {
    return (
        <div>
            {netflixdata.map((data) => {
                return <NetFlixSeriesCompo key={data.id} data={data}/>
            })}
        </div>
    )
}

export default NetFlixSeries