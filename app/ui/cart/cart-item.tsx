'use client'

import Image from "next/image";
import styled from "styled-components";
import icon from '@/app/ui/icons/trash.svg';
import { userProduct } from "@/app/types/products";
import { ChangeEvent, useState } from "react";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";


const Card = styled.div`
    display: flex;
    width: 945.76px;
    height: 271.135px;
    margin-top: 20px;
`
const CardData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.285rem;
    width: 38.55rem;
    background-color: #FFFFFF;
    border-radius: 0 8px 8px 0;
    color: var(--font-color-dark);

    div{
        display: flex;
        justify-content: space-between;
        
        select{
            font-size: 1.285rem;
            font-weight: 400;
            color: var(--font-color-grey);
            border: 1px solid #A8A8B3;
            border-radius: 8px;
            width:4.4172rem;
            padding: 8px;
            background-color: #F3F5F6;
        }

    }
`
const ItemTitle = styled.h2`
    font-weight: 300;
    font-size: 1.6062rem;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 80px;
    margin-bottom: 8px;
`
const ItemDescription = styled.p`
    font-weight: 400;
    font-size: 0.9637rem;
    margin-bottom: 1.6062rem;
    overflow: auto;
    text-overflow: ellipsis;
`
const Total = styled.div`
    font-weight: 600;
    font-size: 1.285rem;
    color: var(--font-color-black);
`


export default function CartItem() {
    const {setItemQuantity, totalValue, getItems, removeItem} = useLocalStorage("userCart");
    const [cartList, setCartList] = useState<userProduct[]>(getItems());

    function handleRemoveItem(item: userProduct) {
        removeItem(item);
        setCartList(getItems());
    }

    function handleQuantity(item: userProduct, e: ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        const number = parseInt(value);
        setItemQuantity(item, number);
    }

    return (
        <>
            <p style={{ color: "var(--font-color-dark)", fontWeight: "300", margin: "16px 0" }}>Total (3 produtos)
                <span style={{ fontWeight: "500" }}> R${totalValue}</span>
            </p>
            {cartList !== null ?
                cartList.map((item) => (
                    <Card key={item.id}>
                        <Image
                            src={item.image}
                            alt="Screenshot"
                            width={328.96}
                            height={271.135}
                            style={{
                                borderRadius: '8px 0 0 8px',
                                width: '328.96px',
                                height: 'auto',
                            }}
                            priority={false}
                        />
                        <CardData>
                            <div>
                                <ItemTitle>{item.title}</ItemTitle>
                                <Image src={icon} alt="Logo" width={24} height={24} onClick={() => handleRemoveItem(item)} />
                            </div>

                            <ItemDescription>{item.description} </ItemDescription>

                            <div>
                                <select name="select"
                                    id="itemQntd"
                                    defaultValue={item.qntd}
                                    onChange={(e) => handleQuantity(item, e)}
                                >
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3">3</option>
                                </select>
                                <Total>RS {item.price}</Total>
                            </div>

                        </CardData>
                    </Card>
                ))

                : <p>O carrinho está vazio.</p>}
        </>
    )
}