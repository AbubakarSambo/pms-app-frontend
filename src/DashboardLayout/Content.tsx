import { Routes, Route } from "react-router-dom";
import Overview from "../pages/Dashboard/Overview";

const Content = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Overview />} />
    </Routes>
  );
};

export default Content;
