import React from 'react';
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const CustomButton = withStyles({
    root:{
        borderRadius: `20px`,
        color: 'white',
        backgroundColor: '#37ae86'
    }
})(Button);
export default function CustomisedButton({children})
{
    return(
        <CustomButton variant="contained"> {children}</CustomButton>
    );
}