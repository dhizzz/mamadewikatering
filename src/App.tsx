import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import QuoteRequest from "./pages/QuoteRequest";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/request-quote" element={<QuoteRequest />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </HashRouter>
  );
}
