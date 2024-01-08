import "./App.css";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";


function App() {
  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
