import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/pages/Home/Home";
import TweetsPage from "@/pages/Tweets/Tweets";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/tweets" element={<TweetsPage />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
