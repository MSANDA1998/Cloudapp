import {LOADING_USER} from '../types'

const initialState ={
    authenticated: false,
    loading: false,
    credentials: {},

};
export default function(state= initialState, action){
    switch (action.type) {
        case LOADING_USER:
            return {
                ...state,
                loading: true,
            }
            default :
            return state;
    }
}