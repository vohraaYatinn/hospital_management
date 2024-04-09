import React, { useEffect } from "react";
import { Route, Routes} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'
import './assets/scss/bootstrap.scss'
import './assets/css/materialdesignicons.min.css'
import DoctorDashBoard from "./pages/dashboard/doctor-dashboard";
import DoctorAppointment from "./pages/dashboard/doctor-appointment";
import DoctorSchedule from "./pages/dashboard/doctor-schedule";
import Invoice from "./pages/dashboard/invoices";
import DoctorMessages from "./pages/dashboard/doctor-messages";
import DoctorProfileSettimg from "./pages/dashboard/doctor-profile-setting";
import PatientList from "./pages/dashboard/patient-list";
import PatientReview from "./pages/dashboard/patient-review";
import DoctorChat from "./pages/dashboard/doctor-chat";
import PatientDashboard from "./pages/patient/patient-dashboard";
import PatientProfile from "./pages/patient/patient-profile";
import Error from "./pages/error";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";
import Logout from "./pages/logout";
import DoctorLeave from "./pages/dashboard/doctor-leave";
import { doctorDetails, tokenJson, updateDoctor, updateToken } from './redux/reducers/functionalities.reducer';
import { useRouter } from './hooks/use-router';
import useAxios from './network/useAxios';
import { getDetailsFromToken } from './urls/urls';
import { useDispatch, useSelector } from "react-redux";
import PatientProfileShow from "./pages/patient/patient-profile-show";


function App() {
  let doctor = useSelector(doctorDetails);
  const dispatch = useDispatch();
  const router = useRouter();
  let storedToken = localStorage.getItem('storedToken');
  
  const [getRefershDataResponse, getRefershDataError, getRefershDataLoading, getRefershDataFetch] = useAxios();
  useEffect(()=>{
      if (!(doctor=={}) && storedToken) {
        console.log("aaaaaa")
          getRefershDataFetch(getDetailsFromToken({
              "token":storedToken
          }))
      }
      else{
        console.log(doctor)
        console.log(storedToken)
        console.log("bbbbbaaaaa")

          router.push("/login")
      }
  },[])
  useEffect(()=>{
      if (getRefershDataResponse?.result == "success") {
          localStorage.setItem('storedToken', getRefershDataResponse?.token);
          dispatch(updateToken(getRefershDataResponse?.token))
          dispatch(updateDoctor(getRefershDataResponse?.doctor))
      }
      else if (getRefershDataResponse?.result == "failure"){
          router.push("/login")
  
      }
  },[getRefershDataResponse])


  return (
    <Routes>
      <Route path="/index" element={<DoctorDashBoard/>}/>
      {/* <Route path="/index" element={<Index/>}/>
      <Route path="/index-two" element={<IndexTwo/>}/>
      <Route path="/index-three" element={<IndexThree/>}/> */}
      <Route path="/doctor-dashboard" element={<DoctorDashBoard/>}/>
      <Route path="/doctor-appointment" element={<DoctorAppointment/>}/>
      <Route path="/doctor-leave" element={<DoctorLeave/>}/>
      <Route path="/doctor-schedule" element={<DoctorSchedule/>}/>
      <Route path="/invoices" element={<Invoice/>}/>
      <Route path="/doctor-messages" element={<DoctorMessages/>}/>
      <Route path="/doctor-profile-setting" element={<DoctorProfileSettimg/>}/>
      {/* <Route path="/patient-list" element={<PatientList/>}/> */}
      <Route path="/patient-review" element={<PatientReview/>}/>
      <Route path="/doctor-chat" element={<DoctorChat/>}/>
      <Route path="/patient-profile-show/:id" element={<PatientProfileShow/>}/>
      <Route path="/patient-profile/:id" element={<PatientProfile/>}/>
      <Route path="/patient-profile/:id/:appointment" element={<PatientProfile/>}/>
      <Route path="/patient-dashboard" element={<PatientDashboard/>}/>


      {/* <Route path="/doctor-team-one" element={<DoctorTeamOne/>}/>
      <Route path="/doctor-team-two" element={<DoctorTeamTwo/>}/>
      <Route path="/doctor-team-three" element={<DoctorTeamThree/>}/> */}
      {/* <Route path="/patient-dashboard" element={<PatientDashboard/>}/>
      <Route path="/patient-profile" element={<PatientProfile/>}/>
      <Route path="/booking-appointment" element={<BookingAppointment/>}/>
      <Route path="/patient-invoice" element={<PatientInvoice/>}/>
      <Route path="/pharmacy" element={<Pharmacy/>}/>
      <Route path="/pharmacy-shop" element={<PharmacyShop/>}/>
      <Route path="/pharmacy-product-detail" element={<PharmacyProductDetail/>}/>
      <Route path="/pharmacy-product-detail/:id" element={<PharmacyProductDetail/>}/>
      <Route path="/pharmacy-shop-cart" element={<ShopCart/>}/>
      <Route path="/pharmacy-checkout" element={<CheckOut/>}/>
      <Route path="/pharmacy-account" element={<PharmacyAccount/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/departments" element={<Departments/>}/>
      <Route path="/faqs" element={<Faqs/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/blog-detail" element={<BlogDetail/>}/>
      <Route path="/blog-detail/:id" element={<BlogDetail/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/error" element={<Error/>}/>
     
      <Route path="/contact" element={<Contact/>}/> */}
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
