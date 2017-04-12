import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="data-list">

            {props.posts.map(blog => {

                return (
                    <div key={posts.id} className="data-list-item">
                        <div className="details">{posts.name}
                            <p>Группа препарата: {posts.title}</p>
                            <p>Описание препарата: {posts.description}</p>
                        </div>
                    </div>

                );

            })}

        </div>
    );
}
