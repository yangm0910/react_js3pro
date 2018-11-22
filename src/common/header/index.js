import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './store';
import { CSSTransition } from 'react-transition-group';
import 'antd/dist/antd.css';
import {
    HeaderWapper, Logo, Nav, NavItem, SearchWrapper, NavSearch,
    Button, Addition, SearchInfo, SearchInfoTitle, SearchInfoContent,
    SearchInfoSwitch, SearchInfoItem
} from './style';

class Header extends Component {


    getSearchInfoList = () => {
        const { focused, handleInputFocus, totalPage, nowPage, list, handleInputBlur } = this.props;
        const newList = list.toJS();
        const searchList = [];
        for (let i = (nowPage - 1) * 10; i < nowPage * 10; i++) {
            searchList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )

        }
        if (this.props.focused) {
            return (

                <SearchInfo>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoContent>
                        {searchList}
                    </SearchInfoContent>
                </SearchInfo>
            )
        }

    }

    render() {
        const { focused, handleInputFocus, totalPage, list, handleInputBlur } = this.props;
        console.log("totalPage:" + totalPage);




        return (
            <HeaderWapper>
                <Logo />
                <Nav>
                    <NavItem className="float-left active">首页</NavItem>
                    <NavItem className="float-left">下载app</NavItem>
                    <NavItem className="float-right">登录</NavItem>
                    <NavItem className="float-right">Aa</NavItem>
                    <SearchWrapper>
                        {/* <NavSearch></NavSearch> */}
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'iconfont icon-search1 focused' : 'iconfont icon-search1'}></i>
                        {this.getSearchInfoList()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="register">注册</Button>
                    <Button className="writter">写文章</Button>
                </Addition>
            </HeaderWapper>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        totalPage: state.getIn(['header', 'totalPage']),
        nowPage: state.getIn(['header', 'nowPage']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && (dispatch(actions.GET_SEARCH_LIST()))
            dispatch(actions.SEARCH_FOCUSED())
        },
        handleInputBlur() {
            dispatch(actions.SEARCH_BLUR())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);