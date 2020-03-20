import axios from 'axios'
import { useEffect } from 'react'

export const getData = () => dispatch => {
    dispatch({ type: 'GET_DATA' })
    axios.get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({ type: 'SET_DATA', payload: response.data })
        })
        .catch(error => {
            dispatch({ type: 'SET_ERROR', payload: 'Request failed, 404 not found' })
        })
}


export const handleNewSmurf = (smurf) => dispatch => {
    dispatch({ type: 'ADD_NEW_SMURF' })
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            console.log(response)
            dispatch({ type: 'RENDER_NEW_SMURF' })
            axios.get('http://localhost:3333/smurfs')
                .then(response => {
                    dispatch({ type: 'SET_DATA', payload: response.data })
                })
                .catch(error => {
                    dispatch({ type: 'SET_ERROR', payload: 'Request failed, 404 not found' })
                })
        })
        .catch(error => {
            console.log(error)
        })
}

export const deleteSmurf = (smurf) => dispatch => {
    dispatch({ type: 'DELETE_SMURF', payload: smurf })
}