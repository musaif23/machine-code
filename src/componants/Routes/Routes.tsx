import { Route, Routes } from "react-router-dom";
import FileManager from "../FileManager/Pages/Filemanager";
import PaginationData from "../Pagination/Pages/PaginationData";
import Crausal from "../Crausal/Pages/Creausal";
import PasswordGenerator from "../PasswordGenerator/Pages/PasswordGenerator";
import FormValidation from "../FormValidation/Pages/Form";
import PromiseComp from "../PromiseComp/PromiseComp";
import Class from "../Classes/Pages/Class";
import Stopwatch from "../StopWatch/Pages/Stopwatch";

const RoutesForRender: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/fileManager" element={<FileManager />}></Route>
        <Route path="/stopwatch" element={<Stopwatch />}></Route>
        <Route path="/pagination" element={<PaginationData />}></Route>
        <Route path="/crausal" element={<Crausal />}></Route>
        <Route path="/formValidation" element={<FormValidation />}></Route>
        <Route path="/promise" element={<PromiseComp />}></Route>
        <Route path="/class" element={<Class />}></Route>
        <Route
          path="/passwordGenerator"
          element={<PasswordGenerator />}
        ></Route>
      </Routes>
    </>
  );
};
export default RoutesForRender;
