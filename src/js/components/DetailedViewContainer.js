import React from 'react';
import {connect} from "react-redux";
import {showDetailedView} from "../actions/index";
import {selectItemByName} from '../selectors'
import DetailedViewItem from "./DetailedViewItem";
import styled from "styled-components";


const ItemsContainer = styled.div`

display:flex;
padding-top:100px;
`;



const DetailedViewContainer =(props) => {
    const urlParam =decodeURI( props.location.search.split('?')[1]);

    props.showDetailedView(urlParam);

    if (props.loading === true) {


        return <div>Loading</div>
    }

    console.log('props..after.',props.loading)



    return (
        <ItemsContainer className = "row">
            <DetailedViewItem item = {props.post}/>
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
        post: selectItemByName(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedViewContainer);



