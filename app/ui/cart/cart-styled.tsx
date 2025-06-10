'use client'

import styled from "styled-components";

export const CartArea = styled.main`
display: flex; 
padding-top: 25px; 
justify-content: space-between ;

  @media (max-width: 1439px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 10px;
  }
`