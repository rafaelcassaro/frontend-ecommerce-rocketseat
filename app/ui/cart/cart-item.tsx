'use client'

import Image from "next/image";
import styled from "styled-components";
import icon from '@/app/ui/icons/trash.svg';

const Card = styled.div`
    display: flex;
    width: 59.11rem;
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
const ItemTitle = styled.div`
    font-weight: 300;
    font-size: 1.6062rem;
`
const ItemDescription = styled.p`
    font-weight: 400;
    font-size: 0.9637rem;
    margin-bottom: 1.6062rem;
`
const Total = styled.div`
    font-weight: 600;
    font-size: 1.285rem;
    color: var(--font-color-black);
`


export default function CartItem() {

    return (
        <Card>
            <Image
                src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
                alt="Screenshot"
                width={328.96}
                height={271.135}
                style={{
                    borderRadius: '8px 0 0 8px' ,
                }}
            />
            <CardData>
                <div>
                    <ItemTitle>Caneca de cerâmica rústica</ItemTitle>
                    <Image src={icon} alt="Logo" width={24} height={24} />
                </div>

                <ItemDescription>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</ItemDescription>

                <div>
                    <select name="select">
                        <option value="valor1">1</option>
                        <option value="valor2" >2</option>
                        <option value="valor3">3</option>
                    </select>
                    <Total>RS 40,00</Total>
                </div>

            </CardData>
        </Card>
    )
}