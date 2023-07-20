import React from 'react'
import { Container, Title, Amount, Buttons, Add, Remove, Styles, ThemeButton, Light, Dark } from './styled';

const MainPanel = ({finalAmount, removeAllTransactions}) => {


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
                <Remove onClick={removeAllTransactions}>
                    Usuń wszystko
                </Remove>
            </Buttons>
            <Styles>
                Wybierz styl:
                <ThemeButton>
                    <Light >

                    </Light>
                    <Dark >

                    </Dark>
                </ThemeButton>
            </Styles>

        </Container>
    )
}

export default MainPanel;