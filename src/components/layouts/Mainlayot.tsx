import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Mainlayout() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
        {/* Content will go here */}
      </main>
      <Footer />
    </div>
  );
}
