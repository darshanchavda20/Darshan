import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/component/Header";
import Home from "./website/pages/Home";
import Shope from "./website/pages/Shope";
import Single_shope from "./website/pages/Single_shope";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<><Header /></>}></Route> */}
            <Route path="/" element={<><Header /><Home /></>}></Route>
            <Route path="/shope" element={<><Header /><Shope /></>}></Route>
            <Route path="/single-shope" element={<><Header /><Single_shope /></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// npm install react-router-dom
