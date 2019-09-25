import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const lightColor = "white";
const darkColor="#0099CC";
const bgColor="#000000";


const primaryFontFamily = "league_gothicregular";



const ItemContainer = styled.div`
    width: 600px;
  height: 100%;
   box-sizing: border-box;
   cursor: pointer;
   background-color:${bgColor};
   overflow:hidden;
   display:flex;
 
   flex-direction: column;
   margin:120px;
    margin-bottom:60px;
   
   
`;

const ImageContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
 
`

const Img = styled.img`
  max-width: 300px;
    max-height: 500px;
`;





const Title = styled.h2`
padding-top:20px;
position:relative;
text-transform: uppercase;
width:100%;
  font-size: 8em;
  text-align: center;
  color: ${bgColor};
  background-color:${darkColor};
  font-family: ${primaryFontFamily};
`;

const ABV = styled.h3`
width:100%;
  font-size: 4em;
  text-align: center;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
  padding-top:20px;
`;

const Tagline = styled.h3`
width:100%;
  font-size: 1.5em;
  text-align: center;
  color: ${darkColor};
  font-family: ${primaryFontFamily};
  letter-spacing:1em;
`;

const Description = styled.h3`
width:100%;
padding:10% 30%;
  font-size: 1.5em;
  text-align: center;
  color: ${darkColor};
  font-family: ${primaryFontFamily};
`;

const BD_Pre = styled.h3`
width:100%;
  font-size: 4em;
  text-align: center;
  color: ${darkColor};
  font-family: ${primaryFontFamily};
`;

const BD = styled.h3`
width:100%;
  font-size: 4em;
  text-align: center;
  color: ${darkColor};
  font-family: ${primaryFontFamily};
`;


const Food = styled.h3`
width:100%;
  font-size: 2em;
  text-align: center;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
  padding 10px 50%;
`;

const Food_Pre = styled.h3`
width:100%;
  font-size: 3em;
  text-align: center;
  color: ${darkColor};
  font-family: ${primaryFontFamily};
`;




const FoodSml = styled.h4`
width:100%;
  font-size: 1em;
  text-align: center;
 color: ${darkColor};
  font-family: ${primaryFontFamily};
  padding 10px;
`;





// functional component - no state

function DetailedViewItem( item ) {

    console.log('DV...............',item)

    const name = item.name;
    const id = item.id;
    const tagline = item.tagline;
    const abv = item.abv;
    const description=item.description;
    const brewedDate = item.first_brewed;
    const foodPairing = item.food_pairing;

    return (

        <div className = "col" >

        <ItemContainer>
            <BD_Pre> PUNK SINCE </BD_Pre>
            <BD> {brewedDate} </BD>

            <Title>{name}</Title>
            <Tagline>{tagline}</Tagline>
            <ABV>ABV {abv} %</ABV>

            <ImageContainer>
                <Img src={item.image_url} alt ={name} />
            </ImageContainer>

            <Description> {description} </Description>

            <Food_Pre> -----Tuck 4 Punks----- </Food_Pre>
            <Food> {foodPairing} </Food>
            <FoodSml>dry roasted cheese and onion</FoodSml>





        </ItemContainer>


        </div>
    );
}

export default DetailedViewItem;

DetailedViewItem.propTypes = {

    item: PropTypes.object.isRequired
}

