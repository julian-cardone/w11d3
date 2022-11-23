const ADDTOCART = "ADDTOCART";
const REMOVEFROMCART = "REMOVEFROMCART";
const DECREMENTCART = "DECREMENTCART"
const UPDATECART = "UPDATECART"

export const addCart = item => {
    return {
        type: ADDTOCART,
        id: item
    }
}

export const decrementCart = item => {
    return {
        type: DECREMENTCART,
        id: item
    }
}

export const removeCart = itemId => {
    return {
        type: REMOVEFROMCART,
        id: itemId
    }
}

export const updateCart = (itemId, itemCount) => {
    return {
        type: UPDATECART,
        id: itemId,
        count: itemCount
    }
}

export default function cartReducer(state = {}, action) {

    const nextState = { ...state }

    switch (action.type) {
        case ADDTOCART:
            nextState[action.id] ? nextState[action.id].count += 1 : nextState[action.id] = {id: action.id, count: 1}
            return nextState;
        case REMOVEFROMCART:
            delete nextState[action.id]
            return nextState;
        case DECREMENTCART:
            nextState[action.id].count === 1 ? delete nextState[action.id] : nextState[action.id].count -= 1
            return nextState;
        case UPDATECART:
            nextState[action.id].count = action.count
            return nextState;
        default:
            return state;
    
    }
}