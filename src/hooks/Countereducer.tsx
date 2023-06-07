
export const Countereducer = (state,action) =>{
    switch (action.type) {
        case 'incrementar':
            return { count:state.count+action.payload}
            break;
    
        default:
            return state;
    }
}