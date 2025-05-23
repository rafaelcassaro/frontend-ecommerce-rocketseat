import { notFound } from "next/navigation";
import { Product } from "../types/products";
import ButtonBack from "../ui/button-back";
import ItemCardDescription from "../ui/item/item-card-description";

export const revalidate = 600
 
// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths


export async function generateStaticParams() {
    const posts: Product[] = await fetch('https://fakestoreapi.com/products').then((res) =>
        res.json()
    )
    
    return posts.map((post: Product) => ({
        id: post.id.toString(),
    }))
}


export default async function Page({ params, }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) return notFound();
        const product: Product = await res.json();
        return (
        <main style={{ paddingTop: "25px" }}>
            <ButtonBack />
            
            <ItemCardDescription product={product}/>
        </main>
    )
    } catch (e) {
        console.error('Erro ao buscar produto:', e);
        return notFound(); // fallback seguro
    }
    
    
}