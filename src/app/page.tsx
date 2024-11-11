import Products from '@/components/products/Products';
import Hero from '@/components/Hero';

export default function Home() {

  return (
    <main className=" flex-1 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Products />
    </main>
  );
}
