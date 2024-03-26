import React, { useState } from "react";

const StudentTable: React.FC = ({ data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      {data.map((e) => {
        return (
          <>
            <div
              onClick={() => {
                setExpand(!expand);
              }}
              style={{ marginLeft: "30px" }}
            >
              📁{e.name}
            </div>
            <div style={{ display: expand ? "block" : "none" }}>
              <table className="table table-strip">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">RollNo</th>
                    <th scope="col">Result</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {e.items.map((el, i) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{i + 1}</th>
                          <td>{el.name}</td>
                          <td>{el.rollno}</td>
                          <td>{el.result}</td>
                          <td>
                            <button>🚮</button>&nbsp; <button>📄</button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default StudentTable;
