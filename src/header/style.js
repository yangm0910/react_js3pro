import styled from 'styled-components';
import logoPic from '../statics/logo.png';

export const HeaderWapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position: absolute;
    top:0;
    lest:0;
    display:block;
    width:100px;
    height:58px;
    background:url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width:960px;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;

`
export const NavItem = styled.div`
    line-height: 58px;
    font-size: 17px;
    padding: 0 15px;
    color: #333;
    &.float-left {
        float: left
    }
    &.float-right {
        float: right
    }
    &.active{
        color: #ea6f5a;
    }
`
export const SearchWrapper = styled.div`
position: relative; 
    float: left;        
    // background: red;
    .icon-search1{
        position: absolute;
        font-size: 20px;
        right: 10px;
        top: 15px;
		bottom: 5px;
		width: 30px;
		// line-height: 30px;
		border-radius: 15px;
        text-align: center;
        &.focused{
            background: #999;
        }
    }
    


`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 240px;
    height: 38px;
    margin-top: 10px;
    // margin: 15px 10px;
    border: 1px solid #eee;
    border-radius: 40px;
    padding: 0 40px 0 30px;
    background: #eee;
    &::placeholder {
		color: #999;
    }
    &.focused{
        width: 300px
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    height: 58px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.register{
        color: #ec6149
    }
    &.writter{
        color: #fff
        background: #ec6149
    }
`