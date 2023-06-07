type Reducercount = {
    count:number
}
export const Countereducer = (state,action) =>{
    switch (action.type) {
        case 'incrementar':
            return { count:state.count+action.payload}
        case 'decrementar':
            return { count:state.count-action.payload}
        default:
            return state;
    }
}