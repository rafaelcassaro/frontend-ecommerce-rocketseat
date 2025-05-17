"use client"

import Image from "next/image"
import styled from "styled-components"
import AddCardButton from "./add-card-button"

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
const ItemCategory = styled.p`
    font-size: 20.56px;
    font-weight: 400;
    color: var(--font-color-dark);
`
const ItemPrice = styled.p`
    color: var(--font-color-black);
    font-size: 25.7px;
    font-weight: 600;
`

const ItemFrete = styled.p`
    font-size: 15.42px;
    font-weight: 400;
    color: var(--font-color-dark);
`
const ItemDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: var(--font-color-dark);
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
    p{
        margin-top: 1rem;
    }

`

export default function ItemCardDescription() {

    return (
        <Section>
            <Image
                src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
                alt="Screenshot"
                width={800}
                height={725}
            />
            <Infos>
                <ItemCategory>Caneca</ItemCategory>

                <NamePrice>
                    <h2>Caneca de cerâmica rústica</h2>
                    <ItemPrice>R$ 40,00</ItemPrice>
                </NamePrice>

                <ItemFrete>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</ItemFrete>

                <Description>
                    <h3>Descrição</h3>
                    <ItemDescription>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</ItemDescription>
                </Description>

                <AddCardButton />
            </Infos>
        </Section>
    )
}