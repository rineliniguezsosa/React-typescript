
export const Countereducer = (state,action) =>{
    switch (action.payload) {
        case 'incrementar':
            return { count:state.count+action.payload}
            break;
    
        default:
            return state;
    }
}