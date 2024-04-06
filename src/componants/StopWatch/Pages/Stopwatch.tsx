import React, { useEffect, useState } from "react";

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [command, setCommand] = useState(false);
  const [stop, setStop] = useState<boolean>(false);
  const [lap, setLap] = useState<string[]>([]);

  const timer = (time: number) => {
    const miliSec: string = `0${time % 100}`.slice(-2);
    const sec: string = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes: string = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}m : ${sec}s : ${miliSec}ms`;
  };
  const handleLap = () => {
    const array: string[] = [...lap];
    const lastIndex: number = array.length - 1;
    const rec: string = timer(time);

    if (array[lastIndex] !== rec) {
      array.push(rec);
    }

    // const filterData: string[] = array.filter((e, ind) => {
    //   let isSame = true;
    //   for (let i = ind + 1; i < array.length; i++) {
    //     if (e == array[i]) {
    //       isSame = false;
    //     }
    //   }
    //   if (isSame) {
    //     return e;
    //   }
    // });
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
          {lap.map((e: number, i) => {
            return (
              <>
                <div style={{ paddingLeft: "10px" }}>{`Rec ${
                  i + 1
                }  -  ${e}`}</div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Stopwatch;
