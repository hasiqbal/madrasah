"use client";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarComponent = (props) => {
  const { assignments } = props;

  // Transforming assignments data for the calendar component
  const events = assignments.map((assignment) => ({
    id: assignment._id, // Use a unique identifier for the assignment
    title: assignment.assignmentName,
    start: new Date(), // Use current date as a starting point
    end: new Date(assignment.dueDate), // Use assignment's due date as the end date
  }));

  return (
    <Calendar
      localizer={localizer}
      events={events} // Use the transformed events data
      startAccessor="start"
      endAccessor="end"
      style={{ width: "100vh" }}
      views={{ month: true, week: true, day: true }} 
    />
  );
};

export default CalendarComponent;
