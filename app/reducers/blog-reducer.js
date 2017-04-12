import * as types from '../actions/action-types';
import _ from 'lodash';

const initState ={
    posts: []
};

const blogReducer = function(state = initState, action) {

    switch(action.type) {

        case types.GET_POSTS_LIST:
            return Object.assign({}, state, { posts: action.posts });


    }

    return state;

}

export default blogReducer;