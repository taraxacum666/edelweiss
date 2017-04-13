import React from 'react';
import { connect } from 'react-redux';
import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const UserListContainer = React.createClass({

  componentDidMount: function() {
    userApi.getUsers();
    store.dispatch(loadSearchLayout('users', 'Пациенты на лечении'));
  },

  render: function() {
    return (
      <UserList users={this.props.users} deleteUser={userApi.deleteUser} lockupUser={userApi.lockupUser} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(UserListContainer);
