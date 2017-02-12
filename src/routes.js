import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/homePage/HomePage';
import AboutPage from './components/aboutPage/AboutPage';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import Upload from './components/uploadPage/UploadPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="upload" component={Upload}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);