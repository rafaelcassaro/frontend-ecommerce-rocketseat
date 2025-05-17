'use client'

import Image from "next/image"
import Link from "next/link"
import styled, { css } from "styled-components"

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

const Text = styled.p`
    margin: 6px 6px;
    text-align: left;
    font-size: 20.56px;
    ${(props: any) => {
        switch (props.$mode) {
            case "botton":
                return css`
                font-weight: 600;
                color: #09090A;
                border-bottom: 0;
            `;
            default:
                return css`
                border-bottom: 1px solid #DCE2E5;
            `;
        }
    }}
`


export default function ProductsCard() {

    return (
        <Card>
            <Link href="#">
            </Link>
            <Image
                src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
                alt="Screenshot"
                width={328.96}
                height={385.5}
            />

            <div>
                <Text>WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive</Text>
                <Text $mode="botton">R$ 40,00</Text>
            </div>
        </Card>
    )
}