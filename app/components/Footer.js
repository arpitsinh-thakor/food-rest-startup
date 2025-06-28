import React from 'react'

const Footer = () => {
  return (
    <div 
      className="bg-gray-800 text-white py-4 mt-auto"
      style={{ position: 'relative', bottom: 0, width: '100%' }}      
        >
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2025 Food Rest Startup. All rights reserved.
        </p>
      </div>
        <div className="container mx-auto text-center mt-4">
            <p className="text-xs">
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
    </div>
            

  )
}

export default Footer