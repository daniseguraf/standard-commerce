import React from 'react';
import styled from 'styled-components';

const CardContent = styled.article`
  border: 1px solid #dadada;
  border-radius: 4px;
  box-sizing: border-box;
  text-decoration: none;
  padding: 1rem;
  height: 400px;
  max-height: 40vh;
`;

const CardBody = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
`;

const Category = styled.p`
  font-size: 1.2rem;
`;

const Price = styled.p`
  font-size: 1.6rem;
  color: peru;
`;

const CardProduct = ({ title, category, price }) => {
  return (
    <CardContent>
      <CardBody>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <Price>S/{price}</Price>
      </CardBody>
    </CardContent>
  );
};

export { CardProduct };
