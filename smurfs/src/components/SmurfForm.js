import React, { useState } from 'react'

const SmurfForm = ({ smurfs, handleNewSmurf }) => {
    console.log('inside form')
    const [data, setData] = useState({
        name: '',
        age: null,
        height: '',
        id: smurfs.length - 1
    })
    const [submit, setSubmit] = useState()

    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value })
        setSubmit(data)
    }

    const handleSubmit = event => {
        event.preventDefault()

        handleNewSmurf(submit)
        console.log(submit)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Smurf Name</label>
            <input onChange={handleChange} name='name' type='text' id='name' placeholder='Brainey' />
            <label htmlFor='age'>Smurf Age</label>
            <input onChange={handleChange} name='age' type='number' id='age' />
            <label htmlFor='height'>Smurf Height</label>
            <input onChange={handleChange} name='height' type='text' id='height' placeholder='5cm' />

            <button type='submit'>Invite To Village</button>
        </form>
    )
}

export default SmurfForm