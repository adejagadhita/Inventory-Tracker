import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const LOW_STOCK_LIMIT = 5;

export const getDashboardData = async () => {
    const inventoryRef = collection(db, "inventory");
    const salesRef = collection(db, "sales");

    const inventorySnap = await getDocs(inventoryRef);
    const salesSnap = await getDocs(salesRef);

    let stockInStorage = 0;
    let lowOnStock = 0;

    inventorySnap.forEach( doc => {
        const item = doc.data();

        stockInStorage += item.stock || 0;

        if (item.stock < LOW_STOCK_LIMIT) {
            lowOnStock++;
        }
           
    });


    let totalSold = 0;

    salesSnap.forEach(doc => {
        const sale = doc.data();
        totalSold += sale.sold || 0;
    
    });

    const newOrders = 100;

    return {
        stockInStorage,
        lowOnStock,
        totalSold,
        newOrders
    }

}