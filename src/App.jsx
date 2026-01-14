import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CurrencyForm from "./components/Modules/CurrencyForm/CurrencyForm";
import DIFForm from "./components/Modules/DIFForm/DIFForm";
import { APP_CONFIG } from "./constants";

function App() {
  return (
    <BrowserRouter basename={APP_CONFIG.basename}>
      <Header />
      <Routes>
        <Route path="/:currency" element={<CurrencyForm />} />
        <Route path="/" element={<DIFForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
