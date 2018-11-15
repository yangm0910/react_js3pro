import { consts } from './';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
})
export default  (state = defaultState, action) =>{
    const type = action.type;
    switch (type) {
        case consts.handle_focus:
            return state.set('focused', true);

        case consts.handle_blur:
            return state.set('focused', false);

        case consts.get_search_list:
            return state.set('list', action.data);   // 由于list是immutable对象，所以action.data也不许是immutable
        default:
            return defaultState
    }
}

