import { consts } from './';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    nowPage: 1,
    totalPage: 1
})
export default (state = defaultState, action) => {
    const type = action.type;
    switch (type) {
        case consts.handle_focus:
            return state.set('focused', true);

        case consts.handle_blur:
            return state.set('focused', false);
        case consts.handle_mouseIn:
            return state.set('mouseIn', true);

        case consts.handle_mouseLeave:
            return state.set('mouseIn', false);

        case consts.get_next_page:
            return state.set("nowPage", action.nowPage);

        case consts.get_search_list:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });   // 由于list是immutable对象，所以action.data也不许是immutable
        default:
            return defaultState
    }
}

