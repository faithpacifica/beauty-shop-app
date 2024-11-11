// fetchProducts.ts
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export interface Product {
  discount: number;
  gender: string;
  image: string;
  price: number;
  title: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const productsCollection = collection(db, 'products'); // Change "products" if your collection name is different
  const productSnapshot = await getDocs(productsCollection);
  const products = productSnapshot.docs.map((doc) => doc.data() as Product);
  return products;
};

// import { database } from '../firebase'; // Import the database instance
// import { ref, get } from 'firebase/database';

// // Define the Product type
// export type Product = {
//   name: string;
//   id: number;
//   discount: number;
//   image: string;
//   price: number;
//   gender:string;
//   category:string;
// };

// export const fetchProductsFromDatabase = async (): Promise<Product[]> => {
//   const productsRef = ref(database, 'Products'); // Points to the Products node
//   const snapshot = await get(productsRef);

//   if (!snapshot.exists()) {
//     return [];
//   }

//   const productsData = snapshot.val();
//   // console.log(productsData, 'product datam');
//   // Convert the object into an array of Product items
//   const productList = Object.keys(productsData).map((key) => ({
//     id: key,
//     ...productsData[key],
//   })) as Product[];

//   return productList;
// };
