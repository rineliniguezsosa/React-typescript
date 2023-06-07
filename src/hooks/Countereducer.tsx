type Reducercount = {
    count:number
}

type Reduceraction = {
    type:string,
    payload:number
}
export const Countereducer = (state:Reducercount,action) =>{
    switch (action.type) {
        case 'incrementar':
            return { count:state.count+action.payload}
        case 'decrementar':
            return { count:state.count-action.payload}
        default:
            return state;
    }
}