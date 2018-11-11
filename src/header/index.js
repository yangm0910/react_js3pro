import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { HeaderWapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, SearchIcon, Button, Addition } from './style';
import 'antd/dist/antd.css';
import { dispatch } from 'rxjs/internal/observable/range';

// import { CSSTransition } from 'react-transition-group';

// class Header extends Component {
//     render(){
const Header = (props) => (
    <HeaderWapper>
        <Logo />
        <Nav>
            <NavItem className="float-left active">首页</NavItem>
            <NavItem className="float-left">下载app</NavItem>
            <NavItem className="float-right">登录</NavItem>
            <NavItem className="float-right">Aa</NavItem>
            <SearchWrapper>
                {/* <NavSearch></NavSearch> */}
                {/* <CSSTransition
							in={this.state.focused}
							timeout={200}
							classNames="slide"
						> */}
                <NavSearch
                    className={props.focused ? 'focused' : ''}
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                ></NavSearch>
                <i className={props.focused ? 'iconfont icon-search1 focused' : 'iconfont icon-search1'}></i>
                {/* </CSSTransition> */}
                {/* <i className="iconfont icon-search1"></i> */}

                {/* <Icon className="searchIcon" style={{width:"10px"}} type="search" theme="outlined" /> */}
                {/* <SearchIcon ></SearchIcon> */}
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className="register">注册</Button>
            <Button className="writter">写文章</Button>
        </Addition>
    </HeaderWapper>
)
const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch({ type: "handle_focus" })
        },
        handleInputBlur() {
            console.log("222")
            dispatch({ type: "handle_blur" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);