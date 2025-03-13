// First, install EmailJS
// npm install @emailjs/browser

// Then update your contact page:
// src/app/contact/page.js
'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { getVehicleById } from '@/lib/data';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const searchParams = useSearchParams();
    const vehicleId = searchParams.get('vehicle');
    const [vehicle, setVehicle] = useState(null);
    const formRef = useRef();
    const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        preferredContact: 'email',
        inquiryType: vehicleId ? 'vehicle' : 'general',
        newsletter: false
    });

    useEffect(() => {
        if (vehicleId) {
            const vehicleData = getVehicleById(vehicleId);
            setVehicle(vehicleData);
            if (vehicleData) {
                setFormData(prev => ({
                    ...prev,
                    message: `I'm interested in the ${vehicleData.title} priced at $${vehicleData.price.toLocaleString()}.`
                }));
            }
        }
    }, [vehicleId]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // These IDs come from your EmailJS account
        // SERVICE_ID: Your email service (e.g. gmail)
        // TEMPLATE_ID: The email template you create
        // PUBLIC_KEY: Your EmailJS public key
        emailjs.sendForm(
            'service_zyj9y55',
            'template_a4t5u9l',
            formRef.current,
            'VEkgyEAErnhIg3izV'
        )
            .then((result) => {
                setFormStatus({
                    submitted: true,
                    success: true,
                    message: 'Thanks for contacting us! We will get back to you soon.'
                });

                // Reset form if not a vehicle inquiry
                if (!vehicleId) {
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        message: '',
                        preferredContact: 'email',
                        inquiryType: 'general',
                        newsletter: false
                    });
                }
                setIsSubmitting(false);
            }, (error) => {
                console.error('Email error:', error);
                setFormStatus({
                    submitted: true,
                    success: false,
                    message: 'There was an error sending your message. Please try again or contact us directly.'
                });
                setIsSubmitting(false);
            });
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <Link href="/" className="text-red-600 hover:text-red-700 inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
                    <p className="text-gray-600 mb-8">We're here to help with any questions about our government surplus vehicles.</p>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Card content... */}
                    </div>

                    {vehicle && (
                        <div className="bg-gray-200 border-l-4 border-red-600 p-4 mb-8 rounded">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-700">You're inquiring about: <strong>{vehicle.title}</strong></p>
                            </div>
                        </div>
                    )}

                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                        {formStatus.submitted && (
                            <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {formStatus.message}
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name *</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="inquiryType" className="block text-gray-700 font-medium mb-2">Inquiry Type</label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                >
                                    <option value="vehicle">Vehicle Inquiry</option>
                                    <option value="general">General Question</option>
                                    <option value="financing">Financing</option>
                                    <option value="trade">Trade-In Value</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-6">
                                <p className="block text-gray-700 font-medium mb-2">Preferred Contact Method</p>
                                <div className="flex space-x-6">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="preferredContact"
                                            value="email"
                                            checked={formData.preferredContact === 'email'}
                                            onChange={handleChange}
                                            className="mr-2 text-red-600 focus:ring-red-600"
                                        />
                                        <span className="text-gray-700">Email</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="preferredContact"
                                            value="phone"
                                            checked={formData.preferredContact === 'phone'}
                                            onChange={handleChange}
                                            className="mr-2 text-red-600 focus:ring-red-600"
                                        />
                                        <span className="text-gray-700">Phone</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="newsletter"
                                        checked={formData.newsletter}
                                        onChange={handleChange}
                                        className="mr-2 h-5 w-5 text-red-600 focus:ring-red-600 rounded"
                                    />
                                    <span className="text-gray-700">Subscribe to our newsletter for updates on new inventory and special offers</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
                        <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5902452283707!2d-93.61771972395349!3d41.9909815711599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee70a512c27c55%3A0xa40a8edf8f578825!2s4606%20Ontario%20St%2C%20Ames%2C%20IA%2050014!5e0!3m2!1sen!2sus!4v1710376712345!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                            <p className="font-medium">ASB Auto Group</p>
                            <p className="text-gray-600">4606 Ontario St, Ames, IA 50014</p>
                            <a
                                href="https://www.google.com/maps/dir//4606+Ontario+St,+Ames,+IA+50014/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-700 mt-2 inline-block"
                            >
                                Get Directions →
                            </a>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="grid grid-cols-2 border-b border-gray-200">
                                <div className="p-4 font-medium">Monday - Friday</div>
                                <div className="p-4">9:00 AM - 7:00 PM</div>
                            </div>
                            <div className="grid grid-cols-2 border-b border-gray-200">
                                <div className="p-4 font-medium">Saturday</div>
                                <div className="p-4">10:00 AM - 6:00 PM</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="p-4 font-medium">Sunday</div>
                                <div className="p-4">Closed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}