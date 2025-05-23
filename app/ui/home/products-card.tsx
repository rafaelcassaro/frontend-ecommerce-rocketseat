'use client'

import { Product } from "@/app/types/products";
import Image from "next/image"
import Link from "next/link"
import styled, { css } from "styled-components"

interface Props {
    $mode: 'botton' | 'top';
}

const Card = styled.div`
    background-color: white;
    border-radius: 8px;
    width: 21rem;
    color: #41414D;
    overflow: hidden;
    padding: 8px;
    text-align: center;
    cursor: pointer;
`

const Text = styled.p<Props>`
    margin: 6px 6px;
    text-align: left;
    font-size: 20.56px;
    ${(props) => {
        switch (props.$mode) {
            case "botton":
                return css`
                font-weight: 600;
                color: #09090A;
                border-bottom: 0;
            `;
            case "top":
                return css`
                border-bottom: 1px solid #DCE2E5;
            `;
        }
    }}
`


export default function ProductsCard({ product }: { product: Product }) {

    return (
        <Card>
            <Link href={`/${product.id}`}>

                <Image
                    src={product.image}
                    alt={product.title}
                    width={328.96}
                    height={385.5}
                    priority={false}
                />

                <div>
                    <Text $mode="top">{product.title}</Text>
                    <Text $mode="botton">R$ {product.price}</Text>
                </div>
            </Link>
        </Card>
    )
}