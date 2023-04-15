import React from "react";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import UserRoutes from "./components/routes/UserRoutes";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <UserRoutes />
      </main>
      <Footer />
    </>
  );
}
