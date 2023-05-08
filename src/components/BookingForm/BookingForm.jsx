import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numGuest, setNumGuest] = useState("");
  const [ocasion, setOcasion] = useState("");

  //   const [availableTimes, setAvailableTimes] = useState([
  //     "17:00",
  //     "18:00",
  //     "19:00",
  //     "20:00",
  //     "21:00",
  //     "22:00",
  //   ]);

  let displayTimes = null;

  function times(avTimes) {
    displayTimes = avTimes.map((x, index) => <option key={index}>{x}</option>);
    return displayTimes;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(date, time, numGuest, ocasion);
  }

  return (
    <>
      <form
        style={{
          display: "grid",
          maxWidth: "200px",
          gap: "20px",
          padding: "0 210px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {times(props.availableTimes)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numGuest}
          onChange={(e) => setNumGuest(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={ocasion}
          onChange={(e) => setOcasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
