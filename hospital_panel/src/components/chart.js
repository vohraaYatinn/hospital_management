import React from "react";
import { useEffect } from "react";

import Chart from 'react-apexcharts'


export default function Charts({ageChart, genderData, pieChart, setFormPie, ageGraph, setAgeGraph, genderChart, setGenderGraph, ageFilter, genderGraph, completedParam, setCompletedParam, allDoctors, setSelectedDoctor, completedGraph}){

    const lineChartOptions = {
        series: [{
          name: 'Patients',

          data: completedGraph ? completedGraph : []
        }],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false // Hide the toolbar
        }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },

        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
            categories: completedParam=="year"  ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] :  completedParam=="month"  ? ["Week1", "Week2", "Week3", "Week4"]:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

        }
      };

      let optionsAge = {
        series: [{
            name: 'Below 15',
            data: ageChart?.before_16 ? ageChart?.before_16 : []
        }, 
        {
            name: 'Between 15 & 60',
            data: ageChart?.fifteen_60 ? ageChart?.fifteen_60 : []
        },
        {
            name: 'Above 60',
            data: ageChart?.after_60 ? ageChart?.after_60 : []
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
            categories: ageFilter=="Year"  ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] :  ageFilter=="Month"  ? ["Week1", "Week2", "Week3", "Week4"]:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
            data: genderData?.male_data ? genderData?.male_data : []
        }, {
            name: 'Female',
            data: genderData?.female_data ? genderData?.female_data : []
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
            categories: genderGraph=="Year"  ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] :  genderGraph=="Month"  ? ["Week1", "Week2", "Week3", "Week4"]:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
                    enabled: false, // Disable data labels to hide percentages
                }
            }
        },
        dataLabels: {
            enabled: false, // Ensure data labels are completely disabled
        },
        series: pieChart ? Object.values(pieChart) : [],
        labels: pieChart ? Object.keys(pieChart) : [],
    };
    
    
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
                            <option value={"Week"}>Week</option>
                            <option value={"Month"}>Month</option>
                            <option value={"Year"}>Year</option>
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

 

      
    <div className="col-xl-6 col-lg-6 mt-4" style={{
        height:"500px"
    }}>
        <div className="card shadow border-0 p-4 h-100" style={{
            display:"flex",

        }}>
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
            
            <Chart options={options2} series={options2.series} type="pie" width='100%' height={350} style={{
                marginTop:"2rem"
            }} />
        </div>
    </div>
    <div className="col-xl-6 col-lg-6 mt-4" 
    style={{
        height:"500px"
    }}
    >
        <div className="card shadow border-0 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="align-items-center mb-0">Doctor's Performance</h6>
                <div className="mb-0 position-relative d-flex">
                    <select className="form-select form-control" id="dailychart" onChange={(e)=>{
                        setSelectedDoctor(e.target.value)
                    }}>
                        {allDoctors && allDoctors.map((e)=>{
                            return (
                                <option value={e.id}>{e.full_name}</option>
                            )
                        })}
                    </select>
                    <select className="form-select form-control ml-4" id="dailychart" onChange={(e)=>{
                        setCompletedParam(e.target.value)
                    }}>
                        <option value={"week"}>Week</option>
                        <option value={"month"}>Month</option>
                        <option value={"year"}>Year</option>
                    </select>
                </div>
            </div>
            <Chart options={lineChartOptions} series={lineChartOptions.series} type="line" width='100%' height={350} />
        </div>
    </div>


        </>
    )
}