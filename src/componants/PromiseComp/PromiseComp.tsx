import React, { useEffect, useState } from "react";

export const PromiseComp = () => {
  const [click, setClick] = useState(0);
  const [state, setState] = useState({
    pending: 0,
    completed: 0,
  });

  const handleState = () => {
    const clickCountForPending = state.pending + 1;
    setState({ ...state, pending: clickCountForPending });
  };

  useEffect(() => {
    const fun = setTimeout(() => {
      setState({ ...state, pending: 0, completed: click });
    }, 4000);

    return () => clearTimeout(fun);
  }, [click]);

  return (
    <>
      <div
        style={{
          padding: "10px",
          margin: "10px",
          border: "1px solid black",
          display: "flex",
          gap: "10px",
        }}
      >
        Pending:<span>{state.pending}</span>
        Completed:<span>{state.completed}</span>
        click: <span>{click}</span>
      </div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            setClick(click + 1);
            handleState();
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default PromiseComp;
