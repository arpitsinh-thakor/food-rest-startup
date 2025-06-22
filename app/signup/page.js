export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 
            className="text-2xl font-bold mb-4"
            >Sign Up</h1>
        <form className="flex flex-col space-y-4">
            <input type="text" placeholder="First Name" className="p-2 border rounded" />
            <input type="text" placeholder="Last Name" className="p-2 border rounded" />
            <input type="email" placeholder="Email" className="p-2 border rounded" />
            <input type="password" placeholder="Password" className="p-2 border rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
        </form>
        </div>
    );
}