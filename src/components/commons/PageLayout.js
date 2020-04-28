import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Header } from 'components/commons';

const MainContent = styled.main`
  background: pink;
  margin-top: 120px;
`;

const PageLayout = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>

      <MainContent className="container">{children}</MainContent>
    </Fragment>
  );
};

export { PageLayout };
