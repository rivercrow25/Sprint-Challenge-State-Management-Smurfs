const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                isFetching: true
            }
        case 'SET_DATA':
            return {
                ...state,
                smurfs: action.payload,
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'RENDER_NEW_SMURF':
            return {
                ...state,
                smurfs: [...state.smurfs]
            }
        case 'DELETE_SMURF':
            return {
                ...state,
                // smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.id)
            }
        case 'DELETED':
            return {
                ...state,
                smurfs: action.payload
            }
        default:
            return state
    }
}