const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; 2025 Food Rest Startup. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Follow us on{' '}
          <a href="https://instagram.com" className="text-blue-400 hover:underline">
            Instagram
          </a>{' '}
          and{' '}
          <a href="https://facebook.com" className="text-blue-400 hover:underline">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
