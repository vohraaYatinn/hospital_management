import React from "react";
import { Route, Routes} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./assets/scss/style.scss";
import "./assets/scss/bootstrap.scss";
import "./assets/css/materialdesignicons.min.css"
import Index from "./page";
import IndexDarkSidebar from "./page/index-sidebar-dark";
import IndexSidebarColored from "./page/index-sidebar-colored";
import Appointment from "./page/appointment";
import Doctors from "./page/doctors/doctors";
import AddDoctor from "./page/doctors/add-doctor";
import DrProfile from "./page/doctors/dr-profile";
import Patients from "./page/patients/patients";
import AddPatient from "./page/patients/add-patient";
import PatientProfile from "./page/patients/patient-profile";
import Chats from "./page/apps/chat";
import Email from "./page/apps/email";
import Calendar from "./page/apps/calendar";
import Shop from "./page/pharmacy/shop";
import ProductDetail from "./page/pharmacy/product-detail";
import ShopCart from "./page/pharmacy/shopcart";
import Checkout from "./page/pharmacy/checkout";
import Blogs from "./page/blog/blogs";
import BlogDetail from "./page/blog/blog-detail";
import Faqs from "./page/faqs";
import Review from "./page/review";
import InvoiceList from "./page/invoice-list";
import Invoice from "./page/invoice";
import Terms from "./page/terms";
import Privacy from "./page/privacy";
import BlankPage from "./page/blank-page";
import EmailConfirmation from "./page/email/email-confirmation";
import EmailPasswordReset from "./page/email/email-password-reset";
import EmailAlert from "./page/email/email-alert";
import EmailInvoice from "./page/email/email-invoice";
import Login from "./page/authentication/login";
import Signup from "./page/authentication/signup";
import ForgotPassword from "./page/authentication/forgot-password";
import LockScreen from "./page/authentication/lock-screen";
import UiButton from "./page/uiComponents/ui-button";
import UiBadges from "./page/uiComponents/ui-badges";
import UiAlert from "./page/uiComponents/ui-alert";
import UiDropDown from "./page/uiComponents/ui-dropdown";
import UiTypography from "./page/uiComponents/ui-typography";
import UiBackground from "./page/uiComponents/ui-background";
import UiText from "./page/uiComponents/ui-text";
import UiTooltipPopover from "./page/uiComponents/ui-tooltip-popover";
import UiShadow from "./page/uiComponents/ui-shadow";
import UiBorder from "./page/uiComponents/ui-border";
import UiForm from "./page/uiComponents/ui-form";
import UiPagination from "./page/uiComponents/ui-pagination";
import UiAvatar from "./page/uiComponents/ui-avatar";
import UiModals from "./page/uiComponents/ui-modals";
import UiIcon from "./page/uiComponents/ui-icons";
import Comingsoon from "./page/comingsoon";
import Maintenance from "./page/maintenance";
import Error from "./page/error";
import ThankYou from "./page/thankyou";
import Departments from "./page/departments";
import Drugs from "./page/pharmacy/drugs";
import ResetPassword from "./page/resetPassword";
import DoctorLeave from "./page/doctorLeave";
import Logout from "./page/logout";
import Hospital from "./page/hospitals/hospitals";
import AddHospital from "./page/hospitals/add-hospital";
import HospitalProfile from "./page/hospitals/hospital-profile";
import AddAdmin from "./page/admins/add-admin";
import Admins from "./page/admins/admins";
import AddHospitalAccount from "./page/hospitalaccounts/add-hospital-admin";
import HospitalAdmins from "./page/hospitalaccounts/hospital-admins";
import AdminReviews from "./page/AdminReviews";


function App() {
  return (
   <>
   <Routes>
    <Route path="/admin-reviews" element={<Index/>}/>
    <Route path="/admin-dashboard" element={<Index/>}/>
    <Route path="/index" element={<Index/>}/>
    <Route path="/index-sidebar-dark" element={<IndexDarkSidebar/>}/>
    <Route path="/index-sidebar-colored" element={<IndexSidebarColored/>}/>
    <Route path="/appointment" element={<Appointment/>}/>
    <Route path="/admin-reviews" element={<AdminReviews/>}/>
    <Route path="/departments" element={<Departments/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/doctor-leave" element={<DoctorLeave/>}/>
    <Route path="/add-doctor" element={<AddDoctor/>}/>
    <Route path="/dr-profile" element={<DrProfile/>}/>
    <Route path="/dr-profile/:id" element={<DrProfile/>}/>
    <Route path="/patients" element={<Patients/>}/>
    <Route path="/add-patient" element={<AddPatient/>}/>
    <Route path="/add-admin" element={<AddAdmin/>}/>
    <Route path="/admins" element={<Admins/>}/>
    <Route path="/add-hospital-admin" element={<AddHospitalAccount/>}/>
    <Route path="/hospitals-admin" element={<HospitalAdmins/>}/>
    <Route path="/patient-profile/:id" element={<PatientProfile/>}/>
    <Route path="/chat" element={<Chats/>}/>
    <Route path="/email" element={<Email/>}/>
    <Route path="/calendar" element={<Calendar/>}/>
    <Route path="/reset-password" element={<ResetPassword/>}/>
    <Route path="/drugs" element={<Drugs/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/product-detail" element={<ProductDetail/>}/>
    <Route path="/product-detail/:id" element={<ProductDetail/>}/>
    <Route path="/shopcart" element={<ShopCart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/blog-detail" element={<BlogDetail/>}/>
    <Route path="/blog-detail/:id" element={<BlogDetail/>}/>
					<Route path="/hospitals" element={<Hospital />} />
				<Route path="/add-hospital" element={<AddHospital />} />
				<Route path="/hospital-profile" element={<HospitalProfile />} />
				<Route path="/hospital-profile/:id" element={<HospitalProfile />} />
    <Route path="/faqs" element={<Faqs/>}/>
    <Route path="/review" element={<Review/>}/>
    <Route path="/invoice-list" element={<InvoiceList/>}/>
    <Route path="/invoice" element={<Invoice/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/blank-page" element={<BlankPage/>}/>
    <Route path="/email-confirmation" element={<EmailConfirmation/>}/>
    <Route path="/email-password-reset" element={<EmailPasswordReset/>}/>
    <Route path="/email-alert" element={<EmailAlert/>}/>
    <Route path="/email-invoice" element={<EmailInvoice/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/lock-screen" element={<LockScreen/>}/>
    <Route path="/ui-button" element={<UiButton/>}/>
    <Route path="/ui-badges" element={<UiBadges/>}/>
    <Route path="/ui-alert" element={<UiAlert/>}/>
    <Route path="/ui-dropdown" element={<UiDropDown/>}/>
    <Route path="/ui-typography" element={<UiTypography/>}/>
    <Route path="/ui-background" element={<UiBackground/>}/>
    <Route path="/ui-text" element={<UiText/>}/>
    <Route path="/ui-tooltip-popover" element={<UiTooltipPopover/>}/>
    <Route path="/ui-shadow" element={<UiShadow/>}/>
    <Route path="/ui-border" element={<UiBorder/>}/>
    <Route path="/ui-form" element={<UiForm/>}/>
    <Route path="/ui-pagination" element={<UiPagination/>}/>
    <Route path="/ui-avatar" element={<UiAvatar/>}/>
    <Route path="/ui-modals" element={<UiModals/>}/>
    <Route path="/ui-icons" element={<UiIcon/>}/>
    <Route path="/comingsoon" element={<Comingsoon/>}/>
    <Route path="/maintenance" element={<Maintenance/>}/>
    <Route path="/error" element={<Error/>}/>
    <Route path="*" element={<Error/>}/>
    <Route path="thankyou" element={<ThankYou/>}/>
    <Route path="/logout" element={<Logout/>}/>
  </Routes>
   
   </>
  );
}

export default App;
