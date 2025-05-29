"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { userProduct } from "../types/products";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    background-color: white;
    
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
    overflow: hidden;
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

        div{
            position: relative;
            

        }

        p{
            position: absolute;
            top: 32px;
            left: -5px;
            font-size: 16px;
            text-align:center;
            font-weight: 600;
            background-color: red;
            color: #F3F5F6;
            border-radius: 50%;
            width: 27px;
            height: auto;
        }
`

export default function Header() {
    //const items = useLocalStorage().getItems<userProduct>();
    
    const [items, setItems ]= useState(useLocalStorage().getItems<userProduct>());
    let totalVal = "0";
    useEffect ( ()=>{
        //const items = useLocalStorage().getItems<userProduct>();
        totalVal = items.reduce((sum, item) => sum + item.qntd, 0).toFixed(0);

    }, [items]);

    return (
        <HeaderWrapper>
            <ImageWrapper>
                <Link
                    href={"/"}
                >
                    <Image
                        src="/imgs/shop_icon.png"
                        alt="Screenshot"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Link>
            </ImageWrapper>
            <CartInputWrapper>
                <input
                    placeholder="Procurando por algo específico?"
                />
                <div>
                    <Link
                        href={"/cart"}
                    >
                        <Image
                            src="/imgs/cart_icon.png"
                            alt="Screenshot"
                            width={48}
                            height={48}
                        />
                        <p>{totalVal}</p>
                    </Link>
                    
                </div>



            </CartInputWrapper>


        </HeaderWrapper>

    )
}