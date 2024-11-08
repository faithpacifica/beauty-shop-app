import Products from "@/pages/Product";

export default function Home() {
  // const age: number = 'twenty';

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Products/>
    </div>
  );
}
