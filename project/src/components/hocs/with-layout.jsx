import React from 'react';
import Layout from '../layout/layout';

const withLayout = (Component) =>
  function wrapper(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };

withLayout.displayName = 'withLayout';

export default withLayout;
