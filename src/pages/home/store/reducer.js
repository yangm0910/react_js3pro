import { fromJS } from 'immutable';

const defaultState = fromJS({
   topicList: [{
       id:1,
       imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
       topicName: "热门主题"
   },{
    id:1,
    imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
    topicName: "热门主题2"
}]
})
export default (state = defaultState, action) => {
    const type = action.type;
    switch (type) {
        default:
            return defaultState
    }
}

