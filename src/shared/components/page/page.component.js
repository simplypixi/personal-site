import React from 'react';

import GlobalStyle from '../../globalStyle';

const Page = ({ children }) => (
  <>  
    <GlobalStyle />
    {children}
  </>
);

export default Page;
