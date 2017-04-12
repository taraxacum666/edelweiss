import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  special: []
};

const specialReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_SPECIAL_SUCCESS:
      return Object.assign({}, state, { special: action.special });


  }

  return state;

}

export default specialReducer;
