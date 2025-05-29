"use client"
import { useLocalStorage } from "@/app/hooks/useLocalStorage"
import { Product } from "@/app/types/products"
import styled from "styled-components"

const AddCartButton = styled.button`
    margin-top: auto;
    background-color: #115D8C;
    font-size: 20.56px;
    color: #F5F5FA;
    font-weight: 500;
    height: 56.54px;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
`

export default function AddCardButton({product}:{product:Product}) {
    return (
        <AddCartButton onClick={() => useLocalStorage().addItem(product)}>
            Adicionar ao carrinho
        </AddCartButton>
    )
}