


import React, {Component} from 'react';
import { Row, Col, Card, Table} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import CreateEvent from './CreateEvent.component';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class UpcomingEventsTable extends Component {
    constructor(props) {
        super(props);

        const events = [
            {
                id: 0,
                title: 'All Day Event very long title',
                allDay: true,
                start: new Date(2020, 4, 0),
                end: new Date(2020, 4, 1),
            },
            {
                id: 1,
                title: 'Long Event',
                start: new Date(2020, 4, 7),
                end: new Date(2020, 4, 10),
            }
        ]
        this.state = {
            events: events
        };
    }

    

    
    render() {
        return(
            <div>
                <Row id="events-table-wrapper">
                    <Col md={8}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Upcoming Events</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6 className="mb-1">Clean up</h6>
                                            </td>
                                            <td>
                                                <h6 className="mb-1">April 14, 2020</h6>
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                    {/* Create new Event Button and Modal */}
                        <CreateEvent></CreateEvent>
                    </Col>
                </Row>
                <Row id="calendar-wrapper">
                    <Calendar
                        events={this.state.events}
                        startAccessor="start"
                        endAccessor="end"
                        defaultDate={moment().toDate()}
                        localizer={localizer}
                    />
                </Row>
            </div>
        );
        
    }
}

export default UpcomingEventsTable;
               