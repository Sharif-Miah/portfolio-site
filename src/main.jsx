import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from '@tanstack/react-query'
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes/Routes.jsx";

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#112]">
      <App />
    </div>
  </React.StrictMode>
);
