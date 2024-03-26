import { useState } from "react";
import "../Style/passwordGenerator.css";
import usePasswordGenerator from "../Hooks/passwordGenerator";

const PasswordGenerator: React.FC = () => {
  const initialData = [
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
    { title: "Include Uppercase Letters", state: false },
  ];
  const [checkboxData, setCheckBoxData] = useState(initialData);
  const { password, errorMsg, generatePassword } = usePasswordGenerator();

  const handleCheckBoxData = (i: number) => {
    const data = [...checkboxData];
    data[i].state = !data[i].state;

    // console.log(data);
    setCheckBoxData(data);
  };

  const [length, setLength] = useState(0);
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <>
      <div className="containerForPasswordGenerator">
        {password.length && (
          <div className="copyPasswordSection">
            <h5>{password}</h5>
            <button className="btn btn-success" onClick={() => handleCopy()}>
              {copy ? "Copied" : "Copy"}
            </button>
          </div>
        )}

        <div className="lengthOfPassword main">
          <div className="upperDive">
            <h5>Character Length</h5>
            <h5>{length}</h5>
          </div>
          <input
            type="range"
            min={4}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>

        <div className="passwordOptions">
          {checkboxData.map((element, i) => {
            return (
              <>
                <div>
                  <span>
                    <input
                      type="checkbox"
                      checked={element.state}
                      onChange={() => {
                        handleCheckBoxData(i);
                      }}
                    />
                    {element.title}
                  </span>
                </div>
              </>
            );
          })}
        </div>

        <div className="passwordGeneratorButtonSection main">
          <div className="upperDive">
            <h5>span</h5>
            <h5>Medium</h5>
          </div>
          <button
            className="btn btn-success"
            onClick={() => generatePassword(checkboxData, length)}
          >
            GENERATE PASSWORD
          </button>
          {errorMsg.length > 0 && (
            <small className="text-danger" style={{ margin: "auto" }}>
              {errorMsg}
            </small>
          )}
        </div>
      </div>
    </>
  );
};
export default PasswordGenerator;
