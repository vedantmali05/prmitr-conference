import React, { useState, useEffect } from 'react';

// A single unit for the countdown timer (e.g., Days, Hours)
const TimeUnit = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-gray-800">
      {/* Pad single-digit numbers with a leading zero */}
      {String(value).padStart(2, '0')}
    </p>
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">
      {label}
    </p>
  </div>
);

const DatesTile = () => {
  // Set the target date for the countdown
  const conferenceDate = new Date('2025-08-22T00:00:00');

  // Function to calculate the time remaining
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = conferenceDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // If the conference date has passed
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  // State to hold the time remaining
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // useEffect to update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 w-[90%] mx-auto shadow-xl mt-[-50px]">
      <div className="flex flex-wrap items-center justify-between gap-6">

        {/* Left Side: Conference Date Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Conference Date
          </h2>
          <p className="text-3xl font-bold text-gray-800 mt-1">
            22<sup>nd</sup> & 23<sup>rd</sup> August 2025
          </p>
        </div>

        {/* Right Side: Countdown Timer */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 w-full sm:w-auto">
          <TimeUnit value={timeRemaining.days} label="Days" />
          <TimeUnit value={timeRemaining.hours} label="Hours" />
          <TimeUnit value={timeRemaining.minutes} label="Minutes" />
          <TimeUnit value={timeRemaining.seconds} label="Seconds" />
        </div>

      </div>
    </div>
  );
};

export default DatesTile;
