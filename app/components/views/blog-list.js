import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="data-list">

            {props.posts.map(blog => {

                return (
                    <div key={blog.id} className="data-list-item">
                        <div className="details">{blog.name}
                            <p>Группа препарата: {blog.title}</p>
                            <p>Описание препарата: {blog.description}</p>
                        </div>
                    </div>

                );

            })}

        </div>
    );
}
