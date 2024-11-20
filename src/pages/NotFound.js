import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800">
          <h1 className="text-9xl m-0">404</h1>
          <p className="text-2xl mb-8">Oops! The page you are looking for does not exist.</p>
          <Link to="/" className="text-xl text-blue-500 hover:underline">Go Back Home</Link>
        </div>
      );
}

export default NotFound;