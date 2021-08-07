import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { HomeView } from './views/HomeView';
import { AuthorView } from './views/AuthorView';
import { FilmsView } from './views/FilmsView';
import { NotFound } from './views/NotFound.js';
import { FilmsDetailView } from './views/FilmsDetailView';
import s from './App.module.css';

export const App = () => {
  return (
    <>
      <ul className={s.NavItem}>
        <li>
          <NavLink
            exact
            to="/"
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/author"
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Author
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/films"
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Films
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/author" component={AuthorView} />
        <Route path="/films/:filmId" component={FilmsDetailView} />
        <Route path="/films" component={FilmsView} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
