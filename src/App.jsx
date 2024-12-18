import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import VESForm from "./components/Modules/VESForm/VESForm";
import COPForm from "./components/Modules/COPForm/COPForm";
import PENForm from "./components/Modules/PENForm/PENForm";
import ARSForm from "./components/Modules/ARSForm/ARSForm";
import DIFForm from "./components/Modules/DIFForm/DIFForm";
import ESPForm from "./components/Modules/ESPForm/ESPForm";

function App() {
  return (
    <BrowserRouter basename="/calculadora">
      <Header />
      <Routes>
        <Route path="/VES" element={<VESForm />} />
        <Route path="/COP" element={<COPForm />} />
        <Route path="/PEN" element={<PENForm />} />
        <Route path="/ARS" element={<ARSForm />} />
        <Route path="/ESP" element={<ESPForm />} />
        <Route path="/" element={<DIFForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
