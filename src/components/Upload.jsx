import { Widget } from "@uploadcare/react-widget";
import React from 'react';
import { Link } from 'react-router-dom'


function Upload(){
    return(
        <p>
    <label htmlFor='file'>Your file:</label>{' '}
     <Widget publicKey='4a022e7b929332d401c9' id='file' />
    </p>
        )
    }
    export default Upload