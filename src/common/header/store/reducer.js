import { consts } from './';
const defaultState = {
    focused: false
}
export default  (state = defaultState, action) =>{
    const type = action.type;
    switch (type) {
        case consts.handle_focus:
            return {focused:true};
        case consts.handle_blur:
            return defaultState;
        default:
            return defaultState
    }
}

