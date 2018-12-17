import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;

`
export const HomeLeft = styled.div`
    float: left;
    padding-top: 30px;
    padding-right: 0;
    margin-bottom: 35px;
    .banner-img {
        border-radius: 6px;
        width:625px;
        height:270px;
    }
`
export const ListWrapperStyle = styled.div`
`
export const ListItem = styled.div`
    overfloat: hidden;
    padding: 20px 0px;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        margin-top: 15px;
        vertical-align:middle;
        float: right;
        border-radius: 4px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    .title{
        font-size:18px;
        font-weight:700;
        display: inherit;
        line-height: 1.5;
        color:#333
    }
`

export const HomeRight = styled.div`
    float: right;
`
export const TopicStyle = styled.div`
    overflow: hidden;
    margin: 18px auto;
    margin-left: -18px;
    padding-bottom: 25px;
    border-bottom: 1px solid #dcdcdc;

`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    text-align: center;
    padding-right: 10px;
    border-radius:4px;
    border: 1px solid #dcdcdc;
    .topicImg{
		float: left;
        margin-right: 10px;
        width:32px;
        height:32px;
    }


`

export const RecommanderStyle = styled.div`
    width: 280px;
    padding: 30px 0 0;
`
export const RecommandItem = styled.div`    
    width: 280px;
    height: 50px;
    border-radius: 4px;
    margin-bottom: 6px;
    background: url(${props => (props.imgUrl)});
    background-size: contain;
`
export const WritterStyle = styled.div`

`  
