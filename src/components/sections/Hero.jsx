// src/components/sections/Hero.jsx
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <div className="relative bg-gray-900">
            <div className="absolute inset-0 overflow-hidden">
                <img src="/images/hero-bg.jpg" alt="Police cars" className="w-full h-full object-cover opacity-40" />
            </div>
            <div className="container mx-auto px-4 py-24 relative z-10">
                <div className="max-w-2xl">
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded uppercase tracking-wider mb-4 inline-block">
            Government Surplus Specialists
          </span>
                    <h1 className="text-4xl font-bold text-white mb-4">Premium Ex-Government & Police Vehicles</h1>
                    <p className="text-lg text-gray-300 mb-8">
                        Specialized in decommissioned police cars and seized vehicles at competitive prices
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button href="/inventory" variant="primary">
                            View Inventory
                        </Button>
                        <Button href="/contact" variant="outline">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
