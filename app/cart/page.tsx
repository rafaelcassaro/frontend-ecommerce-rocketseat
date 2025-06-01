import ButtonBack from "../ui/button-back";
import BuyCard from "../ui/cart/buy-card";
import CartItem from "../ui/cart/cart-item";

export default function Page() {
  
    return (
        <main style={{ display: "flex", paddingTop: "25px", justifyContent: "space-between" }}>
            <div>
                <ButtonBack />
                <p style={{ fontSize: "24px", fontWeight: "500", color: "var(--font-color-dark)", marginTop: "16px" }}>SEU CARRINHO</p>
                <CartItem />
            </div>
            <div>
                <BuyCard/>
            </div>
        </main>

    )
}