import React from "react";

import Chart from 'react-apexcharts'
let options = {
    series: [{
        name: 'Male',
        data: [300, 250, 548, 440, 550, 570, 560, 610, 580, 630, 600, 660]
    }, {
        name: 'Female',
        data: [256, 480, 560, 760, 850, 1010, 980, 870, 1050, 910, 1140, 940]
    }, {
        name: 'Children',
        data: [480, 223, 256, 350, 410, 360, 260, 450, 480, 520, 530, 410]
    }],
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        type: 'radialBar',
        dropShadow: {
          enabled: true,
          top: 10,
          left: 0,
          bottom: 0,
          right: 0,
          blur: 2,
          color: '#45404a2e',
          opacity: 0.35
        },
    },
    colors: ['#396cf0', '#53c797', '#f1b561', '#f0735a'],
    plotOptions: {
        radialBar: {
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
    series: [44, 55, 67, 83],
    labels: ['Cardilogram', 'Gynecology', 'Dental Care', 'Neurology'],
}

export default function Charts(){
    return(
        <>
        <div className="col-xl-8 col-lg-7 mt-4">
            <div className="card shadow border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="align-items-center mb-0">Patients visit by Gender</h6>
                    
                    <div className="mb-0 position-relative">
                        <select className="form-select form-control" id="yearchart">
                            <option defaultValue>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                        </select>
                    </div>
                </div>
                <Chart options={options} series={options.series} type="bar" width='100%' height={350} />
            </div>
        </div>

        <div className="col-xl-4 col-lg-5 mt-4">
            <div className="card shadow border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="align-items-center mb-0">Patients by Department</h6>
                    
                    <div className="mb-0 position-relative">
                        <select className="form-select form-control" id="dailychart">
                            <option defaultValue>Today</option>
                            <option>Yesterday</option>
                        </select>
                    </div>
                </div>
                <Chart options={options2} series={options2.series} type="radialBar" width='100%' height={350} />
            </div>
        </div>
        </>
    )
}