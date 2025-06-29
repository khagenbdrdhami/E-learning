import React from 'react'
import j from "../assets/j.png"
import { useAuth0 } from '@auth0/auth0-react';
function FeedBack() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) return <div>Loading ...</div>;
    if (!isAuthenticated) return <div>You are not logged in</div>;
  return (
    <div className='px-6 min-h-screen'>
      <div className="border-b-2 mb-6 pb-3 flex justify-between border-gray-300">
        <h2 className="text-2xl font-semibold  text-gray-800">Feedback</h2>
        <div className="flex items-center  ">
          <span className="mr-2 text-gray-700 font-medium">{user.name}</span>
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
        
      </div>
      <div className='flex flex-col items-center justify-center'>
        <img src={j} className='w-[400px] mt-20' alt="" />
        <p>No feedback yet!!</p>
      </div>
    </div>
  )
}

export default FeedBack