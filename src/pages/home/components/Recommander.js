import React , { Component } from 'react';
import {RecommanderStyle, RecommandItem} from '../style'
import {connect} from 'react-redux';

class Recommander extends Component {

    render () {
        const {recommandList} = this.props;
        return (
           <RecommanderStyle>
               {
                   recommandList.map(item =>(
                    <RecommandItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
                   ))
               }
           </RecommanderStyle>
            // <List/>
        )
    }

}
const mapToState = (state) =>{
    return {
        recommandList: state.getIn(["home","recommandList"])
    }
}
export default connect(mapToState, null)(Recommander);