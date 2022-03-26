// Write your Character component here
import React from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';







const Character = (props) => {
    console.log(props);

    const {nameObj} = props;

    return (
        <div className= "Character">
             <h1 alt = {nameObj.name}> {nameObj.name} </h1>
        </div>

    )



}

export default Character; 