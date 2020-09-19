import React, { useEffect } from "react";
import Header from "components/Header";
import Landing from "components/Landing";
import Footer from "components/Footer";
import FeedBack from "components/common/FeedBack";
import { useAirportDispatch } from "models/airport";
import getAirport from "api/airport";

function useAirport() {
  const dispatch = useAirportDispatch();

  useEffect(() => {
    getAirport().then((airports) => dispatch({ type: "update", airports }));
  }, [dispatch]);
}

function App() {
  useAirport();

  return (
    <div>
      <Header />
      <Landing />
      <Footer />
      <FeedBack />
    </div>
  );
}

export default App;
