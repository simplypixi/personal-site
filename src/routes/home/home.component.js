import React from 'react';
import Helmet from 'react-helmet';

import Page from '../../shared/components/page/page.component';

import { Container, Email } from './home.styles.js';

const Home = ({ pageContext: { data } }) => {

  return (
    <Page>
      <Helmet title={data.name} />
      <Container>
        <Email href={`mailto:${data.email}`}>{data.email}</Email>
      </Container>
    </Page>
  )
};

export default Home;
