import Header from "./components/Header";
import Home from "./components/Home";
import NewTransaction from "./components/NewTransaction";
import { useSelector } from "react-redux";
import { selectTransactions } from "./features/transactions/transactionsSlice";
import { useTransactions } from "./useTransactions";


const App = () => {

  const { transactions} = useSelector(selectTransactions);


const {
    // transactions,
    setTransactions,
    removeTransaction,
    removeAllTransactions,
    addNewTransaction,
    incomeTransactions,
    expenseTransactions,
    calculateTotal,
    incomeTotal,
    expenseTotal,
    finalAmount,
} = useTransactions();

  return (
    <div>
      <Header />
      <Home
        transactions={transactions}
        removeTransaction={removeTransaction}
        incomeTransactions={incomeTransactions}
        expenseTransactions={expenseTransactions}
        finalAmount={finalAmount}
        incomeTotal={incomeTotal}
        expenseTotal={expenseTotal}
        removeAllTransactions={removeAllTransactions}
       
      />

      <NewTransaction
        addNewTransaction={addNewTransaction}
        setTransactions={setTransactions}
        transactions={transactions}

      />

    </div>
  );
}

export default App;
