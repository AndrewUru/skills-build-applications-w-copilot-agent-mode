import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to TurIA</h1>
            <p className="text-lg mb-8">Your smart tourism platform for local businesses in Valencia.</p>
            <div className="flex space-x-4">
                <Link href="/login">
                    <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</a>
                </Link>
                <Link href="/signup">
                    <a className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Sign Up</a>
                </Link>
            </div>
        </div>
    );
};

export default Home;