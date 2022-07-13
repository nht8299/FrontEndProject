import Footer from './components/footer/Footer';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './pages/home/Home';
import Underconstruction from './pages/underconstruction/Underconstruction';
import EmployeeList from './pages/employee/Employee';
import CustomerList from './pages/customer/Customer';




function App() {
  return (
    <BrowserRouter>
     <NavigationBar />
     <Routes>
      <Route exact path={"/underconstruction"} element={<Underconstruction />} />
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/employess"} element={<EmployeeList />} />
      <Route exact path={"/customers"} element={<CustomerList />} />
      

     </Routes>
    <Footer /> 
    </BrowserRouter>
  );
}

export default App;
