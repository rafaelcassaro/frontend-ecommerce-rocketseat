'use client'

import styled from "styled-components"

export const BgColor = styled.div`
  min-height: 100vh;
  padding-bottom: 36px;
`
export const CardsArea = styled.div`
  padding-top: 32px;
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  gap: 2rem;

  @media (max-width: 700px) {
    place-items: center;
  }
`