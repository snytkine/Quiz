import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { IAuth } from './authentication';


const mapStateToProps = (state: { auth: IAuth }) => {
    return {
        imgSrc: state.auth?.profile?.imageURL
    }
}

let UserButton = (props: { imgSrc: string }) => {
    const { imgSrc } = props
    if (imgSrc) {
        return (<IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
            <Avatar
                src={imgSrc}
            />
        </IconButton>)
    } else {
        return null
    }
}

export default connect(mapStateToProps)(UserButton);