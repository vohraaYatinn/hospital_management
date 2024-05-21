import React from "react";
import { useEffect } from "react";

import Chart from 'react-apexcharts'


export default function Charts({ageChart, genderData, pieChart, setFormPie, ageGraph, setAgeGraph, genderChart, setGenderGraph, ageFilter, genderGraph}){

    let optionsAge = {
        series: [{
            name: 'Age',
            data: ageChart
        }, 
    ],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        grid: {
            borderColor: '#e9ecef',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#396cf0'],
        xaxis: {
            categories: ['0-17', '18-35', '36-50', '51-65', '66-80', '81-100', '100+'] ,
        },
        yaxis: {
            title: {
                text: 'Patients',
    
                style: {
                    colors: ['#8492a6'],
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " Patients"
                }
            }
        }
    };


    let optionsGender = {
        series: [{
            name: 'Male',
            data: genderData?.male_data
        }, {
            name: 'Female',
            data: genderData?.female_data
        },
    ],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        grid: {
            borderColor: '#e9ecef',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#396cf0', '#53c797', '#f1b561'],
        xaxis: {
            categories: genderGraph=="Year"  ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] :  genderGraph=="Month"  ? ["Week1", "Week2", "Week3", "Week4"]:["Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday", "Sunday"],
        },
        yaxis: {
            title: {
                text: 'Patients',
    
                style: {
                    colors: ['#8492a6'],
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " Patients"
                }
            }
        }
    };

    let options2 = {
        chart: {
            height: 350,
            type: 'pie',
    
        },
        colors: ['#396cf0', '#53c797', '#f1b561', '#f0735a'],
        plotOptions: {
            pie: {
                track: {
                  background: '#b9c1d4',
                  opacity: 0.5,            
                },
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                        color: '#8997bd',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: '#8997bd',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249
                        }
                    }
                }
            }
        },
        series: Object.values(pieChart),
        labels: Object.keys(pieChart),
    }
    
    return(
        <>
        <div className="col-xl-6 col-lg-6 mt-4">
            <div className="card shadow border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="align-items-center mb-0">Patients visit by Age</h6>
                    
                    <div className="mb-0 position-relative">
                    <select className="form-select form-control" id="dailychart" onChange={(e)=>{
                            setAgeGraph(e.target.value)
                        }}>
                            <option defaultValue>Week</option>
                            <option defaultValue>Month</option>
                            <option>Year</option>
                        </select>
                    </div>
                </div>
                <Chart options={optionsAge} series={optionsAge.series} type="bar" width='100%' height={350} />
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 mt-4">
            <div className="card shadow border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="align-items-center mb-0">Patients visit by Gender</h6>
                    
                    <div className="mb-0 position-relative">
                    <select className="form-select form-control" id="dailychart" onChange={(e)=>{
                            setGenderGraph(e.target.value)
                        }}>
                            <option value={"Week"}>Week</option>
                            <option value={"Month"}>Month</option>
                            <option value={"Year"}>Year</option>
                        </select>
                    </div>
                </div>
                <Chart options={optionsGender} series={optionsGender.series} type="bar" width='100%' height={350} />
            </div>
        </div>

 

        <div className="col-xl-12 col-lg-12 mt-4">
            <div className="card shadow border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="align-items-center mb-0">Patients Visit By Department</h6>
                    
                    <div className="mb-0 position-relative">
                        <select className="form-select form-control" id="dailychart" onChange={(e)=>{
                            setFormPie(e.target.value)
                        }}>
                        <option value={"week"}>Week</option>
                            <option value={"month"}>Month</option>
                            <option value={"year"}>Year</option>
                        </select>
                    </div>
                </div>
                <Chart options={options2} series={options2.series} type="pie" width='100%' height={350} />
            </div>
        </div>
        </>
    )
}