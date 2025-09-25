import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Mainlayout from "./components/layouts/Mainlayot";

export default function Home() {
  return (
    <Routes>
      <Route element={<Mainlayout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/booking" element={<BookingPage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Route>
    </Routes>
  );
}
