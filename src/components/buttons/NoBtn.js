import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        } 
    }
}));

function NoBtn() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Button variant="contained">
                No         
            </Button>

        </div>
    )
}

export default NoBtn