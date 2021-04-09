import * as actionTypes from './actionTypes'

export const saveResult = ( res ) => {
    return {
        type : actionTypes.STORE_RESULT,
        counter: res

    }
}

export const storeResult = (ctrObj) => {
    return (dispatch) => {
        setTimeout( () => {
            dispatch(saveResult(ctrObj))
        },2000)
    }
    
}

export const deleteResult = (idLi) => {
    return {
        type : actionTypes.DELETE_RESULT,
        id: idLi
    }
}