import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from './pages/Dashboard/AddProduct';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageUsers from './pages/Dashboard/ManageUsers';
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
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import NotFound from './pages/NotFoun/NotFound';
import Blog from './pages/Blog.js/Blog';
import RequireAdmin from './pages/Login/RequireAdmin';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
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
          <Route index element={<MyProfile />}> </Route>
          <Route path='myOrder' element={<MyOrder />}></Route>
          <Route path='review' element={<AddReview />}></Route>

          {/* admin use this link */}
          <Route path='addProduct' element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>
          }>
          </Route>
          <Route path='manageOrder' element={
            <RequireAdmin>
              <ManageOrders />
            </RequireAdmin>
          }></Route>
          <Route path='manageProduct' element={
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>
          }></Route>
          <Route path='manageUsers' element={
            <RequireAdmin>
              <ManageUsers />
            </RequireAdmin>
          }></Route>

        </Route>
        <Route path='*' element={<NotFound></NotFound>} > </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
