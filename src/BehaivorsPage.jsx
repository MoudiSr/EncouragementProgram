import DashboardLayout from "./DashboardLayout"
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import {useState} from "react"

const localizer = momentLocalizer(moment);

const BehaivorsPage = () => {

    const [events, setEvents] = useState([ // Initialize events with an empty array
    {
        title: 'Event 1',
        start: new Date(2023, 10, 20, 10, 0),
        end: new Date(2023, 10, 20, 12, 0)
    },
    {
        title: 'Event 2',
        start: new Date(2023, 10, 21, 14, 0),
        end: new Date(2023, 10, 21, 16, 0)
    },
    // Add more events as needed
]);


   

    return (
        <DashboardLayout>
            <h1 className="text-right text-2xl">ملاحظات سلوكية</h1>
            <Calendar
                popup
                selectable
                localizer={localizer}
                style={{ height: 600, marginTop: '1rem' }}
                events={events}
            />
        </DashboardLayout>
    );
}

export default BehaivorsPage;
