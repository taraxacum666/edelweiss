import axios from 'axios';
import store from '../store';
import { getPostsList } from '../actions/blog-actions';

/**
 * Get posts
 */

export function getPosts(){
    return axios.get('http://localhost:3001/blog')
        .then(response => {
            store.dispatch(getPostsList(response.data));
            return response;
        });
}