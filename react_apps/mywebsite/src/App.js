import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/component/Header";
import Footer from "./website/component/Footer";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import OurTeachers from "./website/pages/OurTeachers";
import Courses from "./website/pages/Courses";
import Reviews from "./website/pages/Reviews";
import Contact from "./website/pages/Contact";
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";



// import Admin_login from "./Admin/pages/Admin_login";
// // import Dashboard from "./Admin/pages/Dashboard";
// import Dashboard from "./Admin/pages/Dashboard";
// import Add_categories from "./Admin/pages/Add_categories";

// Admin
import AHeader from "./Admin/component/AHeader";
import AFooter from "./Admin/component/AFooter";
import Admin_login from "./Admin/pages/Admin_login";
import Dashboard from "./Admin/pages/Dashboard";
import Add_categories from "./Admin/pages/Add_categories";
import Manage_categories from "./Admin/pages/Manage_categories"; //
// import Add_product from "./Admin/pages/Add_product1";
// import Manage_product from "./Admin/pages/Add_product";

import Add_product from "./Admin/pages/Add_product";
import Manage_product from "./Admin/pages/Manage_product";

import Manage_customer from "./Admin/pages/Manage_customer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* Website */}

          <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/About" element={<><Header /><About /><Footer /></>}></Route>
          <Route path="/OurTeachers" element={<><Header /><OurTeachers /><Footer /></>}></Route>
          <Route path="/Courses" element={<><Header /><Courses /><Footer /></>}></Route>
          <Route path="/Reviews" element={<><Header /><Reviews /><Footer /></>}></Route>
          <Route path="/Contact" element={<><Header /><Contact /><Footer /></>}></Route>
          <Route path="/login" element={<><Header /><Login /><Footer /></>}></Route>
          <Route path="/signup" element={<><Header /><Signup /><Footer /></>}></Route>


          {/* Admin  */}

          <Route path="/Admin_login" element={<><Admin_login /></>}></Route>
          <Route path="/dashboard" element={<><AHeader /><Dashboard /><AFooter /></>}></Route>
          <Route path="/Add_categories" element={<><AHeader /><Add_categories /><AFooter /></>}></Route>
          <Route path="/Manage_categories" element={<><AHeader /><Manage_categories /><AFooter /></>}></Route>//

          {/* <Route path="/Add_product" element={<><AHeader /><Add_product /><AFooter /></>}></Route>
          <Route path="/Manage_product" element={<><AHeader /><Manage_product /><AFooter /></>}></Route> */}
          <Route path="/Add_product" element={<><AHeader /><Add_product /><AFooter /></>} />
          <Route path="/Manage_product" element={<><AHeader /><Manage_product /><AFooter /></>} />
          <Route path="/Manage_customer" element={<><AHeader />< Manage_customer /><AFooter /></>}/>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// view-source:https://themewagon.github.io/restoran/