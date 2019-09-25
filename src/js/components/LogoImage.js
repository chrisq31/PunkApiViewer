import React from 'react';
import { ReactComponent as LogoImage } from '../../img/logo.svg';
import styled from 'styled-components';


const LogoImageContainer = styled.div`
    background-color:#0099CC;
    width: 208px;
    height: 248px;

`;


export default () => (
    <LogoImageContainer>
        <LogoImage />
    </LogoImageContainer>
);
