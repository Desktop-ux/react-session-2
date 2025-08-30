

const EditForm = ({user ,onSave , onCancel ,onChange}) => {

 
   
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className='text-lg font-bold mb-4 text-gray-800'>Edit Profile</h1>

            <div className='space-y-4'>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1.5'>Name</label>
                    <input type="text"  onChange={(e)=>{onChange("name", e.target.value)}}  placeholder='Enter Your Name' className='w-full px-3 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1.5'>Age</label>
                    <input type="number" onChange={(e)=>{onChange("age", e.target.value)}} placeholder='Enter Your Age' className='w-full px-3 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1.5'>Email</label>
                    <input type="email"  onChange={(e)=>{onChange("email", e.target.value)}} placeholder='Enter Your Email Address' className='w-full px-3 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
            </div>
            <div className='flex gap-3 mt-6'>
                <button onClick={onSave}  className='flex-1 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors'>Save Changes</button>
                <button onClick={onCancel} className='flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors'>Cancel</button>
            </div>
        </div>
    )
}

export default EditForm