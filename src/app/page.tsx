import Image from "next/image";
import Hero from "./components/hero";
import ProductCard from "./products/page";

export default async function Home() {
  
 
     
  return (
    <div>
    
      <Hero />
      <ProductCard />
      
      </div>
  )
}