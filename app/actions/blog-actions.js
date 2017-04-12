import * as types from '../actions/action-types';

export function getPostsList(posts){

    return {
        type: types.GET_POSTS_LIST,
        posts
    };

}
