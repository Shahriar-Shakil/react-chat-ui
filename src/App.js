import './App.css'

import React, { Suspense, lazy, useEffect } from "react";

import ChatShell from "./components/chatsContainer/shell/ChatShell";

// const PublicRoute
function App() {
  return <div className="Apps h-100"><ChatShell /></div>;
}

export default App;
