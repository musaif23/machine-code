import React, { useState } from "react";
import { DataType } from "./Class";
import StudentTable from "./StudentTable";

export const ClassFolder = ({ explorer }) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [folderName, setFolderName] = useState<string>("");
  const [visiblity, setVisibility] = useState({
    visible: false,
    isFolder: false,
  });

  const handleAddFolder = (value: boolean) => {
    setVisibility({
      ...visiblity,
      visible: !visiblity.visible,
      isFolder: value,
    });
  };

  return (
    <>
      <div>
        <div style={{ margin: "8px" }}>
          <input
            type="text"
            onChange={(e) => {
              setFolderName(e.target.value);
            }}
          />
          <button>Add Folder</button>
        </div>

        {explorer.map((element: DataType) => {
          return (
            <>
              <div
                onClick={() => {
                  setExpand(!expand);
                }}
                style={{ margin: "15px" }}
              >
                {element.isFolder ? `📁` : `📄`}
                {element.name}&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              {expand && <StudentTable data={element.items} />}
            </>
          );
        })}
      </div>
    </>
  );
};

export default ClassFolder;
