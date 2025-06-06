"use client"

import Image from "next/image"
import styled, { css } from "styled-components"
import AddCardButton from "./add-card-button"
import { Product } from "@/app/types/products"

interface Texts {
    $mode: 'price' | 'category' | 'freight' | 'description';

}

const Section = styled.section`
    display: flex;
    max-height: 745px;
    margin: 0 auto;
    gap: 2rem;
    padding-top: 25px;
`
const NamePrice = styled.div`
    font-size: 41.12px;
    font-weight: 300;
    margin: 30px 0;
`
const Text = styled.p<Texts>`
    ${(text) => {
        switch (text.$mode) {
            case "price":
                return css`
                color: var(--font-color-black);
                font-size: 25.7px;
                font-weight: 600;
                `
            case "category":
                return css`
                font-size: 20.56px;
                font-weight: 400;
                color: var(--font-color-dark);                            
                `
            case "freight":
                return css`
                font-size: 15.42px;
                font-weight: 400;
                color: var(--font-color-dark);                
                `
            case "description":
                return css`
                font-size: 18px;
                font-weight: 400;
                color: var(--font-color-dark);
                margin-top: 1rem;
                `
        }
    }}
`
const Infos = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        font-size: 41.12px;
        font-weight: 300;
        color: var(--font-color-dark);
    }
    h3{
        color: var(--font-color-grey);
        font-size: 20.56px;
        font-weight: 500;
        text-transform: uppercase;
    }
`
const Description = styled.div`
    margin-top: 4rem;
`

export default function ItemCardDescription({ product }: { product: Product }) {
    return (
        <Section>
            <Image
                priority={false}
                src={product.image}
                alt="Screenshot"
                width={800}
                height={725}
                style={{
                    width: '800px',
                    height: 'auto',
                }}


            />
            <Infos>
                <Text $mode="category">{product.category}</Text>

                <NamePrice>
                    <h2>{product.title}</h2>
                    <Text $mode="price">R$ {product.price}</Text>
                </NamePrice>

                <Text $mode="freight">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</Text>

                <Description>
                    <h3>Descrição</h3>
                    <Text $mode="description">{product.description}</Text>
                </Description>

                <AddCardButton product={product} />
            </Infos>
        </Section>
    )
}
