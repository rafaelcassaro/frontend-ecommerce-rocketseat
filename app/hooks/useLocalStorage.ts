import { Product, userProduct } from "../types/products";

export function useLocalStorage() {
    let key = "userCart";

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
    }

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