// src/components/ui/VehicleDetailHeader.jsx
import Image from 'next/image';
import Button from './Button';

export default function VehicleDetailHeader({ vehicle }) {
    const { title, image, badge, price, specs } = vehicle;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative h-96">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 rounded uppercase tracking-wider">
          {badge}
        </span>
            </div>
            <div className="p-6">
                <div className="md:flex md:justify-between md:items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                        <div className="flex flex-wrap gap-4 mb-4">
                            {specs.map((spec, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {spec}
                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-center md:text-right">
                        <div className="text-3xl font-bold text-red-600 mb-2">${price.toLocaleString()}</div>
                        <div className="flex gap-2 mt-4">
                            <Button variant="primary" className="flex-1">
                                Contact About This Vehicle
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}