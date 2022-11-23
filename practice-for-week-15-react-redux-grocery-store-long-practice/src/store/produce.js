import produceData from "../mockData/produce.json"
const POPULATE = "POPULATE"


export const populateProduce = produce => {
    return {
        type: POPULATE,
        produce: produceData
    }
}



export default function produceReducer(state = {}, action) {

    const nextState = { ...state }

    switch (action.type) {
        case POPULATE:
            action.produce.forEach(produce => {
                nextState[produce.id] = produce;
            })
        return nextState;
      default:
        return state;
    }
}
