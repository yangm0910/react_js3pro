import React, { Component } from 'react';
import { ListWrapperStyle, ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';

const stateToProps = (state) => {
    return {
        articleList: state.getIn(["home", "articleList"])
    }

}
class ListWrapper extends Component {

    render() {
        const { articleList } = this.props;
        return (
            <ListWrapperStyle>
                {
                    articleList.map(item => (
                        <ListItem key={item.get("id")}>
                            <img className="pic" alt="22" src={item.get("imgUrl") }/>
                            <ListInfo>
                                <h3 ><a className="title" href="/detail">{item.get("title")}</a></h3>
                                <p className="description">{item.get("info")}</p>
                            </ListInfo>
                        </ListItem>
                    ))
                }

            </ListWrapperStyle>
        )
    }

}

export default connect(stateToProps, null)(ListWrapper);