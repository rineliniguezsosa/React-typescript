type Reducercount = {
    count:number
}

type Reduceraction = {
    type:'incrementar' | 'decrementar', //Strict action types
    payload:number
}
export const Countereducer = (state:Reducercount,action:Reduceraction) =>{
    switch (action.type) {
        case 'incrementar':
            return { count:state.count+action.payload}
        case 'decrementar':
            return { count:state.count-action.payload}
        default:
            return state;
    }
}