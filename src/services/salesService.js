import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  Timestamp
} from "firebase/firestore";

// 🔹 Ambil semua sales
export async function getSales() {
  const snapshot = await getDocs(collection(db, "sales"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// 🔹 Tambah sales baru
export async function createSale(productId, sold, date) {
  const productRef = doc(db, "inventory", productId);
  const productSnap = await getDoc(productRef);

  if (!productSnap.exists()) {
    throw new Error("Produk tidak ditemukan");
  }

  const productData = productSnap.data();

  // ✅ simpan sales
  await addDoc(collection(db, "sales"), {
    productId,
    productName: productData.name, // ⭐ INI PENTING
    sold,
    date: Timestamp.fromDate(new Date(date)),
    createdAt: Timestamp.now()
  });

  // ✅ kurangi stok
  await updateDoc(productRef, {
    stock: productData.stock - sold
  });
}