import PublicCard from "./Components/ProfileCard"
import EditForm from "./Components/EditForm"
import UserStats from "./Components/UserStats"
import { useState } from "react"

const App = () => {
  const [user, setUser] = useState({
    name : "Alex Johnson",
    age : 25,
    email: 'alex.johnson@email.com',
    avatar : "AJ"
  })
  const [tempUser, setTempUser] = useState([
    {
      name : user.name,
      age : user.age,
      email : user.email,
      avatar : user.avatar
    }
  ])
  const [IsEditing, setIsEditing] = useState(false)
  const [editCount, seteditCount] = useState(0)
const editHandler = ()=>{
  // alert("edit Profile")
  setIsEditing(true)
}
const Savehandler = ()=>{
  // alert("Changes Saved")
  setUser({
    name : tempUser.name,
    age : tempUser.age,
    email : tempUser.email,
    avatar : tempUser.avatar
  })
  setIsEditing(false)
  seteditCount(prev => prev + 1)
}

const CancelHandler = ()=>{
  // alert("Changes Saved")
  setIsEditing(false)
}

const handleFIeldChange = (field, value)=>{
  setTempUser(prev => {
    const newObj = {
      name : prev.name,
      age : prev.age,
      email: prev.email,
      avatar : prev.avatar
    }
    newObj[field] = value
    return newObj
  }
  )

}



  return (
    <div className="w-screen h-screen bg-gray-100 py-8">
        <div className="max-w-lg mx-auto px-4">
           <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          User Profile Manager
        </h1>

    {IsEditing ? 
    (<EditForm user={user} onChange={handleFIeldChange} onSave={Savehandler} onCancel={CancelHandler}/> ):
    (<PublicCard
          name = {user.name}
          email = {user.email}
          age = {user.age}
          avatar = {user.avatar}
          onEdit = {editHandler}
    />)
    }       


       

       

        <UserStats edits = {editCount} totaldays = {Math.floor(Math.random() *365)+ 1}/>
        </div>
    </div>
  )
}

export default App