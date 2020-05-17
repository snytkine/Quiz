import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { IAuth } from './authentication';


const mapStateToProps = (state: { auth: IAuth }) => {
    return {
        auth: state.auth
    }
}

let UserButton = (props: { auth?: IAuth }) => {

    if (props.auth?.profile) {
        return (<IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
            <Avatar
                src={props.auth.profile.imageURL}
            />
        </IconButton>)
    } else {
        return (<div></div>)
    }
}

export default connect(mapStateToProps)(UserButton);