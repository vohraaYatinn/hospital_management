import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Chart from "../../components/dashboard/chart";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import { FiCalendar, FiArrowRight, RiCalendar2Line, GiAbstract020 } from '../../assets/icons/vander'
import { useRouter } from "../../hooks/use-router";
import useAxios from "../../network/useAxios";
import { changePrescriptionMethod, fetchDoctorDashboard, fetchDoctorMedicinesDashboard, fetchDoctorPatientsDashboard } from "../../urls/urls";
import moment from 'moment';
import { Radio } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

import DateSearchComponent from "../../common-components/DateSearch";
import { test_url_images } from "../../config/environment";
import { calculateAge, useIsMobile } from "../../utils/commonFunctions";
import { useDispatch, useSelector } from "react-redux";
import { doctorDetails, updateDoctor, updateMedicines } from "../../redux/reducers/functionalities.reducer";
import ab from "../../assets/profile.png"
import AppointmentSlots from "../../common-components/SlotsSearch";
import { Button, Modal, Space } from 'antd';

const { confirm } = Modal;

export default function DoctorDashBoard() {
    const dispatch = useDispatch();
    let doctorRedux = useSelector(doctorDetails);
    const isMobile = useIsMobile();

    const [filters, setFilters] = useState({
        slots:"",
        date:""
    })
    const [prescriptionMethod, setPrescriptionMethod] = useState(doctorRedux?.prescription_mode);
    const [prescriptionMethodTemp, setPrescriptionMethodTemp] = useState(doctorRedux?.prescription_mode);

    const showConfirm = () => {
        confirm({
          title: `Do you want to switch prescription method to ${prescriptionMethodTemp}?`,
          icon: <ExclamationCircleFilled />,
          content: `Clicking on yes will switch your prescription mode to ${prescriptionMethodTemp}`,
          onOk() {
            changePrescriptionMethodFunction(prescriptionMethodTemp)
          },
          onCancel() {
            setPrescriptionMethodTemp(doctorRedux?.prescription_mode)
          },
        });
      };
    useEffect(() => {
        const updateSlots = () => {
            const currentHour = new Date().getHours();

            let slot = '';
            if (currentHour >= 5 && currentHour < 12) {
                slot = 'morning';
            } else if (currentHour >= 12 && currentHour < 17) {
                slot = 'afternoon';
            } else {
                slot = 'evening';
            }

            setFilters(prevFilters => ({
                ...prevFilters,
                slots: slot
            }));
        };

        updateSlots();
    }, []); 
    const searchSlotConstants = [
        {
            value: "morning",
            name: "Morning"
        },
        {
            value: "afternoon",
            name: "Afternoon"
        },
        {
            value: "evening",
            name: "Evening"
        }
    ]
    const [dashboardData, setDashboardData] = useState([])
    const [dashboardDataTime, setDashboardTimeData] = useState([])
    const [dashboardDataPatients, setDashboardDataPatients] = useState([])
    const [changePrescriptionMethodResponse, changePrescriptionMethodError, changePrescriptionMethodLoading, changePrescriptionMethodFetch] = useAxios();

    const [dashboardDataResponse, dashboardDataError, dashboardDataLoading, dashboardDataFetch] = useAxios();
    const [dashboardDataPatientResponse, dashboardDataPatientError, dashboardDataPatientLoading, dashboardDataPatientFetch] = useAxios();
    const [medicinesResponse, medicinesError, medicinesLoading, medicinesFetch] = useAxios();
    const dateRef = useRef(null);
    const [radio, setRadio] = useState('Week');

    const optionsWithDisabled = [
        {
          label: 'Digital Prescription',
          value: 'digital',
        },
        {
          label: 'Manual Prescription',
          value: 'manual',
        }
      ];
    useEffect(() => {
        if(filters?.date){
            dashboardDataPatientFetch(fetchDoctorPatientsDashboard(filters))
            medicinesFetch(fetchDoctorMedicinesDashboard())
        }

    }, [filters])

    useEffect(() => {
            dashboardDataFetch(fetchDoctorDashboard({time:radio}))
    }, [radio])
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
      const getTodayDateString = () => {
        const today = new Date();
        const year = today.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"];
        const month = monthNames[today.getMonth()];
        const day = today.getDate();
      
        const getOrdinalSuffix = (n) => {
          const s = ["th", "st", "nd", "rd"];
          const v = n % 100;
          return n + (s[(v - 20) % 10] || s[v] || s[0]);
        };
      
        return `${getOrdinalSuffix(day)} ${month}, ${year}`;
      };
      const changePrescriptionMethodFunction = (value) => {
        setPrescriptionMethodTemp(value)
        changePrescriptionMethodFetch(changePrescriptionMethod({
          method:value
        }))
      }
      useEffect(()=>{
        if(prescriptionMethodTemp != prescriptionMethod){
            showConfirm()

        }

      },[prescriptionMethodTemp])
      const onChangePrescriptionMethod = ({ target: { value } }) => {
        console.log(value)
        setPrescriptionMethodTemp(value)

      };
      
    useEffect(() => {

    
        setFilters((prevFilters) => ({
          ...prevFilters,
          date: getTodayDate()
        }));
      }, []); 
    useEffect(() => {
        if (dashboardDataResponse?.result == "success") {
            setDashboardData(dashboardDataResponse?.data)
            setDashboardTimeData(dashboardDataResponse?.time_period_dict)
        }
    }, [dashboardDataResponse])
    useEffect(() => {
        if (dashboardDataPatientResponse?.result == "success") {
            setDashboardDataPatients(dashboardDataPatientResponse?.data)
        }

    }, [dashboardDataPatientResponse])
    useEffect(() => {
        if (medicinesResponse?.result == "success") {
            dispatch(updateMedicines(medicinesResponse?.data))
        }

    }, [medicinesResponse])
    const router = useRouter();


    const optionsRadio = [
        {
          label: 'Week',
          value: 'Week',
        },
        {
          label: 'Month',
          value: 'Month',
        },
        {
          label: 'Year',
          value: 'Year',
        },
      ];
      const onChangeRadio = ({ target: { value } }) => {
        setRadio(value);
      };
      useEffect(()=>{
        if(changePrescriptionMethodResponse?.result == "success"){
          dispatch(updateDoctor(changePrescriptionMethodResponse?.data))
          setPrescriptionMethod(prescriptionMethodTemp);
    
        }
      },[changePrescriptionMethodResponse])

    return (
        <>
            <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid" />
            <section className="bg-dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar colClass="col-xl-3 col-lg-3 col-md-3 col-12" />
                        <div className="col-xl-9 col-lg-9 col-md-9 mt-4 mt-sm-0">
                            <h5 className="mb-0">Dashboard</h5>
                            <Chart data={dashboardData} time_period_dict={dashboardDataTime} />

                            <div className="row mt-4">
                                {!isMobile &&
                            <div className="col-9" >
                            </div>}

                            <div className="col-3" >
                            <Radio.Group options={optionsRadio} onChange={onChangeRadio} value={radio} optionType="button" 
                            style={{
                                display:isMobile && "flex"
                            }}
                            />
                                </div>
                                </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 mt-1 mt-sm-0 " >
                                    <label style={{marginTop:'1.5rem'}}>{getTodayDateString()}</label>
                                    <div style={{
                                        display:"flex",
                                        width:isMobile ? "100vw" :"40rem",
                                        alignItems:"center"
                                    }}>
                                        
                                    <AppointmentSlots  filters={filters} setFilters={setFilters} ref={dateRef}
                                    onClick={()=>{
                                        dateRef.current.click()
                                    }}
                                    />
                                                <Radio.Group
            style={{
              marginLeft:"1rem",
              
            }}
        options={optionsWithDisabled}
        onChange={onChangePrescriptionMethod}
        value={prescriptionMethod}
        optionType="button"
        buttonStyle="solid"
      />
</div>

                                </div>
                            </div>
                            <div className="row">

                                <div className="col-xl-3 col-lg-6 mt-4">
                                    <div className="card border-0 shadow rounded">
                                        <div className="d-flex justify-content-between p-4 border-bottom"
                                        style={{
                                            background: "#386cf0",
                                            color: "white"
                                        }}
                                        >
                                            <h6 className="mb-0 ">Total<br/>Appointment</h6>
                                            <h6 className="mb-0" style={{opacity:"80%"}}>{dashboardDataPatients?.total_appointments_count} </h6>
                                        </div>
                                        

                                        <ul className="list-unstyled mb-0 check-this-list"
                                        >
                                            {dashboardDataPatients?.total_appointments && dashboardDataPatients?.total_appointments.map((item, index) => {
                                                return (
                                                    <li className="pt-4 ms-0 check-this-listbullet" key={index}
                                                    style={{
                                                        borderBottom:"1px solid rgb(0 0 0 / 19%)",
                                                        paddingBottom:"1rem",
                                                    }}
                                                    onClick={()=>{
                                                        router.push(`/patient-profile/${item?.patient?.id}/${item?.id}`)
                                                    }}
                                                    >
                                                        <Link to="#">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="row ">
                                                            <div className="col-3">
                                                            <img
                                                                src={item?.patient?.profile_picture ? (test_url_images + item?.patient?.profile_picture) : (ab) }
                                                                style={{
                                                                    width: "3rem",
                                                                    height: "3rem",
                                                                    border: "1px solid transparent",
                                                                    borderRadius: "100px"
                                                                }}
                                                            />

                                                            </div>
                                                            <div className="col-9">
                                                                <div className="row " style={{marginLeft:"0.5rem", color:"black", fontSize:"0.9rem"}}>
                                                                <p style={{textAlign:"start", marginBottom:"0rem", fontWeight:"700", marginLeft:"-0.3rem"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</p>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.3rem", color:"black"}}>
                                                                <div className="col-12" style={{fontSize:"0.6rem"}}>
                                                                <b> {"( Slot Token - "}{item?.appointment_slot}{" )"}</b>
                                                                </div>
                                                                <div className="col-12" style={{fontSize:"0.6rem"}}>
                                                               <b> {"(Ujur Id - "}{item?.patient?.ujur_id}{" )"}</b>
                                                                </div>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.3rem", color:"black", marginTop:"0.3rem"}}>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {calculateAge(item?.patient?.date_of_birth)}

                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.gender}

                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.blood_group}

                                                                </div>
                                                            
                                                                </div>
                                                            </div>
                                                            </div>

                                                            </div>
                                                            {/* <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-inline-flex">
                                                                    <div className="ms-3">
                                                                        <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    </div>
                                                                </div>
                                                                <FiArrowRight className="h5 text-dark" />
                                                            </div> */}
                                                        </Link>
                                                    </li>
                                                )
                                                
                                            })}
                                                                                               { dashboardDataPatients?.total_appointments &&dashboardDataPatients?.total_appointments.length>4 && <li style={{marginTop:"1rem", color:"blue", cursor:"pointer"}}
                                                                                                  onClick={()=>{
                                                                                                    router.push(`/doctor-appointment/${filters.date}/all`)
                                                                                                   }}
                                                                                               >View more</li>}

                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-6 mt-4">
                                    <div className="card border-0 shadow rounded">
                                        <div className="d-flex justify-content-between p-4 border-bottom"
                                                                                style={{
                                                                                    background: "#f1b560",
                                                                                    color: "white"
                                                                                }}
                                        >
                                            <h6 className="mb-0 ">Pending<br/>Appointment</h6>
                                            <h6 className=" mb-0" style={{opacity:"80%"}}>{dashboardDataPatients?.pending_appointments_count} </h6>
                                        </div>
       
                                        <ul className="list-unstyled mb-0 check-this-list"
                                                                                                                       
                                        >
                                            {dashboardDataPatients?.pending_appointments && dashboardDataPatients?.pending_appointments.map((item, index) => {
                                                return (
                                                    <li className="pt-4 ms-0 check-this-listbullet" key={index} 
                                                    style={{
                                                        borderBottom:"1px solid rgb(0 0 0 / 19%)",
                                                        paddingBottom:"1rem",
                                                    }}
                                                    onClick={()=>{
                                                        router.push(`/patient-profile/${item?.patient?.id}/${item?.id}`)
                                                    }}>
                                                        <Link to="#">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="row ">
                                                            <div className="col-3">
                                                                <img 
                                                                src={item?.patient?.profile_picture ? (test_url_images + item?.patient?.profile_picture) : (ab) }
                                                                style={{
                                                                    width:"3rem",
                                                                    height:"3rem",
                                                                    border:"1px solid transparent",
                                                                    borderRadius:"100px"
                                                                }}
                                                                />
                                                            </div>
                                                            <div className="col-9">
                                                                <div className="row " style={{marginLeft:"0.5rem", color:"black", fontSize:"0.9rem"}}>
                                                                <p style={{textAlign:"start", marginBottom:"0rem", fontWeight:"700", marginLeft:"-0.3rem"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</p>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.3rem", color:"black"}}>
                                                                <div className="col-12" style={{fontSize:"0.6rem"}}>
                                                                <b> {"( Slot Token - "}{item?.appointment_slot}{" )"}</b>
                                                                </div>
                                                                <div className="col-12" style={{fontSize:"0.6rem"}}>
                                                               <b> {"(Ujur Id - "}{item?.patient?.ujur_id}{" )"}</b>
                                                                </div>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.3rem", color:"black", marginTop:"0.3rem"}}>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {calculateAge(item?.patient?.date_of_birth)}

                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.gender}

                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.blood_group}

                                                                </div>
                                                            
                                                                </div>
                                                            </div>
                                                            </div>

                                                            </div>
                                                            {/* <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-inline-flex">
                                                                    <div className="ms-3">
                                                                        <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    </div>
                                                                </div>
                                                                <FiArrowRight className="h5 text-dark" />
                                                            </div> */}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
       { dashboardDataPatients?.pending_appointments &&dashboardDataPatients?.pending_appointments.length>4 && <li style={{marginTop:"1rem", color:"blue", cursor:"pointer"}}
                                                                                                      onClick={()=>{
                                                                                                        router.push(`/doctor-appointment/${filters.date}/pending`)
                                                                                                       }}
       >View more</li>}

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 mt-4">
                                    <div className="card border-0 shadow rounded">
                                        <div className="d-flex justify-content-between p-4 border-bottom"     style={{
                                                                                    background: "#f0735a",
                                                                                    color: "white"
                                                                                }}>
                                            <h6 className="mb-0 ">Cancelled<br/>Appointment</h6>
                                            <h6 className="mb-0" style={{opacity:"80%"}}>{dashboardDataPatients?.canceled_appointments_count} </h6>
                                        </div>
      
                                        <ul className="list-unstyled mb-0 check-this-list"
                                                                                                                    
                                        >
                                            {dashboardDataPatients?.canceled_appointments && dashboardDataPatients?.canceled_appointments.map((item, index) => {
                                                return (
                                                    <li className="pt-4 ms-0 check-this-listbullet" key={index}  style={{
                                                        borderBottom:"1px solid rgb(0 0 0 / 19%)",
                                                        paddingBottom:"1rem",
                                                    }}>
                                                        <Link to="#" className="shadow">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="row ">
                                                            <div className="col-3">
                                                                <img 
                                                                src={item?.patient?.profile_picture ? (test_url_images + item?.patient?.profile_picture) : (ab) }
                                                                style={{
                                                                    width:"3rem",
                                                                    height:"3rem",
                                                                    border:"1px solid transparent",
                                                                    borderRadius:"100px"
                                                                }}
                                                                />
                                                            </div>
                                                            <div className="col-9">
                                                                <div className="row " style={{marginLeft:"0.5rem", color:"black", fontSize:"0.9rem"}}>
                                                                <p style={{textAlign:"start", marginBottom:"0rem", fontWeight:"700", marginLeft:"-0.3rem"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</p>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.3rem", color:"black"}}>
                                                                <div className="col-12" style={{fontSize:"0.6rem"}}>
                                                                <b> {"( Slot Token - "}{item?.appointment_slot}{" )"}</b>
                                                                </div>
                                                                <div className="col-12" style={{fontSize:"0.6rem"}}>
                                                               <b> {"(Ujur Id - "}{item?.patient?.ujur_id}{" )"}</b>
                                                                </div>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.3rem", color:"black", marginTop:"0.3rem"}}>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {calculateAge(item?.patient?.date_of_birth)}

                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.gender}

                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.blood_group}

                                                                </div>
                                                            
                                                                </div>
                                                            </div>
                                                            </div>

                                                            </div>
                                                            {/* <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-inline-flex">
                                                                    <div className="ms-3">
                                                                        <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    </div>
                                                                </div>
                                                                <FiArrowRight className="h5 text-dark" />
                                                            </div> */}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                                                                               { dashboardDataPatients?.canceled_appointments &&dashboardDataPatients?.canceled_appointments.length>4 && <li style={{marginTop:"1rem", color:"blue", cursor:"pointer"}}
                                                                                               onClick={()=>{
                                                                                                router.push(`/doctor-appointment/${filters.date}/canceled`)
                                                                                               }}
                                                                                               >View more</li>}

                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-6 mt-4">
                                    <div className="card border-0 shadow rounded">
                                        <div className="d-flex justify-content-between p-4 border-bottom"  style={{
                                                                                    background: "#53c797",
                                                                                    color: "white"
                                                                                }}>
                                            <h6 className="mb-0 ">Completed<br/>Appointment</h6>
                                            <h6 className=" mb-0" style={{opacity:"80%"}}>{dashboardDataPatients?.completed_appointments_count}</h6>
                                        </div>

                                        <ul className="list-unstyled mb-0 check-this-list"
                                        
                                        >
                                            {dashboardDataPatients?.completed_appointments && dashboardDataPatients?.completed_appointments.map((item, index) => {
                                                return (
                                                    <li className="pt-4 ms-0 check-this-listbullet" key={index}
                                                    style={{
                                                        borderBottom:"1px solid rgb(0 0 0 / 19%)",
                                                        paddingBottom:"1rem",

                                                    }}
                                                    >
                                                        <Link to="#">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="row">
                                                            <div className="col-3">
                                                                <img 
                                                                src={item?.patient?.profile_picture ? (test_url_images + item?.patient?.profile_picture) : (ab) }
                                                                style={{
                                                                    width:"3rem",
                                                                    height:"3rem",
                                                                    border:"1px solid transparent",
                                                                    borderRadius:"100px"
                                                                }}
                                                                />
                                                            </div>
                                                            <div className="col-9">
                                                                <div className="row " style={{marginLeft:"0.5rem", color:"black", fontSize:"0.9rem"}}>
                                                                <p style={{textAlign:"start", marginBottom:"0rem", fontWeight:"700", marginLeft:"-0.3rem", marginLeft:"-0.3rem"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</p>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.3rem", color:"black"}}>
                                                                <div className="col-12" style={{fontSize:"0.6rem"}}>
                                                                <b> {"( Slot Token - "}{item?.appointment_slot}{" )"}</b>
                                                                </div>
                                                                <div className="col-12" style={{fontSize:"0.6rem"}}>
                                                               <b> {"(Ujur Id - "}{item?.patient?.ujur_id}{" )"}</b>
                                                                </div>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.3rem", color:"black", marginTop:"0.3rem"}}>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {calculateAge(item?.patient?.date_of_birth)}

                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.gender}

                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.blood_group}

                                                                </div>
                                                            
                                                                </div>
                                                            </div>
                                                            </div>

                                                            </div>
                                                            {/* <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-inline-flex">
                                                                    <div className="ms-3">
                                                                        <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    </div>
                                                                </div>
                                                                <FiArrowRight className="h5 text-dark" />
                                                            </div> */}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                                   { dashboardDataPatients?.completed_appointments &&dashboardDataPatients?.completed_appointments.length>4 && <li style={{marginTop:"1rem", color:"blue", cursor:"pointer"}}
                                                                                                                                                  onClick={()=>{
                                                                                                                                                    router.push(`/doctor-appointment/${filters.date}/completed`)
                                                                                                                                                   }}
                                                   >View more</li>}

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <AdminFooter />
            <ScrollTop />
        </>
    )
}