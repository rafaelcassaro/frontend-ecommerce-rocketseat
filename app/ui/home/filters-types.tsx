"use client"

import styled from "styled-components"


const FilterBar = styled.div `
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
    color: var(--font-color-grey);
`

const FilterList = styled.ul`
    display: flex;
    gap: 40px;
    list-style: none;
    text-transform: uppercase;
    
`

const OrdersList = styled.div`
    font-size: 14px;
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