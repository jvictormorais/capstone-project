import React from "react";
import BookingForm from "../components/BookingForm/BookingForm";

const BookingPage = (props) => {
  return <BookingForm availableTimes={props.availableTimesP} />;
};

export default BookingPage;
