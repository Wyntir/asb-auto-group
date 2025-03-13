// src/components/ui/VehicleCard.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function VehicleCard({ vehicle }) {
    const { id, title, image, badge, specs, description, price } = vehicle;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative">
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                />
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded uppercase tracking-wider absolute top-4 left-4">
          {badge}
        </span>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
                <div className="flex items-center space-x-4 mb-4">
                    {specs.map((spec, index) => (
                        <span key={index} className="text-sm text-gray-500">{spec}</span>
                    ))}
                </div>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center mt-6">
                    <span className="text-2xl font-bold text-red-600">${price.toLocaleString()}</span>
                    <Button href={`/inventory/${id}`} variant="primary">
                        View Details
                    </Button>
                </div>
            </div>
        </div>
    );
}