import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
    // background: dodgerblue;
    display: flex;
    position: relative;
    z-index: 10;
`;

const TheLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 2rem;
    margin: 2% 4%;
`;


const Nav = () =>{
    return(
        <NavBar>
            <TheLink to="/">Home</TheLink>
            
        </NavBar>
    )
}

export default Nav