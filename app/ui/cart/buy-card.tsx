'use client'

import { useLocalStorage } from "@/app/hooks/useLocalStorage"
import Link from "next/link"
import styled from "styled-components"

const Card = styled.section`
    display: flex;
    flex-direction: column;
    width: 28.27rem;
    height: 56.2188rem;
    background-color: white;
    padding: 1.285rem;
    gap: 1.285rem;
    h2{
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.6062rem;
        color: var(--font-color-dark);
        margin-bottom: 0.9637rem;
    }

    div{
        display: flex;
        justify-content: space-between;
    }
    p{
        font-weight: 400;
        font-size: 1.285rem;
        color: var(--font-color-dark);
    }
    span{
        font-weight: 600;
        font-size: 1.285rem;
        color: var(--font-color-dark);
    }
    button{
        height: 44px;
        background-color: #51B853;
        color: #F5F5FA;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.285rem;
        border: 0;
        border-radius: 4px;
        cursor: pointer;
    }
`
const BottonLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    text-transform: uppercase;
    gap: 0.375rem;
    p{
        font-size: 1.125rem;
        color: var(--font-color-grey);
    }
`


export default function BuyCard() {
    const { totalValue } = useLocalStorage("userCart");
    const freight = (parseFloat(totalValue) + 40).toFixed(2);

    return (
        <Card>
            <h2>resumo do pedido</h2>
            <div>
                <p>Subtotal de produtos</p>
                <p>R$ {totalValue}</p>
            </div>
            <div>
                <p>Entrega</p>
                <p>R$ 40,00</p>
            </div>
            <hr />
            <div>
                <span>Total</span>
                <span>R$ {freight}</span>
            </div>
            <button>Finalizar a compra</button>

            <BottonLinks>
                <Link
                    href={"#"}
                >
                    <p>Ajuda</p>
                </Link>
                <Link
                    href={"#"}
                >
                    <p>reembolsos</p>
                </Link>
                <Link
                    href={"#"}
                >
                    <p>entregas e frete</p>
                </Link>
                <Link
                    href={"#"}
                >
                    <p>trocas e devoluções</p>
                </Link>
            </BottonLinks>
        </Card>
    )
}