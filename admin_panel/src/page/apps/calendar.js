import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar(){
  let  events = [
        {
            title: 'Business Lunch',
            start: '2022-04-03T13:00:00',
            constraint: 'businessHours'
        },
        {
            title: 'Meeting',
            start: '2022-04-13T11:00:00',
            constraint: 'availableForMeeting',
            color: '#53c797'
        },
        {
            title: 'Conference',
            start: '2022-04-18',
            end: '2022-04-20'
        },
        {
            title: 'Party',
            start: '2022-04-29T20:00:00'
        },
    ]
    return(
        <Wrapper>
            <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="d-md-flex justify-content-between">
                            <h5 className="mb-0">Calendar</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/">Doctris</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Calendar</li>
                                </ul>
                            </nav>
                        </div>
                        
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
                                    <div id="calendar"></div>
                                    <FullCalendar
                                        plugins={[dayGridPlugin]}
                                        initialView='dayGridMonth'
                                        weekends={true}
                                        events={events}
                                        headerToolbar= {{
                                            left: 'prev,next today addEventButton',
                                            center: 'title',
                                            right: 'dayGridMonth,dayGridWeek,dayGridDay',
                                        }}
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
        </Wrapper>
    )
}