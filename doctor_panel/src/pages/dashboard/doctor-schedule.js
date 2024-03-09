/* eslint-disable */

import React from "react";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from '../../components/scrollTop'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function DoctorSchedule(){

    let  events = [
        {
            title: 'Business Lunch',
            start: '2024-05-03T13:00:00',
            constraint: 'businessHours'
        },
        {
            title: 'Meeting',
            start: '2024-02-13T11:00:00',
            constraint: 'availableForMeeting',
            color: '#53c797'
        },
        {
            title: 'Conference',
            start: '2024-03-18',
            end: '2022-04-20'
        },
        {
            title: 'Party',
            start: '2024-04-29T20:00:00'
        },
    ]

    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar colClass ="col-xl-3 col-lg-4 col-md-5 col-12"/>

                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <h5 className="mb-0">Schedule Timing</h5>
                        
                        <div className="row">
                            <div className="col-xl-2 col-lg-4 col-12 mt-4">
                                <div id="external-events">
                                    <div className="card border-0 p-4 shadow rounded">
                                        <span className="h6">All Events</span>
                                    
                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                            <div className="fc-event-main">Metting</div>
                                        </div>
                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                            <div className="fc-event-main">Operations</div>
                                        </div>
                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                            <div className="fc-event-main">Lunch</div>
                                        </div>
                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                            <div className="fc-event-main">Conference</div>
                                        </div>
                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                            <div className="fc-event-main">Business Metting</div>
                                        </div>
                                    
                                        <div className="mt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="drop-remove"/>
                                                <label className="form-check-label" htmlFor="drop-remove">Remove after drop</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-10 col-lg-8 col-12 mt-4">
                                <div id="calendar-container" className="card rounded border-0 shadow p-4">
                                <FullCalendar
                                    defaultView="dayGridMonth"
                                    plugins={[dayGridPlugin]}
                                    events={events}
                                    headerToolbar = {
                                        {
                                            left: 'prev,next today addEventButton',
                                            center: 'title',
                                            right :'dayGridMonth,dayGridWeek,dayGridDay'
                                        }
                                    }
                                      customButtons={
                                        {
                                            addEventButton : {
                                                text:'Add Event',
                                                click : function (){
                                                    var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                                                }
                                            }
                                        }
                                     }
                                     
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}