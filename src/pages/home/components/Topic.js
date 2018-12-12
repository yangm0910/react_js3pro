import React , { Component } from 'react';
import {TopicStyle, TopicItem} from '../style';
import {connect} from 'react-redux';

class Topic extends Component {

    render () {
        const {topicList} = this.props;
        return (
          <TopicStyle>
              {topicList.map(item => (
                <TopicItem key={item.get("id")} >
                  <img className="topicImg" src={item.get("imgUrl")} alt="imgaaa" />
                  {item.get("topicName")}
              </TopicItem>
              ))}
              </TopicStyle>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(["home","topicList"])
    }
}

export default connect(mapStateToProps,null)(Topic);