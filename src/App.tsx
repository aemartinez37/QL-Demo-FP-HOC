import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Countries } from "./components/Countries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { CountryInfo } from "./components/CountryInfo";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/:countryAlpha3Code" element={<CountryInfo />} />
          <Route path="/" element={<Countries />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
