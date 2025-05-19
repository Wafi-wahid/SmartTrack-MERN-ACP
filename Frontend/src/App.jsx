import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Calender from "./pages/Calender";
import Task from "./pages/Task";
import Journal from "./pages/Journal";
import Meditation from "./pages/Meditation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/task" element={<Task />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/Meditation" element={<Meditation />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
