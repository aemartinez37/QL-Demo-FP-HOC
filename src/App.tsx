import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CountriesWrapper } from "./components/Countries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { CountryInfoWrapper } from "./components/CountryInfo";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/:countryAlpha3Code" element={<CountryInfoWrapper />} />
          <Route path="/" element={<CountriesWrapper />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
