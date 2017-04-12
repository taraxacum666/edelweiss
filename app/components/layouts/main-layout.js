import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app container">
      <header className="primary-header row">
          <div className="col-md-4 logo">
              <img src="img/logo.jpg" alt="logo"/>
          </div>
          <div className="contacts col-md-8">
              <p>Наши контакты</p>
              <p>Наш ГалаФон: 1488-1488-1488</p>
          </div>
      </header>
      <section className="content row">
          <aside className="primary-aside col-md-3">
            <ul>
              <li><Link to="/" activeClassName="active">Главная</Link></li>
              <li><Link to="/users" activeClassName="active">Пациенты</Link></li>
              <li><Link to="/special" activeClassName="active">Специальные средства</Link></li>
              <li><Link to="/blog" activeClassName="active">Научный дневник</Link></li>
            </ul>
          </aside>
          <main className="col-md-8">
            {props.children}
          </main>
      </section>
    </div>
    );
}
