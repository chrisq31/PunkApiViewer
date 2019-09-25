import React from 'react';
import styled from 'styled-components';
import ListViewItem from "./ListViewItem";
import {NavLink} from "react-router-dom";


const ItemsContainer = styled.div`
display:flex;
padding-top:140px;
`;

const textColor = "white";

const StyledLink = styled(NavLink)`
  color: ${textColor};
`;

const ListViewHolder =(props)=> {

    console.log('list ',props)

    const posts = props.posts;


    if (props.loading === true) {

        return <div>Loading</div>
    }

    return (
        <ItemsContainer className ="row">
            {posts.map(product => (
                <StyledLink key={product.id} exact activeClassName="active" to={{ pathname: "/beer", search: product.name }} >
                    <ListViewItem item={product}  />
                </StyledLink>
            ))}
        </ItemsContainer>
    )
}







export default ListViewHolder

