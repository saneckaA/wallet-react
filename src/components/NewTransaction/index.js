import React, { useRef, useState } from 'react'
import { Container, Title, Form, Input, Header, Select, Buttons, Save, Cancel } from './styled';
import { FaHamburger, FaShoppingBasket, FaMoneyBillWave } from 'react-icons/fa';
import { RiMovie2Fill } from 'react-icons/ri'


const NewTransaction = ({ addNewTransaction, options }) => {

    const [newContentName, setNewContentName] = useState("");
    const [newContentPrice, setNewContentPrice] = useState("");

    const priceInputRef = useRef(null);
    const nameInputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTransaction(
            newContentName.trim(),
            newContentPrice,
        );
    };

    const handleAddTransaction = () => {
          const content = nameInputRef.current.value;
          const price = parseFloat(priceInputRef.current.value);

          if (price > 0) {
            addNewTransaction(content, price);
          }

          nameInputRef.current.value = '';
          priceInputRef.current.value = '';

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
                        ref={nameInputRef}
                        value={newContentName}
                        onChange={(event) => setNewContentName(event.target.value)}
                    />
                </Header>
                <Header>
                    Kwota:
                    <Input
                        placeholder="podaj kwotę transakcji"
                        type="number"
                        value={newContentPrice}
                        ref={priceInputRef}
                        onChange={(event) => setNewContentPrice(event.target.value)}

                    />
                    <span>[Jeśli dodajesz wydatek, postaw znak minusa na początku kwoty]</span>
                </Header>
                <Header>
                    Wybierz kategorię:
                    <Select
                     
                    >
                     
                    </Select>
                </Header>
                <Buttons>
                    <Save onClick={handleAddTransaction} >
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