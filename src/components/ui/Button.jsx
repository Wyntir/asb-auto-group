// src/components/ui/Button.jsx
import Link from 'next/link';

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
    const baseClasses = "font-bold py-2 px-4 rounded transition duration-300";

    const variantClasses = {
        primary: "bg-red-600 hover:bg-red-700 text-white",
        secondary: "bg-gray-800 hover:bg-gray-900 text-white",
        outline: "bg-transparent hover:bg-white text-white hover:text-gray-900 border border-white"
    };

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
}