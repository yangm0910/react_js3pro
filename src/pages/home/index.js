import React, {Component} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';
import ListWrapper from './components/ListWrapper';
import Topic from './components/Topic';
import Recommander from './components/Recommander';
import Writter from './components/Writter';
class Home extends Component {

    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="https://upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <ListWrapper/>

                </HomeLeft>
                <HomeRight>
                    <Recommander/>
                    <Writter/>

                </HomeRight>

            </HomeWrapper>

        )
    }
}

export default Home;