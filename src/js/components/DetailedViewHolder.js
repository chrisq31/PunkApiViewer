import React from 'react';
import styled from 'styled-components';
import DetailedViewItem from "./DetailedViewItem";

const ItemsContainer = styled.div`

display:flex;
padding-top:100px;
`;


function DetailedViewHolder (data) {



    if (data.loading === true) {

        {console.log('loading de')}
        return <div>Loading</div>
    }


    return (
        <ItemsContainer className ="row">
            <DetailedViewItem item={data.item} />
        </ItemsContainer>
    )
}






export default DetailedViewHolder;

