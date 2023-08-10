import React from 'react'
import { Container, Item, ItemMain } from './styled';
import TransactionList from './TransactionList';
import MainPanel from './MainPanel';
import { selectIsTransactionExpense, selectIsTransactionIncome } from '../../features/transactions/transactionsSlice';
import { useSelector } from 'react-redux';

const Home = ({ transactions, calculateTotal }) => {

    const incomeTransactions = useSelector(selectIsTransactionIncome);
    const expenseTransactions = useSelector(selectIsTransactionExpense);

    const incomeTotal = calculateTotal(incomeTransactions);
    const expenseTotal = calculateTotal(expenseTransactions.map(transaction => ({ ...transaction, price: -1 * transaction.price })));
    const finalAmount = (incomeTotal - expenseTotal);


    {
        return (
            <Container>
                <Item>
                    <TransactionList
                        transactions={transactions}
                        calculateTotal={calculateTotal}
                        incomeTotal={incomeTotal}
                        expenseTotal={expenseTotal}

                    />
                </Item>
                <ItemMain>
                    <MainPanel
                        finalAmount={finalAmount}
                    />
                </ItemMain>
            </Container>
        )
    }
};
export default Home;