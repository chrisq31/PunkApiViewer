import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const lightColor = "white";
const darkColor="#0099CC";
const bgColor="#000000";


const primaryFontFamily = "league_gothicregular";



const ItemContainer = styled.div`
    width: 300px;
  height: 100%;
   box-sizing: border-box;
   cursor: pointer;
   background-color:${bgColor};
   overflow:hidden;
   display:flex;
 
   flex-direction: column;
   margin:20px;
    padding:0;
   
   
`;

const ImageContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
 
`

const Img = styled.img`
  max-width: 200px;
    max-height: 200px;
`;


const Button = styled.button`
  font-family: ${primaryFontFamily};
  cursor: pointer;
  background: ${darkColor};
  font-size: 2em;
  border-radius: 0px;
  color: ${lightColor};
  border: 2px solid ${darkColor};
  margin: 30px auto;
  padding: 0.25em 1em;
 
  &:hover {
    background-color: ${bgColor};
    color ${darkColor};
  }
`;


const Title = styled.h2`
padding-top:20px;
position:relative;
text-transform: uppercase;
width:100%;
  font-size: 3em;
  text-align: center;
  color: ${darkColor};
  font-family: ${primaryFontFamily};
`;

const ABV = styled.h3`
width:100%;
  font-size: 2em;
  text-align: center;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
`;

const Tagline = styled.h3`
width:100%;
  font-size: 1.5em;
  text-align: center;
  color: ${darkColor};
  font-family: ${primaryFontFamily};
`;


// functional component - no state

function ListViewItem({ item }) {

    const name = item.name;
    const id = item.id;
    const tagline = item.tagline;
    const abv = item.abv;

    const buttonTextArray=['PUNK','SKUNK','DRUNK','HUNK','FUNK','JUNK','SUNK',"DUNK"];
    const  buttonTextTitle= buttonTextArray[Math.floor(Math.random()*buttonTextArray.length)];
    return (

        <div className = "col" >

        <ItemContainer>
            <Title>{name}</Title>
            <Tagline>{tagline}</Tagline>
            <ABV>ABV {abv} %</ABV>

            <ImageContainer>
                <Img src={item.image_url} alt ={name} />
            </ImageContainer>

            <Button type="submit"  id ={id} name = {name } >
                {buttonTextTitle}
            </Button>

        </ItemContainer>
        </div>
    );
}

export default ListViewItem;

ListViewItem.propTypes = {

    item: PropTypes.object.isRequired
}

