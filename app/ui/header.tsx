"use client"

import Image from "next/image";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
   
    width: 1440px;
    margin: 0 auto;
    

`


const ImageWrapper = styled.div`

    width: 80px;
    height: 80px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`

const CartInputWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    
    input{
            height: 42px;
            width: 352px;
            background-color: #F3F5F6;
            padding-left: 16px;
            font-size: 14px;
            border-radius: 8px;
            border: 0;
            color: var(--font-color-grey);
        }
    
`

export default function Header() {

    return (
        <HeaderWrapper>
            <ImageWrapper>
                <Image
                    src="/imgs/shop_icon.png"
                    alt="Screenshot"
                    fill
                />
            </ImageWrapper>
            <CartInputWrapper>
                <input
                    placeholder="Procurando por algo específico?"
                />
                
                <Image
                    src="/imgs/cart_icon.png"
                    alt="Screenshot"
                    width={48}
                    height={48}
                />


            </CartInputWrapper>


        </HeaderWrapper>

    )
}