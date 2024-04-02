import React, { useState } from "react";
import ClassFolder from "./ClassFolder";
import data from "../ExplorerData/explorerData";

export interface DataType {
  id: number;
  name: string;
  isFolder: boolean;
  items: [];
}

export const Class: React.FC = () => {
  const [explorerData, setExplorerData] = useState<DataType[]>(data);
  return (
    <>
      <div>
        <ClassFolder
          explorer={explorerData}
          setExplorerData={setExplorerData}
        />
      </div>
    </>
  );
};
export default Class;
