// src/Service/productService.ts
import { database } from '../firebase';  // Import the database instance
import { ref, get } from 'firebase/database';

// Define the Product type
export type Product = {
    id: string;
    discount: number;
    image: string;
    price: number;
};

export const fetchProductsFromDatabase = async (): Promise<Product[]> => {
    const productsRef = ref(database, 'Products');  // Points to the Products node
    const snapshot = await get(productsRef);

    if (!snapshot.exists()) {
        return [];
    }

    const productsData = snapshot.val();

    // Convert the object into an array of Product items
    const productList = Object.keys(productsData).map((key) => ({
        id: key,
        ...productsData[key],
    })) as Product[];

    return productList;
};









// import { firestore } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';

// // Define Product type
// export interface Product {
//   id: number;
//   title: string;
//   discount: number;
//   price: number;
//   imageUrl: string;
// }

// // Fetch products from Firestore
// export const fetchProducts = async (): Promise<Product[]> => {
//   const productsCollection = collection(firestore, 'products');
//   const productSnapshot = await getDocs(productsCollection);
//   const productList = productSnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   })) as Product[];
//   return productList;
// };
