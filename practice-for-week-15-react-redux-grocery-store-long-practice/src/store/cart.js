const ADDTOCART = "ADDTOCART";

export const addCart = item => {
    return {
        type: ADDTOCART,
        id: item
    }
}

export default function cartReducer(state = {}, action) {

    const nextState = { ...state }

    switch (action.type) {
        case ADDTOCART:
            nextState[action.id] = {
                id: action.id,
                count: 1
            }
            return nextState;
        default:
            return state;
    
    }
}