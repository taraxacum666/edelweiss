import * as types from '../actions/action-types';

export function getSpecialSuccess(special) {
  return {
    type: types.GET_SPECIAL_SUCCESS,
    special
  };
}

export function deleteSpecialSuccess(specialId) {
  return {
    type: types.DELETE_SPECIAL_SUCCESS,
    specialId
  };
}
