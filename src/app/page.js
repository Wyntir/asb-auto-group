// src/app/page.js
import Hero from '@/components/sections/Hero';
import FeaturedVehicles from '@/components/sections/FeaturedVehicles';


export default function Home() {
  return (
      <main>
        <Hero />
        <FeaturedVehicles />
      </main>
  );
}