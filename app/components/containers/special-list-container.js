import React from 'react';
import { connect } from 'react-redux';
import SpecialList from '../views/special-list';
import * as specialApi from '../../api/special-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const SpecialListContainer = React.createClass({

  componentDidMount: function() {
    specialApi.getSpecial();
    store.dispatch(loadSearchLayout('special', 'Специальные средства'));
  },

  render: function() {
    return (
      <SpecialList special={this.props.special} deleteSpecial={specialApi.specialWidget} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
      special: store.specialState.special
  };
};

export default connect(mapStateToProps)(SpecialListContainer);
