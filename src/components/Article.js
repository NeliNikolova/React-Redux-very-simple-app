import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'

function mapStateToProps(state) {

    return {articles:state.articles}

}
const Article = ({articles})=> {
    console.log(articles)
    return (
        <div>
            {articles.map((article,i) =>
                <div className="list-group-item" key={i}>
                    <p> {article.articleName}</p>
                    <p> {article.content}</p>
                </div>
            )}
        </div>
    );
};

Article.propTypes = {
    articles: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Article);