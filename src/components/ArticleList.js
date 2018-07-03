import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'
import { addArticle } from "../actions/action";

import {bindActionCreators} from 'redux';
import Article from './Article';
import * as actions from '../actions/action';



const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};



class ArticleForm extends Component {
    constructor() {
        super()
        this.state = {
            id:Date.now(),
            articleName: "",
            content:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const {articleName,content}=this.state
        this.props.addArticle(this.state);
        this.setState({ articleName: "",content:"" });
    }

    render() {

        return (

           <div>
            <p className="App-intro">
                <form onSubmit={this.handleSubmit} method="post">
                    <div>
                        <label for="articleName">Article name:</label>
                        <input value={this.props.value} onChange={this.handleChange} type="text" id="articleName" name="articleName" />
                    </div>
                    <div>
                        <label for="content">Content:</label>
                        <textarea value={this.props.value} onChange={this.handleChange} type="text" id="content" name="content" />
                    </div>
                    <button type="submit" >Post</button>
                </form>

            </p>
         </div>
        );
    }
}
ArticleForm.propTypes = {
    addArticle: PropTypes.func.isRequired,
    articles:PropTypes.array.isRequired
};

function mapStateToProps(state) {

    return {articles:state.articles}

}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleForm);