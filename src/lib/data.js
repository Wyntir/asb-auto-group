// src/lib/data.js

// Define the featured vehicles array first
export const featuredVehicles = [
    {
        id: 'ford-interceptor-2019',
        title: '2019 Ford Police Interceptor Utility',
        image: '/images/vehicles/ford-interceptor.jpg',
        badge: 'Ex-Police',
        specs: ['3.7L V6', '65,000 miles', 'All-Wheel Drive'],
        description: 'Former highway patrol vehicle with complete service records. Features upgraded suspension, heavy-duty alternator, and spotlights. Recently serviced with new brakes and tires.',
        price: 24995,
        details: {
            vin: '1FM5K8AR9KGA12345',
            exterior: 'Black',
            interior: 'Charcoal Black',
            transmission: 'Automatic',
            drivetrain: 'All-Wheel Drive',
            engine: '3.7L V6',
            fuelType: 'Gasoline',
            fuelEconomy: '17 City / 23 Highway',
            features: [
                'Police Package',
                'Heavy-Duty Alternator',
                'Spot Lights',
                'Reinforced Frame',
                'Push Bar',
                'LED Emergency Lights (Disconnected)',
                'Heavy-Duty Cooling System',
                'Power Driver Seat',
                'Bluetooth Connectivity',
                'Backup Camera'
            ],
            history: 'Single government owner, complete maintenance records, no accidents'
        }
    },
    {
        id: 'dodge-charger-2020',
        title: '2020 Dodge Charger Pursuit',
        image: '/images/vehicles/dodge-charger.jpg',
        badge: 'Seized Vehicle',
        specs: ['5.7L HEMI V8', '42,300 miles', 'Rear-Wheel Drive'],
        description: 'Former detective unit with low miles. Includes police package with performance upgrades, heavy-duty cooling, and upgraded electrical system. Clean interior with minimal wear.',
        price: 29500,
        details: {
            vin: '2C3CDXAT1LH123456',
            exterior: 'White',
            interior: 'Black',
            transmission: 'Automatic',
            drivetrain: 'Rear-Wheel Drive',
            engine: '5.7L HEMI V8',
            fuelType: 'Gasoline',
            fuelEconomy: '16 City / 25 Highway',
            features: [
                'Police Pursuit Package',
                'Performance Brakes',
                'Heavy-Duty Cooling',
                'Upgraded Electrical System',
                'Push Bar Ready',
                'Spotlight (Disconnected)',
                'Performance Suspension',
                'Touchscreen Infotainment',
                'Backup Camera'
            ],
            history: 'Former detective unit, complete service history, no accidents'
        }
    }
];

// Get all vehicles (would typically fetch from an API or database)
export function getAllVehicles() {
    // The featured vehicles we already have plus some additional ones
    return [
        ...featuredVehicles,
        {
            id: 'chevy-tahoe-2018',
            title: '2018 Chevrolet Tahoe Police Pursuit',
            image: '/images/vehicles/chevy-tahoe.jpg',
            badge: 'Ex-Police',
            specs: ['5.3L V8', '78,000 miles', '4WD'],
            description: 'Former police patrol vehicle equipped with pursuit package. Features heavy-duty suspension, engine cooling, and upgraded alternator. Recently serviced and ready for civilian use.',
            price: 22995,
            details: {
                vin: '1GNSKBKC4JR123456',
                exterior: 'Black',
                interior: 'Gray',
                transmission: 'Automatic',
                drivetrain: '4WD',
                engine: '5.3L V8',
                fuelType: 'Gasoline',
                fuelEconomy: '15 City / 21 Highway',
                features: [
                    'Police Pursuit Package',
                    'Heavy-Duty Suspension',
                    'Upgraded Alternator',
                    'Spot Lights',
                    'Tow Package',
                    'Power Driver Seat',
                    'Bluetooth Connectivity',
                    'Backup Camera'
                ],
                history: 'Single government owner, complete maintenance records, minor front-end repair'
            }
        },
        {
            id: 'ford-f150-2017',
            title: '2017 Ford F-150 XLT Government Fleet',
            image: '/images/vehicles/ford-f150.jpg',
            badge: 'Gov Fleet',
            specs: ['3.5L EcoBoost V6', '62,400 miles', '4x4'],
            description: 'Former government fleet truck with complete service records. Well-maintained with recent service. Features tow package and upgraded payload capacity.',
            price: 26500,
            details: {
                vin: '1FTEW1EP5HFA98765',
                exterior: 'White',
                interior: 'Gray Cloth',
                transmission: 'Automatic',
                drivetrain: '4x4',
                engine: '3.5L EcoBoost V6',
                fuelType: 'Gasoline',
                fuelEconomy: '17 City / 23 Highway',
                features: [
                    'Fleet Package',
                    'Tow Package',
                    'Backup Camera',
                    'Bluetooth Connectivity',
                    'Heavy-Duty Payload Package',
                    'Power Windows/Locks',
                    'Cruise Control',
                    'Trailer Sway Control'
                ],
                history: 'Fleet vehicle, regular maintenance, no accidents'
            }
        },
        {
            id: 'dodge-durango-2019',
            title: '2019 Dodge Durango Special Service',
            image: '/images/vehicles/dodge-durango.jpg',
            badge: 'Ex-Government',
            specs: ['3.6L V6', '52,000 miles', 'AWD'],
            description: 'Former special service vehicle used by federal agency. Includes special service package with heavy-duty components and upgraded electrical system.',
            price: 28750,
            details: {
                vin: '1C4RDJAG6KC765432',
                exterior: 'Granite Gray',
                interior: 'Black',
                transmission: 'Automatic',
                drivetrain: 'All-Wheel Drive',
                engine: '3.6L V6',
                fuelType: 'Gasoline',
                fuelEconomy: '18 City / 25 Highway',
                features: [
                    'Special Service Package',
                    'Heavy-Duty Cooling',
                    'Upgraded Alternator',
                    'Heavy-Duty Brakes',
                    'Spot Light (Disconnected)',
                    'Third Row Seating',
                    'Backup Camera',
                    'Bluetooth Connectivity'
                ],
                history: 'Single government owner, all service records available, no accidents'
            }
        }
    ];
}

// Get a specific vehicle by ID
export function getVehicleById(id) {
    const allVehicles = getAllVehicles();
    return allVehicles.find(vehicle => vehicle.id === id) || null;
}

// Get similar vehicles (excluding the current one)
export function getSimilarVehicles(currentId, limit = 3) {
    const allVehicles = getAllVehicles();
    return allVehicles
        .filter(vehicle => vehicle.id !== currentId)
        .slice(0, limit);
}

// Get vehicles by type (police, seized, etc.)
export function getVehiclesByType(type, limit = null) {
    const allVehicles = getAllVehicles();
    const filtered = allVehicles.filter(vehicle => {
        const badgeLower = vehicle.badge.toLowerCase();

        switch(type.toLowerCase()) {
            case 'police':
                return badgeLower.includes('police') || badgeLower.includes('pursuit');
            case 'seized':
                return badgeLower.includes('seized');
            case 'government':
                return badgeLower.includes('gov') || badgeLower.includes('government');
            default:
                return true;
        }
    });

    return limit ? filtered.slice(0, limit) : filtered;
}

// Search vehicles by keyword
export function searchVehicles(keyword) {
    if (!keyword || keyword.trim() === '') {
        return getAllVehicles();
    }

    const searchTerm = keyword.toLowerCase().trim();
    const allVehicles = getAllVehicles();

    return allVehicles.filter(vehicle => {
        return (
            vehicle.title.toLowerCase().includes(searchTerm) ||
            vehicle.description.toLowerCase().includes(searchTerm) ||
            vehicle.badge.toLowerCase().includes(searchTerm) ||
            vehicle.specs.some(spec => spec.toLowerCase().includes(searchTerm))
        );
    });
}