import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
        topicName: "热门主题"
    }, {
        id: 2,
        imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
        topicName: "热门主题2"
    }],
    recommandList: [{
        id: 1,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png",
    }, {
        id: 2,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    }],
    articleList: [{
        id: 1,
        imgUrl: "//upload-images.jianshu.io/upload_images/2321684-8fbaab9227c9a3c7?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        title: "《新白娘子传奇》为什么许仙要用女演员？导演真是太高明了！",
        info:"关于《新白娘子传奇》中的许仙为什么要让女明星叶童出演， 很多人到现在可能都不是很能理解,但是有一个我们的观感可能会告诉我们真实的答案。 《新白..."
    },{
        id: 2,
        imgUrl: "//upload-images.jianshu.io/upload_images/2321684-8fbaab9227c9a3c7?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        title: "《新白娘子传奇》为什么许仙要用女演员？导演真是太高明了！",
        info:"关于《新白娘子传奇》中的许仙为什么要让女明星叶童出演， 很多人到现在可能都不是很能理解,但是有一个我们的观感可能会告诉我们真实的答案。 《新白..."
    },{
        id: 3,
        imgUrl: "//upload-images.jianshu.io/upload_images/2321684-8fbaab9227c9a3c7?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        title: "《新白娘子传奇》为什么许仙要用女演员？导演真是太高明了！",
        info:"关于《新白娘子传奇》中的许仙为什么要让女明星叶童出演， 很多人到现在可能都不是很能理解,但是有一个我们的观感可能会告诉我们真实的答案。 《新白..."
    },  ]

})
export default (state = defaultState, action) => {
    const type = action.type;
    switch (type) {
        default:
            return defaultState
    }
}

