'use client'
import styled, { css } from "styled-components";
import FiltersTypes from "./ui/home/filters-types";
import ProductsCard from "./ui/home/products-card";

const BgColor = styled.div`
  min-height: 100vh;
  padding-bottom: 36px;
`
const CardsArea = styled.div`
  padding-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default function Home() {


  return (

    <BgColor >
      <main >
        <FiltersTypes/>
        <CardsArea>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
        </CardsArea>
      </main>
    </BgColor >
  );
}