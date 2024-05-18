import React from "react";
import { useEffect } from "react";

import Chart from 'react-apexcharts'


export default function Charts({pieChart, setFormPie, ageGraph, setAgeGraph, genderChart, setGenderGraph, ageFilter}){
    useEffect(()=>{
        console.log(ageFilter)
    },[ageFilter])
    let optionsAge = {
        series: [{
            name: 'Male',
            data: [300, 250, 548, 440, 550, 570, 560, 610, 580, 630, 600, 660]
        }, {
            name: 'Female',
            data: [256, 480, 560, 760, 850, 1010, 980, 870, 1050, 910, 1140, 940]
        }
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
            categories: ageFilter=="year"  ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] : ["Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday", "Sunday"],
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
    let genderGraph = {
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
        series: Object.values(genderChart),
        labels: Object.keys(genderChart),
    }
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
                    <h6 className="align-items-center mb-0">Patients visit by Gender</h6>
                    
                    <div className="mb-0 position-relative">
                    <select className="form-select form-control" id="dailychart" onChange={(e)=>{
                            setGenderGraph(e.target.value)
                        }}>                            
                        <option defaultValue>Week</option>
                            <option>Month</option>
                            <option>Year</option>
                        </select>
                    </div>
                </div>
                <Chart options={genderGraph} series={genderGraph.series} type="pie" width='100%' height={350} />
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 mt-4">
            <div className="card shadow border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="align-items-center mb-0">Patients visit by Age</h6>
                    
                    <div className="mb-0 position-relative">
                    <select className="form-select form-control" id="dailychart" onChange={(e)=>{
                            setAgeGraph(e.target.value)
                        }}>
                            <option defaultValue>Week</option>
                            <option>Year</option>
                        </select>
                    </div>
                </div>
                <Chart options={optionsAge} series={optionsAge.series} type="bar" width='100%' height={350} />
            </div>
        </div>

        <div className="col-xl-12 col-lg-12 mt-4">
            <div className="card shadow border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="align-items-center mb-0">Patients by Department</h6>
                    
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