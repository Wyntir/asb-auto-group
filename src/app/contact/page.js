// src/app/contact/page.js
// Converted to a server component for static export

import Link from 'next/link';

export const metadata = {
    title: 'Contact Us | ASB Auto Group',
    description: 'Contact ASB Auto Group about our government surplus vehicles and services.',
};

export default function ContactPage() {
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
                    <p className="text-gray-600 mb-8">We&apos;re here to help with any questions about our government surplus vehicles.</p>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-600">(555) 123-4567</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">johanryu08@gmail.com</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
                            <p className="text-gray-600">4606 Ontario St<br />Ames, IA 50014</p>
                        </div>
                    </div>

                    {/* Static Contact Form */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                        <p className="mb-6 text-gray-700">
                            To contact us about a vehicle or with any questions, please email us at{' '}
                            <a href="mailto:johanryu08@gmail.com" className="text-red-600 hover:text-red-700 font-medium">
                                johanryu08@gmail.com
                            </a>{' '}
                            or call us at <span className="font-medium">(555) 123-4567</span>.
                        </p>

                        <form
                            action="https://formspree.io/f/johanryu08@gmail.com"
                            method="POST"
                            className="mt-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
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
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="inquiryType" className="block text-gray-700 font-medium mb-2">Inquiry Type</label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
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
                                            defaultChecked
                                            className="mr-2 text-red-600 focus:ring-red-600"
                                        />
                                        <span className="text-gray-700">Email</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="preferredContact"
                                            value="phone"
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
                                        className="mr-2 h-5 w-5 text-red-600 focus:ring-red-600 rounded"
                                    />
                                    <span className="text-gray-700">Subscribe to our newsletter for updates on new inventory and special offers</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Google Maps section */}
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

                    {/* Business Hours section */}
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