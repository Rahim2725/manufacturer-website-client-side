import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from './pages/Dashboard/AddProduct';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrder from './pages/Dashboard/MyOrder';
import MyProfile from './pages/Dashboard/MyProfile';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/Sherad/Footer';
import Navbar from './pages/Sherad/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:purchaseId' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>
      }></Route>
        <Route path='/dashboard' element={
        <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>
      }>

        {/* user link us able  */}
        <Route index element={<MyProfile/>}> </Route>
        <Route path='myOrder' element={<MyOrder/>}></Route>
        <Route path='addReview' element={<AddReview/>}></Route>

        {/* admin use this link */}
      <Route path='addProduct' element={<AddProduct/>}></Route>
        <Route path='manageOrder' element={<ManageOrders/>}></Route>
        <Route path='mangeProduct' element={<ManageProducts/>}></Route>
        <Route path='makeAdmin' element={<MakeAdmin/>}></Route>

      </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
