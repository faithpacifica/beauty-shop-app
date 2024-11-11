'use client';
import { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../../Service/productService';
// import Image from 'next/image';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    getProducts();
  }, []);

  return (
    <section className="container py-20">

      <div className="products-title text-xl  mb-[30px] flex flex-col items-center">
        <p className="title-top text-[#737373]">Featured Products</p>
        <h2 className="text-3xl uppercase my-[10px] font-bold text-[#252B42]">
          Bestseller Products
        </h2>
        <p className="title-bottom text-[#737373]">
          Make your skin shine fresh
        </p>
      </div>

      <div className="grid grid-cols-4 justify-between gap-8">
        {products.map((product, index) => (
          <div key={index} className="shadow-lg overflow-hidden ">
            <div className="image-container w-full h-[250px]">
              {/* TODO:img da qoldirsa buladimi */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="product-desc flex flex-col items-center p-6">
              <h5 className="text-[#252B42] text-2xl font-bold">
                {product.title}{' '}
              </h5>
              <p className="text-[#737373] italic text-xl">
                {product.category}
              </p>
              <p className="inline-flex gap-2 italic ">
                <span className="text-[#737373]">${product.price}</span>
                <span className="text-[#252B42] font-bold ">
                  ${product.discount}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

// import React, { useEffect, useState } from 'react';
// import { fetchProductsFromDatabase, Product } from '../../Service/productService';

// const ProductsPage: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const loadProducts = async () => {
//             try {
//                 const fetchedProducts = await fetchProductsFromDatabase();
//                 setProducts(fetchedProducts);
//             } catch (err) {
//                 setError("Failed to load products. Please try again later.");
//                 console.error("Error fetching products:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         loadProducts();
//     }, []);

//     if (loading) return <p>Loading products...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div>
//             <h1 className="text-2xl font-semibold mb-4">Our Products</h1>
//             <div className="flex flex-wrap gap-5">
//                 {products.map((product) => (
//                     <div
//                         key={product.id}
//                         className="m-5 border border-gray-300 p-4 w-52 text-center shadow-lg rounded-lg"
//                     >
//                         <img
//                             src={product.image} // Convert gs:// URL to HTTP URL
//                             alt={product.id}
//                             className="w-full h-36 object-contain rounded-md"
//                         />
//                         <h2 className="text-lg font-medium my-2">{product.name}</h2>
//                         <p className="text-green-600">Discount: {product.discount}%</p>
//                         <p className="font-bold">${product.price}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

// }
// export default ProductsPage;
