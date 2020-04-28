import React from 'react';
import { PageLayout } from 'components/commons';
import { CardProduct } from 'components/commons';
import styled from 'styled-components';

const Grid = styled.div`
  background: beige;
  display: grid;
  justify-items: center;
`;

function Home() {
  return (
    <PageLayout>
      <h1>Standard E-commerce</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        voluptates iusto aut mollitia possimus animi sed aperiam. Voluptas eum
        ratione nostrum officiis nihil! Recusandae perspiciatis asperiores,
        consectetur culpa iure quibusdam!
      </p>
      <Grid>
        <CardProduct
          title="Egghead sticker pack"
          category="T-shirt"
          price="14"
        />
        <CardProduct
          title="Egghead sticker pack"
          category="T-shirt"
          price="14"
        />
        <CardProduct
          title="Egghead sticker pack"
          category="T-shirt"
          price="14"
        />
        <CardProduct
          title="Egghead sticker pack"
          category="T-shirt"
          price="14"
        />
      </Grid>
    </PageLayout>
  );
}

export default Home;
