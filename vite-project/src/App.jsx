import PublicCard from "./Components/ProfileCard"
import EditForm from "./Components/EditForm"
import UserStats from "./Components/UserStats"

const App = () => {


  return (
    <div className="w-screen h-screen bg-gray-100 py-8">
        <div className="max-w-lg mx-auto px-4">
           <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          User Profile Manager
        </h1>

        <PublicCard/>

        <EditForm/>
        </div>
    </div>
  )
}

export default App