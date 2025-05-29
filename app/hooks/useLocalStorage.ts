import { useEffect } from "react";
import { Product, userProduct } from "../types/products";

export function useLocalStorage() {
    //localStorage.setItem("teste", "alou123"); 

    let key = "teste";

    function showLocal() {
        if (typeof window !== 'undefined' || localStorage.getItem(key) !== null) {

            let localResult = JSON.parse(localStorage.getItem(key) || '""');
            let prodsList = [];
            console.log(localStorage.getItem(key));
            console.log(localResult);
            prodsList.push(...localResult);
            console.log(prodsList);

            console.log("-------------------------");

        }
        return null

    }

    function addItem(product: Product) {
        
        if (typeof window === 'undefined') return null;
        const localStrg = localStorage.getItem(key);

        if (localStrg) {
            const updated = { ...product, qntd: 1 };
            const localResult = JSON.parse(localStrg);

            //REMOVE ITEM IF EXISTS
            for(let prod of localResult) {
                if(prod.id === updated.id){
                    //prod.qntd++;
                    localResult.splice(localResult.indexOf(prod),1)
                    localStorage.setItem(key, JSON.stringify(localResult));
                    return ;
                }
            }

            localResult.push(updated);
            localStorage.setItem(key, JSON.stringify(localResult));
            return ;
        }



        const prodsList: userProduct[] = [];
        const updated = { ...product, qntd: 1 };
        prodsList.push(updated);
        localStorage.setItem(key, JSON.stringify(prodsList));


        // let localResult = JSON.parse(teste);
        // localResult.push(product);

        // // let prodsList = [];

        // // prodsList.push(...localResult);
        // // prodsList.push(product);

        // console.log(localResult);

        // localStorage.setItem(key, JSON.stringify(localResult));
    }

    // function getItems() {

    //     if (typeof window !== 'undefined' && localStorage.getItem(key) !== null) {

    //         let localResult = JSON.parse(localStorage.getItem(key) || '""');
    //         let prodsList = [];
    //         prodsList.push(...localResult)
    //         return prodsList;

    //     }
    //     return null

    // }


    function getItems<T>(): T[] {
        if (typeof window !== 'undefined') {
            const localData = localStorage.getItem(key);

            if (localData) {
                try {
                    const parsed = JSON.parse(localData);
                    return Array.isArray(parsed) ? parsed : [];
                } catch (error) {
                    console.error('Erro ao fazer parse do localStorage:', error);
                    return [];
                }
            }
        }
        return [];
    }

    return {
        getItems,
        addItem,
        showLocal
    }
}