import React from "react";

import Chart from "react-apexcharts";

import {RiContrastDropLine, RiTestTubeLine, RiHeart3Fill, RiDashboard3Line} from '../../assets/icons/vander'

export default function Charts(){

    let options = {
        series: [93],
        chart: {
            height: 220,
            type: 'radialBar',
        },
        colors: ['#396cf0'],
        plotOptions: {
            radialBar: {
                track: {
                  background: '#b9c1d4',
                  opacity: 0.5,            
                },
                hollow: {
                    size: '70%',
                },
                dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      fontSize: '20px',
                      offsetY: 10,
                    },
                },
            },
        },
        stroke: {
            lineCap: 'round',
        },
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
    let options4 = {
        series: [90],
        chart: {
            height: 220,
            type: 'radialBar',
        },
        colors: ['#f1b561'],
        plotOptions: {
            radialBar: {
                track: {
                background: '#b9c1d4',
                opacity: 0.5,            
                },
                hollow: {
                    size: '70%',
                },
                dataLabels: {
                    name: {
                    show: false,
                    },
                    value: {
                    fontSize: '20px',
                    offsetY: 10,
                    },
                },
            },
        },
        stroke: {
            lineCap: 'round',
        },
    };
    
    return(
        <>
        <div className="col-xl-3 col-lg-6 col-12">
            <div className="row">
                <div className="col-12 mt-4 pt-2">
                    <div className="card border-0 rounded shadow">
                        <div className="d-flex justify-content-between px-4 pt-4">
                            <h6 className="align-items-center mb-0">Water <span className="badge rounded-pill bg-soft-primary ms-1">93%</span></h6>
                            <RiContrastDropLine className="text-primary h5"/>
                        </div>
                        <Chart
                            options={options}
                            series={options.series}
                            type="radialBar"
                            width='100%'
                            height={220}
                            />
                    </div>
                </div>

                <div className="col-12 mt-4 pt-2">
                    <div className="card border-0 rounded shadow p-4">
                        <div className="d-flex justify-content-between mb-3">
                            <h6 className="align-items-center mb-0">Hemoglobin <span className="badge rounded-pill bg-soft-success ms-1">19.5 g/dL</span></h6>
                            <RiTestTubeLine className="text-success h5"/>
                        </div>
                        <Chart
                            options={options2}
                            series={options2.series}
                            type="area"
                            width='100%'
                            height={90}
                            />
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-12">
            <div className="row">
                <div className="col-12 mt-4 pt-2">
                    <div className="card border-0 rounded shadow p-4">
                        <div className="d-flex justify-content-between mb-3">
                            <h6 className="align-items-center mb-0">Heartbeat <span className="badge rounded-pill bg-soft-danger ms-1">80 bpm</span></h6>
                            <RiHeart3Fill className="text-danger h5"/>
                        </div>
                        <Chart
                            options={options3}
                            series={options3.series}
                            type="area"
                            width='100%'
                            height={90}
                            />
                    </div>
                </div>

                <div className="col-12 mt-4 pt-2">
                    <div className="card border-0 rounded shadow">
                        <div className="d-flex justify-content-between px-4 pt-4">
                            <h6 className="align-items-center mb-0">Sugar levels <span className="badge rounded-pill bg-soft-warning ms-1">90 mg/dL</span></h6>
                            <RiDashboard3Line className="text-warning h5"/>
                        </div>
                        <Chart
                            options={options4}
                            series={options4.series}
                            type="radialBar"
                            width='100%'
                            height={220}
                            />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}