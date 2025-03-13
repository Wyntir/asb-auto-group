// src/components/layout/Navbar.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-gray-800 to-gray-900 border-b-2 border-red-600">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <div className="text-white font-bold text-xl mr-2">ASB</div>
                        <div className="bg-red-600 text-white px-2 py-1 rounded text-sm">AUTO GROUP</div>
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-white hover:text-red-400 transition duration-300">
                            Home
                        </Link>
                        <Link href="/inventory" className="text-white hover:text-red-400 transition duration-300">
                            Inventory
                        </Link>
                        <Link href="/about" className="text-white hover:text-red-400 transition duration-300">
                            About Us
                        </Link>
                        <Link href="/financing" className="text-white hover:text-red-400 transition duration-300">
                            Financing
                        </Link>
                        <Link href="/contact" className="text-white hover:text-red-400 transition duration-300">
                            Contact
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
