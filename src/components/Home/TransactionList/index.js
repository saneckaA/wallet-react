import React from 'react'
import {
    Container,
    Title,
    Income,
    Expense,
    Transactions,
    List,
    Subtitle,
    Amount,
    Select,
    Card,
    RemoveButton,
    Con,
    Total
} from './styled';
import { useDispatch } from 'react-redux';
import { removeTransaction, selectIsTransactionExpense, selectIsTransactionIncome } from '../../../features/transactions/transactionsSlice';
import { useSelector } from 'react-redux';
import categoryOptions from '../../../categoryOptions';



const TransactionList = ({ calculateTotal }) => {

    const dispatch = useDispatch();

    const incomeTransactions = useSelector(selectIsTransactionIncome);
    const expenseTransactions = useSelector(selectIsTransactionExpense);

    const incomeTotal = calculateTotal(incomeTransactions);
    const expenseTotal = calculateTotal(expenseTransactions.map(transaction => ({ ...transaction, price: -1 * transaction.price })));

    const getCategoryIcon = (category) => {
        const selectedCategory = categoryOptions.find(option => option.value === category);
        return selectedCategory ? selectedCategory.icon : "";
    };

    return (

        <Container>
            <Title>
                Lista transakcji
            </Title>
            <Transactions>
                <Income>
                    <Subtitle>
                        Przychód:
                    </Subtitle>
                    <List id="incomeSection">
                        {incomeTransactions.map(transaction => (
                            <li key={transaction.id}>
                                <Card>
                                    <Select>
                                        <span>
                                            {getCategoryIcon(transaction.category)}
                                        </span> 
                                        <span> {transaction.content} </span>
                                    </Select>
                                    <Con>
                                        <Amount income>{transaction.price} zł</Amount>
                                        <RemoveButton onClick={() => dispatch(removeTransaction(transaction.id))}>x</RemoveButton>
                                    </Con>
                                </Card>
                            </li>
                        ))}
                        <Total>Total: <span>{incomeTotal} zł</span> </Total>
                    </List>
                </Income>
                <Expense>
                    <Subtitle>
                        Wydatki:
                    </Subtitle>
                    <List id="expenseSection">
                        {expenseTransactions.map(transaction => (
                            <li key={transaction.id}>
                                <Card>
                                    <Select>
                                        <span>{getCategoryIcon(transaction.category)}</span>
                                        <span> {transaction.content} </span>

                                    </Select>
                                    <Con>
                                        <Amount>
                                            <span> {transaction.price} zł</span>
                                        </Amount>
                                        <RemoveButton onClick={() => dispatch(removeTransaction(transaction.id))}>x</RemoveButton>
                                    </Con>
                                </Card>
                            </li>
                        ))}
                        <Total>Total: <span>{expenseTotal} zł</span> </Total>
                    </List>
                </Expense>
            </Transactions>

        </Container>
    )
}

export default TransactionList;