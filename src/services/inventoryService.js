import { db, storage } from "../firebase";

import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
  deleteDoc,
  doc
} from "firebase/firestore";




export async function getInventory() {
  const snapshot = await getDocs(collection(db, "inventory"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}



export async function addInventoryItem({
  name,
  stock,
 
}) {
  
 

  
  await addDoc(collection(db, "inventory"), {
    name,
    stock,
    createdAt: Timestamp.now()
  });
}

export async function deleteInventoryItem(id) {
  await deleteDoc(doc(db, "inventory", id));
}
