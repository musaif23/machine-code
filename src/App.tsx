// import { useState } from "react";
// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componants/NavBar/Navbar";
// import "../node_modules/bootstrap-icons/icons";
import RoutesForRender from "./componants/Routes/Routes";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <RoutesForRender />
    </>
  );
}

export default App;
