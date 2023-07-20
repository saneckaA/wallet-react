import React from 'react'
import { Container, Item, ItemMain } from './styled';
import TransactionList from './TransactionList';
import MainPanel from './MainPanel';

function Home({
    transactions, 
    removeTransaction, 
    incomeTransactions, 
    expenseTransactions, 
    finalAmount, 
    incomeTotal, 
    expenseTotal, 
    removeAllTransactions}) 
    
    {
    return (
        <Container>
            <Item>
                <TransactionList
                    transactions={transactions}
                    incomeTransactions={incomeTransactions}
                    expenseTransactions={expenseTransactions}
                    removeTransaction={removeTransaction}
                    incomeTotal={incomeTotal}
                    expenseTotal={expenseTotal}
                
                />
            </Item>
            <ItemMain>
                <MainPanel
                    finalAmount={finalAmount}
                    removeAllTransactions={removeAllTransactions}
                />
            </ItemMain>
        </Container>
    )
}

export default Home;