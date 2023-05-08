import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimesP={availableTimes} />}
        />
      </Routes>
    </>
  );
}

export default App;
