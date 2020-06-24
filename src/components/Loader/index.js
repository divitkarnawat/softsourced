import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import './Loader.scss';

class Loader extends Component{
    constructor(props)
    {
       super(props);    
    }

    
    render()
    {
    return(
    <div className = "loader">
        <Container>
            <h1 className = "title">
            WE DESIGN. WE DEVELOP. WE DELIVER.
            </h1>

            
        </Container>
       
      
        </div>

    )
}
}

export default Loader;