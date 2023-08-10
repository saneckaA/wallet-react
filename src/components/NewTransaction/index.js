import React, { useRef, useState } from 'react'
import { Container, Title, Form, Input, Header, Select, Buttons, Save, Cancel } from './styled';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTransaction } from '../../features/transactions/transactionsSlice';
import categoryOptions from '../../categoryOptions';

const NewTransaction = () => {

    const [newContentName, setNewContentName] = useState("");
    const [newContentPrice, setNewContentPrice] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed = newContentName.trim();
        if(contentTrimmed === "") {
            return;
        }

        dispatch(addTransaction({
            content: contentTrimmed,
            price: newContentPrice,
            category: selectedCategory,
            id: nanoid(),
        }));

        setNewContentName("");
        setNewContentPrice("");
        inputRef.current.focus();
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <Container>
            <Title>Dodaj nową transakcję</Title>
            <Form onSubmit={onFormSubmit}>
                <Header>
                    Nazwa:
                    <Input
                        placeholder="podaj nazwę transakcji"
                        type="text"
                        required
                        ref={inputRef}
                        value={newContentName}
                        onChange={({ target }) => setNewContentName(target.value)}
                    />
                </Header>
                <Header>
                    Kwota:
                    <Input
                        placeholder="podaj kwotę transakcji"
                        required
                        type="number"
                        value={newContentPrice}
                        onChange={({ target }) => setNewContentPrice(target.value)}

                    />
                    <span>[Jeśli dodajesz wydatek, postaw znak minusa na początku kwoty]</span>
                </Header>
                <Header>
                    Wybierz kategorię:
                    <Select
                     value={selectedCategory}
                     onChange={handleCategoryChange}
                     required
                    >
                     <option value="">Select Category</option>
                     {categoryOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.icon} {option.label}
                        </option>
                     ))}
                    </Select>
                </Header>
                <Buttons>
                    <Save  >
                        Zapisz
                    </Save>
                    <Cancel>
                        Anuluj
                    </Cancel>
                </Buttons>
            </Form>

        </Container>
    )
}

export default NewTransaction;