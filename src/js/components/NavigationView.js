import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

//


const lightColor = "white";
const darkColor="#0099CC";
const bgColor="#000000";
const primaryFontFamily = "league_gothicregular";


const NavHeader = styled.div`
position:fixed;
  padding: 10px 20px;
  width: 100%;
  min-height: 30px;
  overflow:hidden;
  display: flex;
  align-items: center;
   background-color:${darkColor};
  z-index:200;
`;

const StyledLink = styled(NavLink)`
text-transform: uppercase;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
  font-size: 1.5em;
  padding: 10px;
  
  &:hover {
    background-color: ${bgColor};
    color: white;
  }
 
`;

const Title = styled.h1`
white-space: nowrap;
  font-size: 4.5rem;
  text-align: center;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
  font-weight:bold;
 
   padding-top:30px;
  
`;


function NavigationView(props) {

    console.log('Nav props',props.menuState)

    if (props.loading === true) {

        return <div>Loading</div>
    }

    return (

        <div className = "row">
            <NavHeader>
                <div className = "col">
                    <ul>
                        <li>
                            <StyledLink activeClassName = "active" to = "/">
                                Home
                            </StyledLink>

                            <StyledLink activeClassName = "active" to = "/about">
                                About
                            </StyledLink>
                        </li>
                    </ul>
                </div>

                <div className = "col-8">

                    <Title>MAKE MY DAY...</Title>

                </div>

            </NavHeader>
        </div>


    )


}


export default NavigationView;
