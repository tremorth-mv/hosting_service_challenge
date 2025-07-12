"use client"
import { useEffect, useState } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleString(); // Converts date to a readable format
      setDateTime(formattedDate);
    };

    updateDateTime(); // Update date/time when component first loads

    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval when component unmounts
  }, []);

  return <div>{dateTime}</div>; // Display the current date/time
};

export default DateTime;
