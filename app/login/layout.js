
export default function LoginLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center 
        bg-gradient-to-r from-orange-400 to-yellow-400
      mx-auto rounded-lg shadow-lg h-screen">
      {children}
    </div>
  );
}
