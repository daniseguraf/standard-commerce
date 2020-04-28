import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Header } from 'components/commons';

const Content = styled.main`
  max-width: 500px;
  margin: 120px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway Regular';
  }

  h1 {
    text-align: center;
  }
`;

const PageLayout = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      <Content>{children}</Content>
    </Fragment>
  );
};

export { PageLayout };
