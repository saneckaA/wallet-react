import React from 'react';
import { MainHeader, Subtitle, Logo } from './styled';
import {FaWallet } from 'react-icons/fa';

function Header() {
    return (
        <MainHeader>
            <Logo><FaWallet/> Wallet </Logo>
            <Subtitle>
                Twój osobisty menedżer finansów
            </Subtitle>
        </MainHeader>

    )
}

export default Header;
