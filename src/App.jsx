import "./App.css";

import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <div className="">
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <div className="max-w-7xl mx-auto">
              <RouterProvider router={router} />
            </div>
          </HelmetProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
