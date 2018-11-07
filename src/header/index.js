import React, { Component } from 'react';
import { HeaderWapper, Logo, Nav, NavItem, NavSearch, Button, Addition } from './style'
class Header extends Component {
    render(){
        return(
            <HeaderWapper>
                 <Logo/>
                 <Nav>
                        <NavItem className="float-left active">首页</NavItem>
                        <NavItem className="float-left">下载app</NavItem>
                        <NavItem className="float-right">登录</NavItem>
                        <NavItem className="float-right">Aa</NavItem>
                        <NavSearch></NavSearch>
                        
                 </Nav>
                 <Addition>
                        <Button className="register">注册</Button>
                        <Button className="writter">写文章</Button>
                 </Addition>
             </HeaderWapper>  
        )
    }
}
export default Header;