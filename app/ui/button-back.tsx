"use client"
import Image from "next/image"
import styled from "styled-components"
import icon from '@/app/ui/icons/back-icon.svg';
import Link from "next/link";


const BackButton = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--font-color-grey);
    border: 0;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    background-color: var(--bg-primary);
`

export default function ButtonBack() {

    return (
        <Link
        href={"/"}
        >
            <BackButton>
                <Image src={icon} alt="Logo" width={24} height={24} />
                <p>Voltar</p>
            </BackButton>
        </Link>
       
    )
}