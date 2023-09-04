import React, {useState} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import NewTransaction from "./components/NewTransaction";
import { useSelector } from "react-redux";
import { selectTransactions } from "./features/transactions/transactionsSlice";
import { BrowserRouter as Router, Routes as Switch, Link, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useSwitchTheme } from "./useSwitchTheme";


const App = () => {

  const transactions = useSelector(selectTransactions);

  const calculateTotal = (transactions) => {
    return transactions.reduce((total, transaction) => total + parseFloat(transaction.price), 0);
  };

  const [theme, toggleTheme] = useSwitchTheme();


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
    <Router>
      <Header />
      <Switch>
        <Route path="/" element={ <Home
        calculateTotal={calculateTotal}
        toggleTheme={toggleTheme}
        theme={theme}
      />} />
      <Route path="/newTransaction" element={ <NewTransaction />} />
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
