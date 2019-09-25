import React from 'react';
import { connect } from "react-redux";

import {showDetailedView} from "../actions/index";

import { selectItemByName } from '../selectors'
import DetailedViewHolder from "./DetailedViewHolder";
import DetailedViewItem from "./DetailedViewItem";
import styled from "styled-components";


const ItemsContainer = styled.div`

display:flex;
padding-top:100px;
`;





// function component
function DetailedViewContainer (props)
{


    const urlParam = props.location.search.split('?')[1];

    props.showDetailedView(urlParam);

    if (props.loading === true) {
        console.log('loading de.....................')
    return
    }


    return (
        <ItemsContainer className ="row">
            <DetailedViewItem item={props.post} />
        </ItemsContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {



        showDetailedView: beerView => dispatch(showDetailedView(beerView))
    }
}

const mapStateToProps = state => ({
    loading: state.dataLoading,
    post: selectItemByName
});

export default connect(mapStateToProps,mapDispatchToProps)(DetailedViewContainer);



