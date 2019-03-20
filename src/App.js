import React, { Fragment, useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import {
  Home,
  NotFound,
  Quote,
  QuotesList,
} from './pages';

import {
  Footer,
  Header,
  Loader,
} from './components';

import Preview from './Preview';

import { client } from './prismic-configuration';

const App = () => {

  const [layout, setLayoutData] = useState(null);

  useEffect(() => {
   const fetchData = async () => {
     // We fetch the Layout document on Prismic API
     const result = await client.getSingle('layout');
     if (result) {
       // And set the state when data is loaded
       return setLayoutData(result);
     }
     console.warn('Layout document not found. Make sure it exists in your Prismic API');
   };
     fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Fragment>
        <Header layout={layout && layout.data} />
        <Switch>
          <Route exact path="/about" component={Loader} />
          <Route exact path="/quotes" component={QuotesList} />
          <Route exact path="/" component={Home} />
          <Route exact path="/preview" component={Preview} />
          <Route exact path="/quotes/:uid" component={Quote} />
          <Route component={NotFound} />
        </Switch>
        <Footer layout={layout && layout.data} />
      </Fragment>
    </BrowserRouter>
  )
}

export default App;
