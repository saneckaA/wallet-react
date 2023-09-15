import React from "react";
import { Container, Title, Content, Amount, Category, Type, Date,NotFound } from "./styled";
import { useSelector } from "react-redux";
import { getTransactionById } from "../../features/transactions/transactionsSlice";
import categoryOptions from "../../categoryOptions";
import { useParams } from "react-router-dom";

const TransactionInfo = () => {

    const getCategoryType = (category) => {
        const selectedCategory = categoryOptions.find(option => option.value === category);
        return selectedCategory ? selectedCategory.label : "";
    };

    const {id} = useParams();

    const transaction = useSelector(state => getTransactionById(state, id));

    if (!transaction) {
        return <NotFound>
            Przepraszamy, nie znaleźliśmy takiej tranzakcji. Prosimy spróbować ponownie.
            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 406.8"><path d="M29.27 0h373.81c16.11 0 29.27 13.16 29.27 29.27v90.8c-2.23-1.1-4.48-2.14-6.77-3.13l-2.02-.92c-3.57-1.47-7.18-2.82-10.84-4.02V81.94h.14H20.83v221.61c0 4.5 3.59 8.09 8.09 8.09h193.04c.54 1.42 1.1 2.83 1.69 4.24 1.97 4.78 4.23 9.49 6.73 14.09H29.27C13.16 329.97 0 316.78 0 300.7V29.27C0 13.16 13.16 0 29.27 0zm335.71 140.37c31.07 0 60.75 12.29 82.72 34.27 30.33 30.33 41.62 75.06 29.4 116.14-2.83 9.53-6.85 18.55-11.88 26.89l45.3 49.38c2.09 2.27 1.95 5.82-.33 7.91l-33.26 30.38c-2.27 2.08-5.8 1.92-7.89-.35l-43.34-47.67c-18.35 11.18-39.22 17.02-60.72 17.02-31.06 0-60.75-12.3-82.71-34.27a117.18 117.18 0 0 1-25.39-37.99c-18.13-43.67-7.82-94.22 25.4-127.43a116.814 116.814 0 0 1 37.96-25.4c13.8-5.73 28.92-8.88 44.74-8.88zm70.93 46.04c-28.63-28.63-72.03-37.24-109.31-21.8-66.92 27.71-82.3 113.99-32.58 163.67 28.68 28.61 72 37.26 109.33 21.81 37.54-15.59 61.94-52.1 61.94-92.74 0-13.62-2.69-26.59-7.56-38.37a101.013 101.013 0 0 0-21.82-32.57zm-28.22 97.67-16.4 16.31-26.48-26.49-26.34 26.34-15.82-15.86 26.32-26.32-26.85-26.84 16.4-16.31 26.8 26.81 26.51-26.51 15.81 15.85-26.49 26.49 26.54 26.53zM375.21 32.9c7.99 0 14.46 6.47 14.46 14.46 0 7.98-6.47 14.46-14.46 14.46-7.98 0-14.46-6.48-14.46-14.46.04-7.99 6.51-14.46 14.46-14.46zm-97.95 0c7.99 0 14.46 6.47 14.46 14.46 0 7.98-6.47 14.46-14.46 14.46-7.99 0-14.46-6.48-14.46-14.46 0-7.99 6.47-14.46 14.46-14.46zm48.98 0c7.98 0 14.45 6.47 14.45 14.46 0 7.98-6.47 14.46-14.45 14.46-7.99 0-14.47-6.48-14.47-14.46 0-7.99 6.48-14.46 14.47-14.46z"/></svg>
        </NotFound>
    }

    return (
        <Container>
                    <Title>Szczegóły tranzakcji</Title>
                    <Content><span>Nazwa: </span> {transaction.content} </Content>
                    <Amount><span>Kwota:</span> {transaction.price} </Amount>
                    <Category><span>Kategoria:</span> {getCategoryType(transaction.category)}</Category>
                    <Type><span>Rodzaj tranzakcji:</span> {transaction.type} </Type>
                    <Date><span>Data dodania:</span> {transaction.date} </Date>
        </Container>
    )
}

export default TransactionInfo;

