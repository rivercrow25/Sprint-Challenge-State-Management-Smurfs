import React, { useEffect } from 'react'
import Smurf from './Smurf'
import SmurfForm from './SmurfForm'

const SmurfList = (props) => {
    console.log(props)
    return (
        <div>
            {props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf} deleteSmurf={props.deleteSmurf} />
            })}
            <SmurfForm smurfs={props.smurfs} handleNewSmurf={props.handleNewSmurf} />
        </div>
    )
}
//all the smurfs
export default SmurfList