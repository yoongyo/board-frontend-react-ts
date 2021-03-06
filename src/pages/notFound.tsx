import React from 'react'
import { Link } from 'react-router-dom'




const NotFound = () => (
    <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="font-semibold text-2xl mb-3 text-white">Page Not Found</h2>
        <h4 className="font-medium text-base mb-5 text-white">The page you're looking for does not exist or has moved.</h4>
        <Link className="hover:underline text-lime-600 text-white" to="/">Go back Home &rarr;</Link>
    </div>
)


export default NotFound;