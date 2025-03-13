// src/components/ui/VehicleGallery.jsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function VehicleGallery({ images = [] }) {
    const [selectedImage, setSelectedImage] = useState(0);

    // Fallback images if none provided
    const galleryImages = images.length > 0 ? images : [
        '/images/vehicles/placeholder-1.jpg',
        '/images/vehicles/placeholder-2.jpg',
        '/images/vehicles/placeholder-3.jpg',
        '/images/vehicles/placeholder-4.jpg',
    ];

    return (
        <div className="mb-8">
            <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                <Image
                    src={galleryImages[selectedImage]}
                    alt="Vehicle image"
                    fill
                    className="object-contain bg-gray-100"
                />
            </div>
            <div className="grid grid-cols-4 gap-2">
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className={`h-24 relative rounded-md overflow-hidden cursor-pointer ${selectedImage === index ? 'ring-2 ring-red-600' : ''}`}
                        onClick={() => setSelectedImage(index)}
                    >
                        <Image
                            src={image}
                            alt={`Vehicle thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}