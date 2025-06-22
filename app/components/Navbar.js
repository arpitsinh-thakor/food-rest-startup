import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <Link href="/" className="text-xl font-bold">Food-Rest-Startup</Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/signin" className="hover:text-gray-300">Sign In</Link>
                    <Link href="/signup" className="hover:text-gray-300">Sign Up</Link>
                    <Link href="/seller" className="hover:text-gray-300">Seller </Link>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;