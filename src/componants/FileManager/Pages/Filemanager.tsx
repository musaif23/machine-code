import React from "react";
import explorer from "../Data/folderData";
import { useState } from "react";
import Folders from "./Folders";
import useTraverse from "../Hooks/tree.js";

const FileManager: React.FC = () => {
  const [explorerData, setExplorerData] = useState<unknown>(explorer);
  //   console.log(state);
  const { insertNode } = useTraverse();

  const handleInsertNode = (folderId, item, isFolder) => {
    // console.log(folderId, item, isFolder);
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    console.log(finalTree);
    setExplorerData(finalTree);
  };
  return (
    <>
      <Folders explorer={explorerData} handleInsertNode={handleInsertNode} />
    </>
  );
};
export default FileManager;
