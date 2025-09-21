import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";
import Spinner from "./Components/Spninner/Spinner";

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())
      
function App() {
  return (
    <>
      <div>
        <Suspense fallback={<Spinner></Spinner>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
      </div>
    </>
  );
}

export default App;
