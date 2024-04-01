import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Charts from "../components/chart";
import PersonChat from "../components/personChat";

import { aboutData, latestAppointment, patientsReviews } from "../data/data";

import { FiCalendar, MdOutlineCheck, LiaTimesSolid, LuUser2 } from '../assets/icons/vander'
import SimpleBar from "simplebar-react";
import Wrapper from "../components/wrapper";
import { fetchAllDoctors, fetchDepartmentAll } from "../urls/urls";
import { updateDepartments, updateDoctors } from "../redux/reducers/functionalities.reducer";
import { useDispatch } from "react-redux";
import useAxios from "../network/useAxios";

export default function Index() {
    const [
        allDepartmentsResponse,
        allDepartmentsError,
        allDepartmentsLoading,
        allDepartmentsFetch,
    ] = useAxios();
    const [
        allDoctorsResponse,
        allDoctorsError,
        allDoctorsLoading,
        allDoctorsFetch,
    ] = useAxios();
    const dispatch = useDispatch();

    const fetchAllDepartmentsFunc = () => {
        allDepartmentsFetch(fetchDepartmentAll())
    }
    const fetchallDoctorsFunc = () => {
        allDoctorsFetch(fetchAllDoctors())
    }
    useEffect(()=>{
        fetchAllDepartmentsFunc()
        fetchallDoctorsFunc()
    },[])
    useEffect(()=>{
        if(allDoctorsResponse?.result == "success"){
            dispatch(updateDoctors(allDoctorsResponse?.data))

        }
        if(allDepartmentsResponse?.result == "success"){
            dispatch(updateDepartments(allDepartmentsResponse?.data))

        }
    },[allDepartmentsResponse, allDoctorsResponse])

    return (
        <>
            <Wrapper>
                <div className="container-fluid">
                    <div className="layout-specing">
                        <h5 className="mb-0">Dashboard</h5>

                        <div className="row">
                            {aboutData.map((item, index) => {
                                let Icon = item.icon
                                return (
                                    <div className="col-xl-2 col-lg-4 col-md-4 mt-4" key={index}>
                                        <div className="card features feature-primary rounded border-0 shadow p-4">
                                            <div className="d-flex align-items-center">
                                                <div className="icon text-center rounded-md">
                                                    <Icon className="h3 mb-0" />
                                                </div>
                                                <div className="flex-1 ms-2">
                                                    <h5 className="mb-0">{item.title}</h5>
                                                    <p className="text-muted mb-0">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="row">
                            <Charts />
                        </div>

                        
                    </div>
                </div>
            </Wrapper>
        </>
    )
}