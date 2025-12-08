import {
    collection,
    query,
    orderBy,
    where,
    limit,
    getDocs

} from "firebase/firestore";

import { db} from "../firebase";
import { cloneElement } from "react";

// 1.new orders

// 2. inventory
export async function getInventorySumary() {
    const snapshot = await getDocs(collection(db, "inventory"));

    let totalTypes = 0;
    let totalStock = 0;

    snapshot.forEach(doc => {
        const data = doc.data();
        totalTypes++;
        totalStock += data.stock || 0;
    });
    return {
        totalTypes,
        totalStock
    };
}

// 3. 
