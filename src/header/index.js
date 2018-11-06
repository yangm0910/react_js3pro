import React, { Component } from 'react';
import { HeaderWapper, Logo, Nav, NavItem } from './style'
class Header extends Component {
    render(){
        return(
            <HeaderWapper>
                 <Logo/>
                 <Nav>
                        <NavItem/>
                        <NavItem/>
                        <NavItem/>
                        <NavItem/>
                 </Nav>
             </HeaderWapper>  
        )
    }
}
export default Header;