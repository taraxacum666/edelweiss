import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../views/blog-list';
import * as blogApi from '../../api/blog-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const BlogListContainer = React.createClass({

    componentDidMount: function() {
        blogApi.getPosts();
        store.dispatch(loadSearchLayout('blog', 'Научный дневник'));
    },

    render: function() {
        return (
            <BlogList posts={this.props.posts}/>
        );
    }

});

const mapStateToProps = function(store) {
    return {
        posts: store.blogState.posts
    };
};

export default connect(mapStateToProps)(BlogListContainer);
