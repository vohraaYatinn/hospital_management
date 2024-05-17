import React from "react";

import Chart from 'react-apexcharts'

export default function Charts({data, time_period_dict}){
    let options = {
        series: [{
            data: Math.floor(data?.total || 0)
        }],
        chart: {
            type: 'area',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#396cf0'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: true,
                formatter: function(val) {
                    return time_period_dict && time_period_dict[val];
                }},
            y: {
                title: {
                    formatter: function (seriesName) {
                        return 'Patients'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    let options2 = {
        series: [{
            data: Math.floor(data?.completed || 0)
        }],
        chart: {
            type: 'area',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#53c797'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: true,
                formatter: function(val) {
                    return time_period_dict && time_period_dict[val];
                }},
            y: {
                title: {
                    formatter: function (seriesName) {
                        return 'Patients'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    let options3 = {
        series: [{
            data: Math.floor(data?.pending || 0)
        }],
        chart: {
            type: 'area',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#f1b561'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: true,
                formatter: function(val) {
                    return time_period_dict && time_period_dict[val];
                }},
            y: {
                title: {
                    formatter: function (seriesName) {
                        return 'Patients'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    let options4 = {
        series: [{
            data: Math.floor(data?.pending || 0)
        }],
        chart: {
            type: 'area',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#f0735a'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: true,
                formatter: function(val) {
                    return time_period_dict && time_period_dict[val];
                }},
            y: {
                title: {
                    formatter: function (seriesName) {
                        return 'Patients'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    return(
        <div className="row">
            <div className="col-xl-3 col-lg-6 mt-4">
                <div className="card shadow border-0 p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="align-items-center mb-0">Total<br/>Appointment </h6>

                    </div>
                    <Chart options={options} series={options.series} type="area" width='100%' height={90}/>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 mt-4">
                <div className="card shadow border-0 p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="align-items-center mb-0">Pending<br/>Appointment</h6>
                    </div>
                    <Chart options={options3} series={options3.series} type="area" width='100%' height={90}/>
                </div>
            </div>
            
            
            <div className="col-xl-3 col-lg-6 mt-4">
                <div className="card shadow border-0 p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="align-items-center mb-0">Canceled<br/>Appointment </h6>
                    </div>
                    <Chart options={options4} series={options4.series} type="area" width='100%' height={90}/>
                </div>
            </div>
            
            <div className="col-xl-3 col-lg-6 mt-4">
                <div className="card shadow border-0 p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="align-items-center mb-0">Completed<br/>Appointment<br></br></h6>
                    </div>
                    <Chart options={options2} series={options2.series} type="area" width='100%' height={90}/>
                </div>
            </div>
            
      
        </div>
    )
}