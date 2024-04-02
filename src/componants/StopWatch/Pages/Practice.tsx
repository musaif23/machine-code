import React, { useEffect, useState } from "react";

const Practice: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [rec, setRec] = useState<string[]>([]);

  const handleRec = () => {
    const arr: string[] = [...rec];
    arr.push(timer(time));
    setRec(arr);
  };

  const timer = (time: number) => {
    const milisec: string = `0${Math.floor(time % 100)}`.slice(-2);
    const sec: string = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const min: string = `0${Math.floor((time / 60000) % 60)}`.slice(-2);

    return `${min}m : ${sec}s : ${milisec}ms`;
  };

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <div>
        <div className=" m-3" style={{ textAlign: "center" }}>
          {timer(time)}
        </div>
        <div className="m-2" style={{ textAlign: "center" }}>
          {!isRunning && time == 0 && (
            <button
              className="btn btn-success m-1"
              onClick={() => {
                setIsRunning(true);
              }}
            >
              Start
            </button>
          )}
          <button
            className="btn btn-warning m-1"
            onClick={() => {
              setIsRunning(!isRunning);
            }}
          >
            Stop/Resume
          </button>
          <button
            className="btn btn-info m-1"
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
          <button
            className="btn btn-dark m-1"
            onClick={() => {
              handleRec();
            }}
          >
            Record
          </button>
        </div>
      </div>
      {rec.length > 0 && (
        <div>
          {rec.map((e, i) => {
            return (
              <>
                <div>{`Rec ${i + 1} : ${e}`}</div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Practice;
