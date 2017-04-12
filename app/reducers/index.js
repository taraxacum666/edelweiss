import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import specialReducer from './special-reducer';
import searchLayoutReducer from './search-layout-reducer';
import blogReducer from './blog-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    specialState: specialReducer,
    searchLayoutState: searchLayoutReducer,
    blogState: blogReducer
});

export default reducers;
