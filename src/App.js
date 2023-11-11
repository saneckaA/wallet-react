import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import NewTransaction from "./components/NewTransaction";
import TransactionInfo from "./components/TransactionInfo";
import { useSelector } from "react-redux";
import { HashRouter, Routes as Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { selectIsDark } from "./themeSlice";

const App = () => {

  const calculateTotal = (transactions) => {
    return transactions.reduce((total, transaction) => total + parseFloat(transaction.price), 0);
  };

  const isDark = useSelector(selectIsDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/transactionInfo/:id" element={<TransactionInfo />} />
          <Route path="/newTransaction" element={<NewTransaction />} />
          <Route path="/" element={<Home
            calculateTotal={calculateTotal}
           
            
          />} />


        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
