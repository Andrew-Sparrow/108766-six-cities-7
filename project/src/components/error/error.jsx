import React from 'react';
import withLayout from '../hocs/with-layout';

function Error() {
  return (
    <div style={{margin: 'auto', width: '200px'}}>
      <h1 style={{textAlign: 'center'}}>404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
}

const withLayoutMain = withLayout(Error);
export default withLayoutMain;
