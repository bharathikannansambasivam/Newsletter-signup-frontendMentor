import "./App.css";
import Greeting from "./Component/Greeting";
import Subscription from "./Component/Subscription";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext, useState } from "react";
export const emailContext = React.createContext();

function App() {
  const [email, setEmail] = useState(null);
  return (
    <emailContext.Provider value={[email, setEmail]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Subscription />}>
            {" "}
          </Route>
          <Route path="/greeting" element={<Greeting />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </emailContext.Provider>
  );
}

export default App;
