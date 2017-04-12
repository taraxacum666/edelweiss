import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../views/blog-list';
import * as blogApi from '../../api/blog-api';
import store from '../../store';
import { getPostsList } from '../../actions/blog-actions';

const BlogListContainer = React.createClass({

    componentDidMount: function() {
        blogApi.getPosts();
        store.dispatch(getPostsList('posts', 'Научный дневник'));
    },

    render: function() {
        return (
            <BlogList blog={this.props.posts}/>
        );
    }

});

const mapStateToProps = function(store) {
    return {
        posts: store.blogState.posts
    };
};

export default connect(mapStateToProps)(BlogListContainer);
