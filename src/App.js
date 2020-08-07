import React from 'react';
import {
  BrowserRouter, Switch, Route, useLocation,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import routes from './router';


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const location = useLocation();

  // React.useEffect(
  //   () => {
  //     window.analytics.page();
  //   },
  //   [location],
  // ); 

  return (
        <Route {...rest} render = {(props) => (
            <Layout>
                <Component { ...props } />
            </Layout>
        )}>
        </Route>
  );
};


const App = () => (
    <BrowserRouter>
        <Switch>
            {routes.map((routeIndex, index) => (
              routeIndex.routes.map((routeComponent, key) => (
                <AppRoute key={ key }
                    exact path={ routeComponent.path }
                    layout={ routeIndex.layout }
                    component={ routeComponent.component }
                />
              ))
            ))}
        </Switch>
    </BrowserRouter>
);

export default App;
