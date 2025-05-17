

import ButtonBack from "../ui/button-back";
import BuyCard from "../ui/cart/buy-card";
import CartItem from "../ui/cart/cart-item";

export default function Page() {


    return (
        <main style={{ display: "flex" ,paddingTop: "25px", justifyContent:"space-between"}}>
            <div>
                <ButtonBack />
                <p style={{fontSize:"24px", fontWeight:"500", color:"var(--font-color-dark)", marginTop:"16px"}}>SEU CARRINHO</p>
                <p style={{color:"var(--font-color-dark)", fontWeight:"300", margin:"16px 0"}}>Total (3 produtos) 
                    <span style={{fontWeight:"500"}}> R$161,00</span>
                </p>
                <CartItem />
            </div>
            <div>
                <BuyCard />
            </div>
        </main>

    )
}