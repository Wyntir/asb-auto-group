// src/app/inventory/page.js
// Use a server component for static export

import { getAllVehicles } from '@/lib/data';
import VehicleCard from '@/components/ui/VehicleCard';
import VehicleFilter from '@/components/ui/VehicleFilter';
import Link from 'next/link';

export const metadata = {
    title: 'Inventory | ASB Auto Group',
    description: 'Browse our selection of government surplus vehicles including ex-police cars and seized vehicles.',
};

export default function InventoryPage() {
    const vehicles = getAllVehicles();

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-6">
                    <Link href="/" className="text-red-600 hover:text-red-700 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Sidebar Filters */}
                    <div className="w-full md:w-1/4">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Filter Vehicles</h3>

                            {/* Vehicle Type */}
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3 text-gray-800">Vehicle Type</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Police Vehicles</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Seized Vehicles</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Government Fleet</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Military Surplus</span>
                                    </label>
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3 text-gray-800">Price Range</h4>
                                <div>
                                    <input
                                        type="range"
                                        min="10000"
                                        max="50000"
                                        defaultValue="40000"
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                                        <span>$10,000</span>
                                        <span>$50,000</span>
                                    </div>
                                </div>
                            </div>

                            {/* Make */}
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3 text-gray-800">Make</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Ford</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Dodge</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Chevrolet</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Toyota</span>
                                    </label>
                                </div>
                            </div>

                            {/* Drivetrain */}
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3 text-gray-800">Drivetrain</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">All-Wheel Drive</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Rear-Wheel Drive</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">Front-Wheel Drive</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                                        <span className="ml-2 text-gray-700">4x4</span>
                                    </label>
                                </div>
                            </div>

                            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                                Apply Filters
                            </button>
                            <button className="w-full mt-2 bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded transition duration-300">
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full md:w-3/4">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Vehicle Inventory</h1>
                        <p className="text-gray-600 mb-8">Browse our selection of premium government surplus vehicles.</p>

                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
                            <div>
                                <span className="text-gray-600">Showing {vehicles.length} vehicles</span>
                            </div>
                            <div>
                                <select className="border border-gray-300 rounded p-2 text-gray-700">
                                    <option>Sort: Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Year: Newest</option>
                                    <option>Year: Oldest</option>
                                    <option>Mileage: Low to High</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {vehicles.map((vehicle) => (
                                <VehicleCard key={vehicle.id} vehicle={vehicle} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center">
                            <nav className="inline-flex shadow-sm">
                                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-gray-700 rounded-l hover:bg-gray-50">
                                    Previous
                                </a>
                                <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                                    1
                                </a>
                                <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-red-600 text-white hover:bg-red-700">
                                    2
                                </a>
                                <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                                    3
                                </a>
                                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-gray-700 rounded-r hover:bg-gray-50">
                                    Next
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}