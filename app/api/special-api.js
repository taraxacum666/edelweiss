import axios from 'axios';
import store from '../store';
import { getSpecialSuccess, deleteSpecialSuccess } from '../actions/special-actions';

/**
 * Get special
 */

export function getSpecial() {
  return axios.get('http://localhost:3001/special')
    .then(response => {
      store.dispatch(getSpecialSuccess(response.data));
      return response;
    });
}

/**
 * Search special
 */

export function searchSpecial(query = '') {
  return axios.get('http://localhost:3001/special?q='+ query)
    .then(response => {
      store.dispatch(getSpecialSuccess(response.data));
      return response;
    });
}

/**
 * Delete a special
 */

export function deleteSpecial(specialId) {
  return axios.delete('http://localhost:3001/special/' + specialId)
    .then(response => {
      store.dispatch(deleteSpecialSuccess(specialId));
      return response;
    });
}
