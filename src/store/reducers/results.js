import * as actionTypes from '../action/actionTypes'


const initialState = { 
    results: []
}

const reducer =  ( state = initialState, action) => {
    
    switch (action.type) {

		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({
					id: new Date(),
					value: action.counter,
				}),
			};
		case actionTypes.DELETE_RESULT:
			// const id = 2;
            // const cloneResults = [...state.results]
            // cloneResults.splice(id,1)
            
            const  updatedArray = state.results.filter(result => result.id !== action.id)
            console.log(updatedArray)
            return {
				...state,
				results: updatedArray,
			};
		default:
			return state;
	}
}

export default reducer;