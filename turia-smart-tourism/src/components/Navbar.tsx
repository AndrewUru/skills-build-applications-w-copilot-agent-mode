import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-lg font-bold">
                    TurIA
                </div>
                <div className="space-x-4">
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link href="/login" className="text-white hover:text-gray-300">Login</Link>
                    <Link href="/signup" className="text-white hover:text-gray-300">Signup</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;