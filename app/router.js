import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';
import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';
import SpecialListContainer from './components/containers/special-list-container';
import BlogListContainer from './components/containers/blog-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="users">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={UserListContainer} />
          </Route>
          <Route path=":userId" component={UserProfileContainer} />
        </Route>

        <Route path="/special">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={SpecialListContainer} />
          </Route>
        </Route>
      <Route path="/blog">
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={BlogListContainer} />
        </Route>
      </Route>

    </Route>
  </Router>
);
