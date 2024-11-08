
"use client"
import React, { useEffect, useState } from 'react';
import { fetchProductsFromDatabase, Product } from '../Service/productService';

// Utility function to convert gs:// URL to HTTP URL
const getImageUrl = (gsUrl: string): string => {
    const baseUrl = "https://firebasestorage.googleapis.com/v0/b/beauty-shop-91c90.appspot.com/o/";
    const encodedPath = encodeURIComponent(gsUrl.split('/')[3]); // Extract the image name
    return `${baseUrl}${encodedPath}?alt=media`;
};
const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const fetchedProducts = await fetchProductsFromDatabase();
                setProducts(fetchedProducts);
            } catch (err) {
                setError("Failed to load products. Please try again later.");
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Our Products</h1>
            <div className="flex flex-wrap gap-5">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="m-5 border border-gray-300 p-4 w-52 text-center shadow-lg rounded-lg"
                    >
                        <img
                            src={getImageUrl(product.image)} // Convert gs:// URL to HTTP URL
                            alt={product.id}
                            className="w-full h-36 object-contain rounded-md"
                        />
                        <h2 className="text-lg font-medium my-2">{product.id}</h2>
                        <p className="text-green-600">Discount: {product.discount}%</p>
                        <p className="font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default ProductsPage;

// import React, { useEffect, useState } from 'react';
// import { fetchProducts, Product } from '../Service/productService';

// const ProductsPage: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);

//     useEffect(() => {
//         const loadProducts = async () => {
//             const fetchedProducts = await fetchProducts();
//             setProducts(fetchedProducts);
//         };
//         loadProducts();
//     }, []);

//     return (
//         <div>
//             <h1>Our Products</h1>
//             <div >
//                 {products.map((product) => (
//                     <div key={product.id} style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
//                         <img src={product.imageUrl} alt={product.name} style={{ width: '150px', height: '150px' }} />
//                         <h2>{product.title}</h2>
//                         <p>{product.discount}</p>
//                         <p>${product.price}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductsPage;
