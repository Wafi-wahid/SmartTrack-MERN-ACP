import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Calender from "./pages/Calender";
import Tasks from "./pages/Task";
import Journal from "./pages/Journal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </Router>
  );
}

export default App;
