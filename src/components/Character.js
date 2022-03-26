// Write your Character component here
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import theme from '../theme';




const StyledCharcter = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
color: yellow;
background-color: black;
`


const Character = (props) => {
    console.log(props);

    const {nameObj} = props;

    return (
        <StyledCharcter className = 'container'>
             <h1 alt = {nameObj.name}> {nameObj.name} </h1>
        </StyledCharcter>
    )



}

export default Character; 