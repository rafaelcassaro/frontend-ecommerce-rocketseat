'use client'

import { useState } from "react";
import ButtonBack from "../ui/button-back";
import BuyCard from "../ui/cart/buy-card";
import CartItem from "../ui/cart/cart-item";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { userProduct } from "../types/products";

export default function Page() {
    const [items, setItems] = useState(useLocalStorage().getItems<userProduct>());
    const totalVal = items.reduce((sum, item) => sum + (item.price*item.qntd) , 0).toFixed(2);

    return (
        <main style={{ display: "flex", paddingTop: "25px", justifyContent: "space-between" }}>
            <div>
                <ButtonBack />
                <p style={{ fontSize: "24px", fontWeight: "500", color: "var(--font-color-dark)", marginTop: "16px" }}>SEU CARRINHO</p>
                <CartItem items={items} setItems={setItems} totalVal={totalVal}/>
            </div>
            <div>
                <BuyCard totalVal={totalVal}/>
            </div>
        </main>

    )
}