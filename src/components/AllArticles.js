import React, { Component} from 'react';
import {PropTypes} from 'prop-types'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Article from './Article';
import * as actions from '../actions/action'


class AllArticles extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const articles = this.props.articles;
        return(
            <div>
                <h2>ALL ARTICLES</h2>
              <Article  />
                <div className="col-md-8">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
AllArticles.propTypes = {
    articles: PropTypes.array.isRequired
};

function mapStateToProps(state) {

    if (state.articles.length > 0) {
        return {
            articles: state.articles
        };
    } else {
        return {
            articles: [{id: '', articleName: '', content: ''}]
        }
    }

}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapDispatchToProps, mapDispatchToProps)(AllArticles);

