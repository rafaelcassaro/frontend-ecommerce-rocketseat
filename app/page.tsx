import FiltersTypes from "./ui/home/filters-types";
import ProductsCard from "./ui/home/products-card";
import { Product } from "./types/products";
import { BgColor, CardsArea } from "./ui/home/card-area";

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 },
  });
  const products= await res.json();
  return (

    <BgColor >
      <main >
        <FiltersTypes/>
        <CardsArea>
          {products.map ( (product: Product) => 
            <ProductsCard key={product.id} product={product}/>
          )}
        </CardsArea>
      </main>
    </BgColor >
  );
}