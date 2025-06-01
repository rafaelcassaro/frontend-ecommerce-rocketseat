import { Product, userProduct } from "../types/products";

export function useLocalStorage(key: string) {

    function setNewItem(product: Product) {

        if (typeof window === 'undefined') return null;
        const localStrg = localStorage.getItem(key);

        if (localStrg) {
            const updated = { ...product, qntd: 1 };
            const localResult = JSON.parse(localStrg);

            //REMOVE ITEM IF ALREADY EXISTS
            for (const prod of localResult) {
                if (prod.id === updated.id) {
                    localResult.splice(localResult.indexOf(prod), 1)
                    localStorage.setItem(key, JSON.stringify(localResult));
                    return;
                }
            }

            localResult.push(updated);
            localStorage.setItem(key, JSON.stringify(localResult));
            return;
        }



        const prodsList: userProduct[] = [];
        const updated = { ...product, qntd: 1 };
        prodsList.push(updated);
        localStorage.setItem(key, JSON.stringify(prodsList));
    }

    function getItems<T>(): T[] {
        if (typeof window === 'undefined') return [];
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

        return [];
    }

    function getQuantity () {
        if (typeof window === 'undefined') return "0";
      
        const localData = localStorage.getItem(key);
        if (localData) {
                const parsed:userProduct[] = JSON.parse(localData);
                const totalVal = parsed.reduce((sum, item) => sum + item.qntd, 0).toFixed(0);;
                
                return totalVal;
        }
        return "0";
    }

    function setItemQuantity( item: userProduct, number:number) {
        
        if (typeof window === 'undefined') return ;
        
        const localData = localStorage.getItem(key);
        if (localData) {
                const parsed:userProduct[] = JSON.parse(localData);
                const index = parsed.findIndex((product) => product.id === item.id);
                parsed[index].qntd = number;

                localStorage.setItem("userCart", JSON.stringify(parsed));
                window.dispatchEvent(new Event('local-storage-changed'));
                return;
        }
        return;
    }

    function removeItem( item: userProduct) {
        
        if (typeof window === 'undefined') return ;
        
        const localData = localStorage.getItem(key);
        if (localData) {
                const parsed:userProduct[] = JSON.parse(localData);
                const index = parsed.findIndex((product) => product.id === item.id);
               // parsed[index].qntd = number;
                parsed.splice(index, 1);

                localStorage.setItem("userCart", JSON.stringify(parsed));
                window.dispatchEvent(new Event('local-storage-changed'));
                return;
        }
        return;
    }

    function getTotalPrice () {
        if (typeof window === 'undefined') return "0";
        const localData = localStorage.getItem(key);

        if (localData) {
                const parsed:userProduct[] = JSON.parse(localData);
                const totalVal = parsed.reduce((sum, item) => sum + (item.price*item.qntd) , 0).toFixed(2);
                return totalVal;
        }
        return "0";
    }


    return {
        getItems,
        setNewItem,
        setItemQuantity,
        getTotalPrice,
        getQuantity,
        removeItem
    }
}