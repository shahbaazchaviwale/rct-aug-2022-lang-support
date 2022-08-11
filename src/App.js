import "./App.css";
import { Suspense } from "react";

import TopNavbar from "./Components/Top_Nav";
import HomeApp from "./HomeApp";

function App() {
  const loadingMarkup = <h2>Loading...</h2>;
  return (
    // Suspense tag wont allow to reflect code
    <Suspense fallback={loadingMarkup}>
      <>
        <TopNavbar />
        <HomeApp />
      </>
    </Suspense>
  );
}

export default App;
