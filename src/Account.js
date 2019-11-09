import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useCoordinate } from './Hooks'
export const Account = () => {

    const {coordinate, generateCoordinate} = useCoordinate();

    return (        
    
        <Styles>
            <div className="home-layout">./src/Home.js
  Line 1:10:  'Button' is defined but never used                       no-unused-vars
  Line 2:17:  'useState' is defined but never used                     no-unused-vars
  Line 7:12:  'coordinate' is assigned a value but never used          no-unused-vars
  Line 7:24:  'generateCoordinate' is assigned a value but never used  no-unused-vars

./src/Hooks/index.js
  Line 1:8:  'React' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.</div>
        </Styles>
    )
}

const Styles = styled.div`
    .home-layout {
        background-color:#242527;
    }
`;