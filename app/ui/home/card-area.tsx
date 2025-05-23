'use client'

import styled from "styled-components"

export const BgColor = styled.div`
  min-height: 100vh;
  padding-bottom: 36px;
`
export const CardsArea = styled.div`
  padding-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`