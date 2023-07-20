import React, { useRef } from 'react'
import { Container, Title, Income, Expense, Transactions, List, Subtitle, Amount, Select, Card, RemoveButton, Con, Total } from './styled';

const TransactionList = ({ removeTransaction, incomeTransactions, expenseTransactions, incomeTotal, expenseTotal }) => {

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
                                        <span>{transaction.category}</span>

                                        <span>{transaction.content}</span>
                                    </Select>
                                    <Con>
                                        <Amount income>{transaction.price} zł</Amount>
                                        <RemoveButton onClick={() => removeTransaction(transaction.id)}>x</RemoveButton>
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
                                        <span> {transaction.category}</span>
                                        <span> {transaction.content} </span>

                                    </Select>
                                    <Con>
                                        <Amount>
                                            <span> {transaction.price} zł</span>
                                        </Amount>
                                        <RemoveButton onClick={() => removeTransaction(transaction.id)}>x</RemoveButton>
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