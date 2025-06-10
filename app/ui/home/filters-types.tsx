'use client'

import styled from "styled-components"


const FilterBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    color: var(--font-color-grey);
    
`
const FilterList = styled.ul`
    display: flex;
    gap: 2.5rem;
    list-style: none;
    text-transform: uppercase;
    font-size: 1.285rem;
    @media (max-width: 768px) {
        font-size: 16px;
    }
     @media (max-width: 540px) {
        display: none;
    }
    
`
const OrdersList = styled.div`
    font-size: 1.125rem;
    @media (max-width: 768px) {
        font-size: 16px;
    }
   
`


export default function FiltersTypes() {



    return (

        <FilterBar>
            <FilterList>
                <li>Todos os produtos</li>
                <li>Camisetas</li>
                <li>Canecas</li>
            </FilterList>
            <OrdersList>
                <p>Organizar por</p>
            </OrdersList>
        </FilterBar>
    )
}