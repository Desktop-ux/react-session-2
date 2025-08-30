import React from 'react'

const ProfileCard = ({name, age, email, avatar , onEdit}) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
        <div className='flex items-center mb-4'>
            <div className='w-15 h-15 bg-gradient-to-r from-blue-700 to-blue-300 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-2'>{avatar}</div>
            <div>
                <h1 className='text-xl font-bold text-gray-800'>{name}</h1>
                <p className='text-gray-600-'>{email}</p>
            </div>
        </div>
        <div className='mb-4'>
            <p className='text-gray-700'>
                <span className='font-semibold'>Age</span> {age} years old
            </p>
        </div>
        <button onClick={onEdit} className='w-full bg-blue-500 text-white py-2 px-4 rounded  hover:bg-blue-600 transition-colors'>Edit Profile</button>
    </div>
  )
}

export default ProfileCard