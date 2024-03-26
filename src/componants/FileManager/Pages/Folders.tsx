import { useState } from "react";

export interface DATATYPE {
  id: string;
  name: string;
  isFolder: boolean;
  items: [];
}

const Folders: React.FC = ({ explorer, handleInsertNode }) => {
  // console.log(explorer.items);

  const [expand, setExpand] = useState<boolean>(false);
  const [folderName, setFolderName] = useState({ Name: "" });
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  //This function is for Toggling of subFolders and Input Field
  const propogation = (
    e: React.ChangeEvent<HTMLButtonElement>,
    isFolder: boolean
  ) => {
    e.stopPropagation();
    setExpand(true);

    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  //Function to add folder
  const addFolder = (e) => {
    handleInsertNode(explorer.id, folderName.Name, showInput.isFolder);

    setShowInput({ ...showInput, visible: false });
  };

  if (explorer.isFolder) {
    return (
      <>
        <div className="folderStructure">
          <h4
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            📁 {explorer.name} &nbsp;&nbsp;
            <button
              onClick={(e) => {
                propogation(e, true);
              }}
            >
              + Folder
            </button>
            &nbsp;
            <button
              onClick={(e) => {
                propogation(e, false);
              }}
            >
              + File
            </button>
          </h4>
          <div
            style={{
              paddingLeft: "30px",
              display: expand ? "block" : "none",
            }}
          >
            {showInput.visible && (
              <div className="inputContainer">
                {showInput.isFolder ? "📁" : "📄"}
                <input
                  type="text"
                  autoFocus
                  className="inputContainer__input"
                  onChange={(e) => {
                    setFolderName({
                      ...folderName,
                      Name: e.target.value,
                    });
                  }}
                />
                <button
                  onClick={(e) => {
                    addFolder(e);
                  }}
                >
                  Add
                </button>
              </div>
            )}
            {explorer.items.map((element: DATATYPE) => {
              return (
                <>
                  <Folders
                    explorer={element}
                    handleInsertNode={handleInsertNode}
                  />
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h4
          style={{
            cursor: "pointer",
          }}
        >
          📄 {explorer.name}
        </h4>
      </>
    );
  }
};

export default Folders;
