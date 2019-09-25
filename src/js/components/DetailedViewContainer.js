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
console.log('props',props)

    const urlParam = props.location.search.split('?')[1];

console.log('props.loading' ,props.loading)
    console.log('detailedView' ,props.detailedView)

    console.log('props.post' ,props.post)


    props.showDetailedView(urlParam);

    if (props.loading === true) {
        console.log('loading de.....................')
    return
    }

    console.log('lafter...')
    console.log('props.loading' ,props.loading)
    console.log('detailedView' ,props.detailedView)

    console.log('props.post' ,props.post)


    return (
        <ItemsContainer className ="row">
            {/*<DetailedViewItem item={props.post} />*/}
        </ItemsContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {


        showDetailedView: beerView => dispatch(showDetailedView(beerView))
    }
}

const mapStateToProps = (state) => {

    return {


        loading: state.dataLoading,
        detailedView: state.post,
        post: selectItemByName

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(DetailedViewContainer);



