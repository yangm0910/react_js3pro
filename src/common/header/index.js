import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderWapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, 
    Button, Addition, SearchInfo, SearchInfoTitle, SearchInfoContent,
    SearchInfoSwitch, SearchInfoItem } from './style';
import 'antd/dist/antd.css';
import {actions} from './store';

import { CSSTransition } from 'react-transition-group';

// class Header extends Component {
//     render(){
const Header = (props) => {
    const { focused, handleInputFocus, handleInputBlur } = props;
    return(
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
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                ></NavSearch>
                </CSSTransition>
                <i className={focused ? 'iconfont icon-search1 focused' : 'iconfont icon-search1'}></i>
               { focused ? (
                   <SearchInfo>
                   <SearchInfoTitle>热门搜索
                       <SearchInfoSwitch>换一批</SearchInfoSwitch>
                   </SearchInfoTitle>
                   <SearchInfoContent>
                       <SearchInfoItem>教育</SearchInfoItem>
                       <SearchInfoItem>教育</SearchInfoItem>
                       <SearchInfoItem>教育</SearchInfoItem>
                       <SearchInfoItem>教育</SearchInfoItem>
                       <SearchInfoItem>教育</SearchInfoItem>
                       <SearchInfoItem>教育</SearchInfoItem>
                       <SearchInfoItem>教育</SearchInfoItem>
                   </SearchInfoContent>
                 </SearchInfo>
               ):""
               } 
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className="register">注册</Button>
            <Button className="writter">写文章</Button>
        </Addition>
    </HeaderWapper>
    )
    
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actions.SEARCH_FOCUSED())
        },
        handleInputBlur() {
            dispatch(actions.SEARCH_BLUR())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);