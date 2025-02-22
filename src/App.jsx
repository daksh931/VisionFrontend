import { Route, Routes } from 'react-router-dom'
import HomePage from './assets/Components/HomePage'
import Navbar from './assets/Components/Navbar'
import Login from './assets/Components/Login'
import Courses from './assets/Components/Courses'
import Signup from './assets/Components/Signup'
import Logout from './assets/Components/Logout'
import AddCourse from './assets/Components/AddCourse'
import ResetPassword from './assets/Components/Profile/ResetPassword'
import Profile from './assets/Components/Profile/Profile'
import UpdateProfile from './assets/Components/Profile/UpdateProfile'
import ForgotPassword from './assets/Components/Profile/ForgotPassword'
import Cart from './assets/Components/Cart'
import Footer from './assets/Components/Footer'
import About from './assets/Components/About'
import Contact from './assets/Components/Contact'
import Cookies from 'js-cookie';
import ProtectedRoute from './ProtectedRoute'
import AdminRoute from './AdminRoute'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HoverBorderCircle from './assets/Components/MovingHover'
import EmpoweringSection from './assets/Components/heroSection'
import PopularGoals from './assets/Components/PopularGoals'


function App() {
  const token = Cookies.get('token');
  console.log(token)

  

  return (
    <>
       <ToastContainer position="top-center" autoClose={2200} />
      <Navbar />
      {/* by writing 'exact' prop in <Route> */}
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hoverBorder' element={<HoverBorderCircle />}/>

        {/* <Route path='/googlelogin' element={< />} /> */}
        {/* <Route path='/' element={<Courses />} /> */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/about' element={<About />} />
        <Route path='/hero' element={<EmpoweringSection />} />
        <Route path='/goals' element={<PopularGoals />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/password/reset/:userid/:token' element={<ResetPassword />} />
        <Route path='courses' element={<Courses />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/' element={<ProtectedRoute />} >
          <Route path='profile' element={<Profile />} />
          <Route path='updateProfile' element={<UpdateProfile />} />
          <Route path='logout' element={<Logout />} />
          <Route path='/' element={<AdminRoute />}>
          <Route path='addCourse' element={<AddCourse />} />

          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
