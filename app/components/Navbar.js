import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <div className="flex items-baseline space-x-4">
                    <Link href="/" className="text-xl font-bold">Food-Rest-Startup</Link>
                    <Link href="/seller" className="hover:text-gray-300 border-b-2 border-white pb-1 hover:border-gray-300"   
                        >Seller</Link>
                    <Link href="/products" className="hover:text-gray-300 border-b-2 border-white pb-1 hover:border-gray-300"
                        >All Products</Link>
                </div>
                <div className="space-x-4">
                    <Link href="/login" className="hover:text-gray-300">Login</Link>
                    <Link href="/cart" className="hover:text-gray-300">Cart</Link>
                    <Link href="/orders" className="hover:text-gray-300">Orders</Link>
                    <Link href="/profile" className="hover:text-gray-300">Profile</Link>
                    <Link href="/logout" className="hover:text-gray-300">Logout</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;