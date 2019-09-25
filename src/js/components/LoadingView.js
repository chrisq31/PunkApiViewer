import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { getData} from "../actions/index";


const ItemsContainer = styled.div`

display:flex;
`;

function LoadingView () {


    return (
        <ItemsContainer className ="row">
         Loading...
          </ItemsContainer>
    )
}


const mapDispatchToProps = dispatch => {

    return dispatch(getData());
}








export default connect(null,mapDispatchToProps)(LoadingView);

