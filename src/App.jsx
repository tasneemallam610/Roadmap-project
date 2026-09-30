import { Routes , Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/pages/Home"
import Info from "./components/pages/Info"
import RoadmapDetails from "./components/pages/RoadmapDetails"
import SignUp from "./components/pages/SignUp"
import Dashbord from "./components/pages/Dashbord"
import Login from "./components/pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {
  

  return (
    <>
      <Header/>
      
<Routes>

<Route    path='/' element={<Home/>}           />
 <Route path='/roadmap/:specId' element={<RoadmapDetails/>} />
<Route    path='/signup' element={<SignUp/>}           />
<Route    path='/login' element={<Login/>}           />
<Route    path='/dashboard' element={  <ProtectedRoute>
            <Dashbord />
          </ProtectedRoute>}           />
</Routes>

    </>
  )
}

export default App
