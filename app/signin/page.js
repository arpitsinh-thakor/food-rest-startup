
export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-2xl font-bold mb-4">Sign In</div>
        <form className="flex flex-col space-y-4">
            <input
                type="email"
                    placeholder="Email"
                    className="p-2 border rounded"
                    required
            />
            <input
                type="password"
                placeholder="Password"
                className="p-2 border rounded"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Sign In
            </button>
        </form>
    </div>
  );
}