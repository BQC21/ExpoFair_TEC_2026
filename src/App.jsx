import { BrowserRouter, Routes, Route } from "react-router-dom";

import QR from "./pages/QR";
import Form from "./pages/Form.jsx";
import Confirm from "./pages/Confirm.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QR />} />
          <Route path="/form" element={<Form />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
