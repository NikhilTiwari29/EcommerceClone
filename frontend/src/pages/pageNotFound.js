import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  const imageUrl = 'https://rb.gy/klnv39';

  return (
    <Layout>
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Oops! It seems you've taken a wrong turn.</p>
        <p>The page you are looking for doesn't exist or may have been moved.</p>
        <p>Don't worry, you can always find your way back to the <Link to="/">home page</Link>.</p>
        {imageUrl && <img src={imageUrl} alt="404 Illustration" className="img-fluid" />}
      </div>
    </Layout>
  );
}

export default PageNotFound;
