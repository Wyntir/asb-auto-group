// Alternative Approach: Convert to Server Component
// src/app/inventory/[id]/page.js

import { getVehicleById, getSimilarVehicles, getAllVehicles } from '@/lib/data';
import VehicleDetailHeader from '@/components/ui/VehicleDetailHeader';
import VehicleGallery from '@/components/ui/VehicleGallery';
import VehicleCard from '@/components/ui/VehicleCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

// Generate static paths for all vehicles
export function generateStaticParams() {
    const vehicles = getAllVehicles();
    return vehicles.map((vehicle) => ({
        id: vehicle.id,
    }));
}

export function generateMetadata({ params }) {
    const vehicle = getVehicleById(params.id);
    return {
        title: vehicle ? `${vehicle.title} | ASB Auto Group` : 'Vehicle Details | ASB Auto Group',
        description: vehicle ? vehicle.description : 'View detailed information about our government surplus vehicles.',
    };
}

export default function VehicleDetailPage({ params }) {
    const vehicle = getVehicleById(params.id);
    const similarVehicles = vehicle ? getSimilarVehicles(params.id) : [];

    if (!vehicle) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Vehicle Not Found</h1>
                <p className="text-gray-600 mb-8">The vehicle you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                <Link href="/inventory" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Browse Our Inventory
                </Link>
            </div>
        );
    }

    const { details } = vehicle;

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-6">
                    <Link href="/inventory" className="text-red-600 hover:text-red-700 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Inventory
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <VehicleDetailHeader vehicle={vehicle} />

                        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Gallery</h2>
                            <VehicleGallery images={[vehicle.image]} />
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Description</h2>
                            <p className="text-gray-700 mb-6">{vehicle.description}</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">Features</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                {details.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">Vehicle History</h3>
                            <p className="text-gray-700">{details.history}</p>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Details</h2>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                                    <div className="text-gray-600">VIN</div>
                                    <div className="text-gray-900 font-medium">{details.vin}</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                                    <div className="text-gray-600">Exterior</div>
                                    <div className="text-gray-900 font-medium">{details.exterior}</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                                    <div className="text-gray-600">Interior</div>
                                    <div className="text-gray-900 font-medium">{details.interior}</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                                    <div className="text-gray-600">Transmission</div>
                                    <div className="text-gray-900 font-medium">{details.transmission}</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                                    <div className="text-gray-600">Drivetrain</div>
                                    <div className="text-gray-900 font-medium">{details.drivetrain}</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                                    <div className="text-gray-600">Engine</div>
                                    <div className="text-gray-900 font-medium">{details.engine}</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                                    <div className="text-gray-600">Fuel Type</div>
                                    <div className="text-gray-900 font-medium">{details.fuelType}</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-gray-600">Fuel Economy</div>
                                    <div className="text-gray-900 font-medium">{details.fuelEconomy}</div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button
                                    href={`/contact?vehicle=${vehicle.id}`}
                                    variant="primary"
                                    className="w-full mb-3"
                                >
                                    Contact About This Vehicle
                                </Button>
                                <Button
                                    href="/financing"
                                    variant="secondary"
                                    className="w-full"
                                >
                                    Apply for Financing
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Vehicles */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Vehicles</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {similarVehicles.map((vehicle) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}