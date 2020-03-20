import React from 'react'

const Smurf = ({ smurf, deleteSmurf }) => {
    console.log(smurf)
    return (
        <div>
            <h2>Name: {smurf.name}</h2>
            <h2>Age: {smurf.age}</h2>
            <h2>Height: {smurf.height}</h2>
            <button type='button' onClick={() => deleteSmurf(smurf.id)}>GoodBye</button>
        </div>
    )
}

export default Smurf