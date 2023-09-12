import React from "react";
import { Container, Title, Content, Amount, Category, Type, Date } from "./styled";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../features/transactions/transactionsSlice";
import categoryOptions from "../../categoryOptions";

const TransactionInfo = () => {

    const transactions = useSelector(selectTransactions);
    const getCategoryType = (category) => {
        const selectedCategory = categoryOptions.find(option => option.value === category);
        return selectedCategory ? selectedCategory.label : "";
    };

    return (
        <Container>
            {transactions.map(transaction => (
                <>
                    <Title>Szczegóły tranzakcji</Title>
                    <Content>Nazwa: {transaction.content} </Content>
                    <Amount>Kwota: {transaction.price} </Amount>
                    <Category>Kategoria: {getCategoryType(transaction.category)}</Category>
                    <Type>Rodzaj tranzakcji: {transaction.type} </Type>
                    <Date>Data dodania: {transaction.date} </Date>
                </>
            ))}

        </Container>
    )
}

export default TransactionInfo;

