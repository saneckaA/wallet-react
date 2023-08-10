import React from 'react'
import { Container, Title, Amount, Buttons, Add, Remove, Styles, ThemeButton, Light, Dark } from './styled';
import { useDispatch } from 'react-redux';
import { removeAllTransactions } from '../../../features/transactions/transactionsSlice';

const MainPanel = ({finalAmount}) => {

    const dispatch = useDispatch();

    const handleRemoveAll = () => {
        dispatch(removeAllTransactions());
    };

    

    return (
        
        <Container>
            <Title>
                Dostępne środki:
            </Title>
            <Amount>
                    <span>{finalAmount} zł</span>
            </Amount>
            <Buttons>
                <Add >
                    + Dodaj transakcję
                </Add>
                <Remove onClick={handleRemoveAll}>
                    Usuń wszystko
                </Remove>
            </Buttons>
            <Styles>
                Wybierz styl:
                <ThemeButton>
                    <Light  >

                    </Light>
                    <Dark >

                    </Dark>
                </ThemeButton>
            </Styles>

        </Container>
    )
}

export default MainPanel;