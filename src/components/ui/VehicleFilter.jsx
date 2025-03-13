// src/components/ui/VehicleFilter.jsx
'use client';

import { useState } from 'react';

export default function VehicleFilter({ onFilterChange }) {
    const [priceRange, setPriceRange] = useState([10000, 50000]);
    const [yearRange, setYearRange] = useState([2015, 2023]);
    const [mileageRange, setMileageRange] = useState([0, 100000]);
    const [vehicleType, setVehicleType] = useState({
        police: false,
        seized: false,
        government: false,
        military: false
    });
    const [make, setMake] = useState({
        ford: false,
        dodge: false,
        chevrolet: false,
        toyota: false
    });
    const [drivetrain, setDrivetrain] = useState({
        awd: false,
        rwd: false,
        fwd: false,
        fourByFour: false
    });

    const handlePriceChange = (e) => {
        const newValue = [priceRange[0], parseInt(e.target.value)];
        setPriceRange(newValue);
        applyFilters({ priceRange: newValue });
    };

    const handleVehicleTypeChange = (e) => {
        const { name, checked } = e.target;
        const newVehicleType = { ...vehicleType, [name]: checked };
        setVehicleType(newVehicleType);
        applyFilters({ vehicleType: newVehicleType });
    };

    const handleMakeChange = (e) => {
        const { name, checked } = e.target;
        const newMake = { ...make, [name]: checked };
        setMake(newMake);
        applyFilters({ make: newMake });
    };

    const handleDrivetrainChange = (e) => {
        const { name, checked } = e.target;
        const newDrivetrain = { ...drivetrain, [name]: checked };
        setDrivetrain(newDrivetrain);
        applyFilters({ drivetrain: newDrivetrain });
    };

    const applyFilters = (changedFilters = {}) => {
        const currentFilters = {
            priceRange,
            vehicleType,
            make,
            drivetrain,
            ...changedFilters
        };

        if (onFilterChange) {
            onFilterChange(currentFilters);
        }
    };

    const resetFilters = () => {
        setPriceRange([10000, 50000]);
        setVehicleType({
            police: false,
            seized: false,
            government: false,
            military: false
        });
        setMake({
            ford: false,
            dodge: false,
            chevrolet: false,
            toyota: false
        });
        setDrivetrain({
            awd: false,
            rwd: false,
            fwd: false,
            fourByFour: false
        });

        if (onFilterChange) {
            onFilterChange(null); // null indicates reset to default
        }
    };


    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Filter Vehicles</h3>

            {/* Vehicle Type */}
            <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Vehicle Type</h4>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="police"
                            checked={vehicleType.police}
                            onChange={handleVehicleTypeChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">Police Vehicles</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="seized"
                            checked={vehicleType.seized}
                            onChange={handleVehicleTypeChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">Seized Vehicles</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="government"
                            checked={vehicleType.government}
                            onChange={handleVehicleTypeChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">Government Fleet</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="military"
                            checked={vehicleType.military}
                            onChange={handleVehicleTypeChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
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
                        step="1000"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>${priceRange[0].toLocaleString()}</span>
                        <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Make */}
            <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Make</h4>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="ford"
                            checked={make.ford}
                            onChange={handleMakeChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">Ford</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="dodge"
                            checked={make.dodge}
                            onChange={handleMakeChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">Dodge</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="chevrolet"
                            checked={make.chevrolet}
                            onChange={handleMakeChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">Chevrolet</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="toyota"
                            checked={make.toyota}
                            onChange={handleMakeChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">Toyota</span>
                    </label>
                </div>
            </div>

            {/* Drivetrain */}
            <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Drivetrain</h4>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="awd"
                            checked={drivetrain.awd}
                            onChange={handleDrivetrainChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">All-Wheel Drive</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="rwd"
                            checked={drivetrain.rwd}
                            onChange={handleDrivetrainChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">Rear-Wheel Drive</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="fwd"
                            checked={drivetrain.fwd}
                            onChange={handleDrivetrainChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">Front-Wheel Drive</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="fourByFour"
                            checked={drivetrain.fourByFour}
                            onChange={handleDrivetrainChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span className="ml-2 text-gray-700">4x4</span>
                    </label>
                </div>
            </div>

            <button
                onClick={() => applyFilters()}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Apply Filters
            </button>
            <button
                onClick={resetFilters}
                className="w-full mt-2 bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded transition duration-300">
                Reset Filters
            </button>
        </div>
    );
}