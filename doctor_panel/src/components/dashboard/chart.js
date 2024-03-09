import React from "react";

import Chart from 'react-apexcharts'

export default function Charts({data}){
    let options = {
        series: [{
            data: [20, 45, 40, 64, 35, 25, 35]
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
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
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
            data: [10, 25, 30, 54, 45, 39, 15]
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
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
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
            data: [15, 20, 10, 45, 20, 10, 5]
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
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
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
            data: [3, 5, 7, 11, 8, 5, 7]
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
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
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
                        <h6 className="align-items-center mb-0">Total Appointments <span className="badge rounded-pill bg-soft-primary ms-1">+15%</span></h6>
                        <p className="mb-0 text-muted">{data?.all_appointments}+ Week</p>
                    </div>
                    <Chart options={options} series={options.series} type="area" width='100%' height={90}/>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 mt-4">
                <div className="card shadow border-0 p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="align-items-center mb-0">Pending Appointments <span className="badge rounded-pill bg-soft-warning ms-1">+5%</span></h6>
                        <p className="mb-0 text-muted">{data?.pending_appointments}+ Week</p>
                    </div>
                    <Chart options={options3} series={options3.series} type="area" width='100%' height={90}/>
                </div>
            </div>
            
            
            <div className="col-xl-3 col-lg-6 mt-4">
                <div className="card shadow border-0 p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="align-items-center mb-0">Canceled Appointments <span className="badge rounded-pill bg-soft-danger ms-1">-5%</span></h6>
                        <p className="mb-0 text-muted">{data?.canceled_appointments}+ Week</p>
                    </div>
                    <Chart options={options4} series={options4.series} type="area" width='100%' height={90}/>
                </div>
            </div>
            
            <div className="col-xl-3 col-lg-6 mt-4">
                <div className="card shadow border-0 p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="align-items-center mb-0">Completed<br></br>Appointments <span className="badge rounded-pill bg-soft-success ms-1">+20%</span></h6>
                        <p className="mb-0 text-muted">{data?.total_appointments}+ Week</p>
                    </div>
                    <Chart options={options2} series={options2.series} type="area" width='100%' height={90}/>
                </div>
            </div>
            
      
        </div>
    )
}