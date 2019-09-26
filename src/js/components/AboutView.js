import React from 'react';
import styled from 'styled-components';

const lightColor = "white";
const primaryFontFamily = "league_gothicregular";
const ItemsContainer = styled.div`

display:flex;
padding:270px;
`;

const Title = styled.h1`
  font-size: 3.5em;
  text-align: right;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
  font-weight:bold;
  margin-right:10%;
  
`;

function AboutView () {

    return (
        <ItemsContainer className ="row">
            <Title>About this Project</Title>
        </ItemsContainer>
    )
}

export default AboutView;





