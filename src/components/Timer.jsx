import React, { useState, useEffect } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);

            if (isBreak) {
              alert("Break completed!");
              setMinutes(25);
              setSeconds(0);
              setIsBreak(false);
            } else {
              alert("You need some break!");
              setMinutes(5);
              setSeconds(0);
              setIsBreak(true);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isBreak]);

  const handleTimerStart = () => {
    setIsActive(true);
  };

  const handleTimerPause = () => {
    setIsActive(false);
  };

  const handleTimerReset = () => {
    setIsActive(false);
    setMinutes(isBreak ? 5 : 25);
    setSeconds(0);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-6xl font-bold mb-6">{`${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`}</h1>
      <div className="flex gap-4">
        <button
          onClick={handleTimerStart}
          className="bg-green-600 uppercase text-white px-4 py-2 font-mono rounded-full"
        >
          Start
        </button>
        <button
          onClick={handleTimerPause}
          className="bg-yellow-400 uppercase text-white px-4 py-2 font-mono rounded-full"
        >
          Pause
        </button>
        <button
          onClick={handleTimerReset}
          className="bg-red-600 uppercase text-white px-4 py-2 font-mono rounded-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
