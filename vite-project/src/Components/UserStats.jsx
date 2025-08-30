

const UserStats = ({edits , totaldays}) => {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-blue-700 rounded-lg p-6 text-white'>
      <h1 className='font-bold text-lg mb-3'>Profile Stats</h1>

      <div className="flex  items-center justify-center gap-40">
        <div className="text-center">
          <p className="text-2xl font-bold">{edits}</p>
          <p className="text-sm opacity-90">Profile Edits</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{totaldays}</p>
          <p className="text-sm opacity-90">Days as Member</p>
        </div>
      </div>

    </div>
  )
}

export default UserStats