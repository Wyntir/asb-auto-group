// src/app/inventory/page.js
'use client';

import { getAllVehicles } from '@/lib/data';
import VehicleCard from '@/components/ui/VehicleCard';
import VehicleFilter from '@/components/ui/VehicleFilter';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Note: Metadata can't be exported from client components
// If you need metadata, it should be in a separate layout file

export default function InventoryPage() {
    const [allVehicles, setAllVehicles] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [sortOption, setSortOption] = useState('featured');

    useEffect(() => {
        const vehicles = getAllVehicles();
        setAllVehicles(vehicles);
        setFilteredVehicles(vehicles);
    }, []);

    const handleFilterChange = (filters) => {
        if (!filters) {
            // Reset to show all vehicles
            setFilteredVehicles(allVehicles);
            return;
        }

        const { priceRange, vehicleType, make, drivetrain } = filters;

        let filtered = allVehicles.filter(vehicle => {
            // Filter by price
            if (vehicle.price < priceRange[0] || vehicle.price > priceRange[1]) {
                return false;
            }

            // Filter by vehicle type
            const hasSelectedTypes = Object.values(vehicleType).some(v => v);
            if (hasSelectedTypes) {
                const badgeLower = vehicle.badge.toLowerCase();

                // Check if the vehicle matches any of the selected types
                if (vehicleType.police && !(badgeLower.includes('police') || badgeLower.includes('pursuit'))) {
                    if (!vehicleType.seized && !vehicleType.government && !vehicleType.military) {
                        return false;
                    }
                }

                if (vehicleType.seized && !badgeLower.includes('seized')) {
                    if (!vehicleType.police && !vehicleType.government && !vehicleType.military) {
                        return false;
                    }
                }

                if (vehicleType.government && !(badgeLower.includes('gov') || badgeLower.includes('government'))) {
                    if (!vehicleType.police && !vehicleType.seized && !vehicleType.military) {
                        return false;
                    }
                }

                if (vehicleType.military && !badgeLower.includes('military')) {
                    if (!vehicleType.police && !vehicleType.seized && !vehicleType.government) {
                        return false;
                    }
                }
            }

            // Filter by make
            const hasSelectedMakes = Object.values(make).some(v => v);
            if (hasSelectedMakes) {
                const titleLower = vehicle.title.toLowerCase();

                const matchesMake = (
                    (make.ford && titleLower.includes('ford')) ||
                    (make.dodge && titleLower.includes('dodge')) ||
                    (make.chevrolet && (titleLower.includes('chevrolet') || titleLower.includes('chevy'))) ||
                    (make.toyota && titleLower.includes('toyota'))
                );

                if (!matchesMake) {
                    return false;
                }
            }

            // Filter by drivetrain
            const hasSelectedDrivetrains = Object.values(drivetrain).some(v => v);
            if (hasSelectedDrivetrains) {
                const specs = vehicle.specs.join(' ').toLowerCase();

                const matchesDrivetrain = (
                    (drivetrain.awd && (specs.includes('all-wheel drive') || specs.includes('awd'))) ||
                    (drivetrain.rwd && (specs.includes('rear-wheel drive') || specs.includes('rwd'))) ||
                    (drivetrain.fwd && (specs.includes('front-wheel drive') || specs.includes('fwd'))) ||
                    (drivetrain.fourByFour && (specs.includes('4x4') || specs.includes('4wd')))
                );

                if (!matchesDrivetrain) {
                    return false;
                }
            }

            return true;
        });

        // Apply sorting
        sortVehicles(filtered, sortOption);
    };

    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);
        sortVehicles(filteredVehicles, option);
    };

    const sortVehicles = (vehicles, option) => {
        let sorted = [...vehicles];

        switch(option) {
            case 'price-low-high':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'year-newest':
                sorted.sort((a, b) => {
                    const yearA = parseInt(a.title.match(/(20\d\d)/)[0]);
                    const yearB = parseInt(b.title.match(/(20\d\d)/)[0]);
                    return yearB - yearA;
                });
                break;
            case 'year-oldest':
                sorted.sort((a, b) => {
                    const yearA = parseInt(a.title.match(/(20\d\d)/)[0]);
                    const yearB = parseInt(b.title.match(/(20\d\d)/)[0]);
                    return yearA - yearB;
                });
                break;
            case 'mileage-low-high':
                sorted.sort((a, b) => {
                    const milesA = parseInt(a.specs.find(spec => spec.includes('miles')).replace(/[^0-9]/g, ''));
                    const milesB = parseInt(b.specs.find(spec => spec.includes('miles')).replace(/[^0-9]/g, ''));
                    return milesA - milesB;
                });
                break;
            default: // featured - no sorting needed
                break;
        }

        setFilteredVehicles(sorted);
    };

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
                        <VehicleFilter onFilterChange={handleFilterChange} />
                    </div>

                    {/* Main Content */}
                    <div className="w-full md:w-3/4">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Vehicle Inventory</h1>
                        <p className="text-gray-600 mb-8">Browse our selection of premium government surplus vehicles.</p>

                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
                            <div>
                                <span className="text-gray-600">Showing {filteredVehicles.length} vehicles</span>
                            </div>
                            <div>
                                <select
                                    className="border border-gray-300 rounded p-2 text-gray-700"
                                    value={sortOption}
                                    onChange={handleSortChange}
                                >
                                    <option value="featured">Sort: Featured</option>
                                    <option value="price-low-high">Price: Low to High</option>
                                    <option value="price-high-low">Price: High to Low</option>
                                    <option value="year-newest">Year: Newest</option>
                                    <option value="year-oldest">Year: Oldest</option>
                                    <option value="mileage-low-high">Mileage: Low to High</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {filteredVehicles.length > 0 ? (
                                filteredVehicles.map((vehicle) => (
                                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                                ))
                            ) : (
                                <div className="md:col-span-2 py-12 text-center">
                                    <p className="text-gray-600 text-lg">No vehicles match your current filters.</p>
                                    <button
                                        onClick={() => handleFilterChange(null)}
                                        className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {filteredVehicles.length > 0 && (
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}