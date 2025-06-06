import { useEffect, useState } from "react";
import { Product, userProduct } from "../types/products";

export function useLocalStorage(key: string) {
    const [totalItemQntd, setTotalItemQntd] = useState<string>("0");
    const [totalValue, setTotalValue] = useState<string>("0");

    useEffect(() => {
        const getItemsQuantity = () => {
            const parsed: userProduct[] = verifyWindow();

            const total = parsed.reduce((sum, item) => sum + item.qntd, 0).toFixed(0);
            if (totalItemQntd !== total) {
                setTotalItemQntd(total);
            } else {
                setTotalItemQntd("0");
            }

        }

        getItemsQuantity();
        window.addEventListener('local-storage-changed',
            getItemsQuantity);

        return () => {
            window.removeEventListener('local-storage-changed', getItemsQuantity);
        };
    }, []);

    useEffect(() => {
        const getTotalPrice = () => {
            const parsed: userProduct[] = verifyWindow();
            const total = parsed.reduce((sum, item) => sum + (item.price * item.qntd), 0).toFixed(2);

            if (totalValue !== total) {
                setTotalValue(total);
            }
        }

        getTotalPrice();
        window.addEventListener('local-storage-changed',
            getTotalPrice);

        return () => {
            window.removeEventListener('local-storage-changed', getTotalPrice);
        };
    }, []);

    function verifyWindow() {
        //to not broke code in server side when building the app
        if (typeof window === 'undefined') {
            return null;
        } else {
            const localStrg = localStorage.getItem(key);
            if (localStrg) {
                const parsed = JSON.parse(localStrg)
                return parsed;
            }
            return [];
        }
    }

    function toggleItem(product: Product) {
        const parsed = verifyWindow();
        const updated = { ...product, qntd: 1 };

        //REMOVE ITEM IF ALREADY EXISTS
        for (const prod of parsed) {
            if (prod.id === updated.id) {
                parsed.splice(parsed.indexOf(prod), 1)
                localStorage.setItem(key, JSON.stringify(parsed));
                window.dispatchEvent(new Event('local-storage-changed'));
                return;
            }
        }

        parsed.push(updated);
        localStorage.setItem(key, JSON.stringify(parsed));
        window.dispatchEvent(new Event('local-storage-changed'));
    }

    function getItems<T>(): T[] {
        const parsed = verifyWindow();

        try {
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            console.error('Erro ao fazer parse do localStorage:', error);
            return [];
        }
    }

    function setItemQuantity(item: userProduct, number: number) {
        const parsed: userProduct[] = verifyWindow();

        const index = parsed.findIndex((product) => product.id === item.id);
        parsed[index].qntd = number;

        localStorage.setItem(key, JSON.stringify(parsed));
        window.dispatchEvent(new Event('local-storage-changed'));
    }

    function removeItem(item: userProduct) {
        const parsed: userProduct[] = verifyWindow();

        const index = parsed.findIndex((product) => product.id === item.id);
        parsed.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(parsed));
        window.dispatchEvent(new Event('local-storage-changed'));
    }


    return {
        totalItemQntd, setTotalItemQntd,
        totalValue, setTotalValue,
        getItems,
        toggleItem,
        setItemQuantity,
        removeItem
    }
}