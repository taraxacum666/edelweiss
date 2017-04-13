import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  userLockup: [],
  users: [],
  userProfile: {}
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.DELETE_USER_SUCCESS:

      // Use lodash to create a new user array without the user we want to remove
      const newUsers = _.filter(state.users, user => user.id != action.userId);
      return Object.assign({}, state, { users: newUsers });

    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

    case types.USER_LOCKUP_SUCCESS:
      console.log(action.userLockup);
      return Object.assign({}, state, { userLockup: action.userLockup });
  }

  return state;

}

export default userReducer;
