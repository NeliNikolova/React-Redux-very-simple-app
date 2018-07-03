import {GET_ALL_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE} from "./actionTypes"
import articleApi from '../api/ArticlesApi'

export const getArticles=(articles)=>({type: GET_ALL_ARTICLES, articles})
export const addArticle=(article)=>({type: ADD_ARTICLE,payload:article})
export const deleteArticle=(article)=> ({type: DELETE_ARTICLE, article})





