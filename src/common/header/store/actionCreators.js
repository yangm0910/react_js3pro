import { consts } from './';
import axios from 'axios';
import { fromJS } from 'immutable';

export const SEARCH_FOCUSED = () =>({
    type: consts.handle_focus
})

export const SEARCH_BLUR = () => ({
    type: consts.handle_blur
})
const GET_SEARCH_LIST_ACTION = (data) => ({
    type: consts.get_search_list,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const GET_SEARCH_LIST = () => {
    return (dispatch) => {
        axios.get("/api/header/getSearchList.json")
        .then(function(res){
            const data = res.data.data; 
            dispatch(GET_SEARCH_LIST_ACTION(data))
        })
        .catch()
    }
}