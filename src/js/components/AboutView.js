import React from 'react';
import styled from 'styled-components';

const lightColor = "white";
const darkColor="#0099CC";
const bgColor="#000000";
const primaryFontFamily = "league_gothicregular";
const ItemsContainer = styled.div`

display:flex;
padding:100px;
`;

const Title = styled.h1`
width:100%;
  font-size: 3.5em;
  text-align: center;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
  font-weight:bold;

  
`;

const Tagline = styled.h3`
width:100%;
  font-size: 1.5em;
  text-align: center;
  color: ${bgColor};
  font-family: ${primaryFontFamily};
   background: ${darkColor};
`;

const CopyText = styled.h4`
padding:10% 30%;
width:100%;
  font-size: 1.5em;
  text-align: center;
  color: ${lightColor};
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  
  background: ${bgColor};
`;

function AboutView () {

    return (

        <div className = "col" >
        <ItemsContainer className ="row">
            <Title>About this Project</Title>
            <Tagline>- By Chris Quinn -</Tagline>
            <CopyText>Our mission is affordable beer for everyone on the planet, and the first goal is a nice interface for the [open Punk API].
                <br /><br />
               </CopyText>
        </ItemsContainer>
        </div>
    )
}

export default AboutView;





