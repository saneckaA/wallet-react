import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import NewTransaction from "./components/NewTransaction";

import { useSelector } from "react-redux";
import { getTransactionById, selectTransactions } from "./features/transactions/transactionsSlice";
import { HashRouter, Routes as Switch, Link, Route, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useSwitchTheme } from "./useSwitchTheme";
import TransactionInfo from "./components/TransactionInfo";


const App = () => {

  const transactions = useSelector(selectTransactions);

  const calculateTotal = (transactions) => {
    return transactions.reduce((total, transaction) => total + parseFloat(transaction.price), 0);
  };

  const [theme, toggleTheme] = useSwitchTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/transactionInfo/:id" element={<TransactionInfo />} />
          <Route path="/newTransaction" element={<NewTransaction />} />
          <Route path="/" element={<Home
            calculateTotal={calculateTotal}
            toggleTheme={toggleTheme}
            theme={theme}
          />} />


        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
