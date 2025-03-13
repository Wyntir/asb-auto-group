// src/components/sections/FeaturedVehicles.jsx
'use client';

import Link from 'next/link';
import VehicleCard from '@/components/ui/VehicleCard';
import { useState, useEffect } from 'react';

export default function FeaturedVehicles() {
    const [featuredVehicles, setFeaturedVehicles] = useState([]);

    useEffect(() => {
        // This is a simplified approach - you would typically fetch this from an API
        // For now, we'll use mock data
        setFeaturedVehicles([
            {
                id: 'ford-interceptor-2019',
                title: '2019 Ford Police Interceptor Utility',
                image: '/images/vehicles/ford-interceptor.jpg',
                badge: 'Ex-Police',
                specs: ['3.7L V6', '65,000 miles', 'All-Wheel Drive'],
                description: 'Former highway patrol vehicle with complete service records. Features upgraded suspension, heavy-duty alternator, and spotlights.',
                price: 24995
            },
            {
                id: 'dodge-charger-2020',
                title: '2020 Dodge Charger Pursuit',
                image: '/images/vehicles/dodge-charger.jpg',
                badge: 'Seized Vehicle',
                specs: ['5.7L HEMI V8', '42,300 miles', 'Rear-Wheel Drive'],
                description: 'Former detective unit with low miles. Includes police package with performance upgrades, heavy-duty cooling, and upgraded electrical system.',
                price: 29500
            }
        ]);
    }, []);

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Featured Vehicles</h2>
                <Link href="/inventory" className="text-red-600 hover:text-red-800 font-bold">
                    View All Inventory →
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {featuredVehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
        </div>
    );
}