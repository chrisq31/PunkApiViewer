import React from 'react';
import styled from 'styled-components';
import DetailedViewItem from "./DetailedViewItem";
import { connect } from "react-redux";
import { selectItemById } from '../selectors'
import { selectItemByName } from '../selectors'




const textColor = "white";
const secondaryColor = "#0099CC";
const primaryFontFamily = "league_gothicregular";

const ItemsContainer = styled.div`

display:flex;
padding:270px;
`;

const Title = styled.h1`
  font-size: 3.5em;
  text-align: right;
  color: ${textColor};
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



const mapStateToProps = (state) => {
    return {
        loading: state.dataLoading,
        item: selectItemById(state)
    }
}



export default connect(mapStateToProps)(AboutView);

