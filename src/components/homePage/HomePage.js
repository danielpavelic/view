import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/upload">+ Upload</Link>
    </div>
  );
};

export default HomePage;