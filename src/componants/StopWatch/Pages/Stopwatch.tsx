import React, { useEffect, useState } from "react";

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [command, setCommand] = useState(false);
  const [stop, setStop] = useState<boolean>(false);
  const [lap, setLap] = useState<string[]>([]);

  const timer = (time: number) => {
    let miliSec: number = time % 100;
    let sec: number = Math.floor((time / 1000) % 60);
    let minutes: number = Math.floor((time / 60000) % 60);
    return `${minutes} : ${sec} : ${miliSec}`;
  };
  const handleLap = () => {
    let array: string[] = [...lap];

    array.push(timer(time));

    setLap(array);
  };

  useEffect(() => {
    let interval: number | undefined;
    if (command) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [command]);

  return (
    <>
      <div
        className="stopWatch"
        style={{
          padding: "20px",
        }}
      >
        <div style={{ textAlign: "center" }}>{timer(time)}</div>
        <div style={{ textAlign: "center" }}>
          {!command && time == 0 && (
            <button
              className="btn btn-success m-1"
              onClick={() => {
                setCommand(true);
              }}
            >
              Start
            </button>
          )}
          <button
            className="btn btn-danger m-1"
            onClick={() => {
              setCommand(!command);
              setStop(!stop);
            }}
          >
            {!stop ? "Stop" : "Resume"}
          </button>
          <button
            className="btn btn-warning m-1"
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
          <button
            className="btn btn-info m-1"
            onClick={() => {
              handleLap();
            }}
          >
            Record
          </button>
        </div>
      </div>

      {lap.length > 0 && (
        <div>
          <ol>
            {lap.map((e: number) => {
              return (
                <>
                  <li>
                    <span style={{ paddingLeft: "10px" }}>{e}</span>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
};

export default Stopwatch;
