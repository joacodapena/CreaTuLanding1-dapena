import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Traer productos, si la categoria es undefined trae todos, sino filtra por categoría
export const fetchProducts = async (categoryId) => {
  try {
    const productsRef = collection(db, "products");
    let q;

    if (categoryId) {
      q = query(productsRef, where("category", "==", categoryId));
    } else {
      q = productsRef;
    }

    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No existe el producto con ese ID");
      return null;
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};
