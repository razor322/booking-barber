import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import BookingWizard from "@/components/BookingWizard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={
          <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <BookingWizard />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
