import {GET_ALL_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE} from "../actions/actionTypes"

const initialState={
    articles:[{
        id:"1",
        articleName:"Nelly",
        content:"Nikolova"
    }]
}
const reducer = (state =initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
           return Object.assign({}, state, {articles: [...state.articles, action.payload]})

        case DELETE_ARTICLE:
            return state.filter((post)=>post.id !== action.id);

        default:
            return state;
    }

};
export default reducer