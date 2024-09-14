import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";  // Import AboutUs component
import ContactUs from "./pages/ContactUs";  // Import ContactUs component
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import ViewProducts from "./Products/ViewProducts";
import Login from "./pages/Login";  // Import Login component
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddProduct from "./Products/AddProduct";
import SalesChart from "./pages/SalesChart";
import EditProduct from "./Products/EditProduct";
import ViewProduct from "./Products/ViewProduct";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactUs />} />

          {/* Other routes */}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/viewproducts" element={<ViewProducts />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/viewsales" element={<SalesChart />} />
          <Route exact path="/editproduct/:id" element={<EditProduct />} />
          <Route exact path="/viewproduct/:id" element={<ViewProduct />} />

          {/* Redirect any undefined routes to login */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
