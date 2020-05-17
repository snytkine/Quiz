import React, { useEffect } from 'react';
import { signIn, signOut, initialized } from '../store/actions/auth';
import { connect } from 'react-redux';

interface IProfile {
    id: string
    name: string
    givenName: string
    familyName: string
    imageURL: string
    email?: string
}

export interface IAuth {
    initialized: boolean
    profile: IProfile
}

const mapStateToProps = (state: { auth: IAuth }) => {
    return {
        initialized: state.auth.initialized
    }
}

let Authentication = (props: any) => {

    const { signIn, initialized, children } = props;

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ clientId: '898363856225-9fiul6rmh2ps3a4jhnqrpq1829h84ikl.apps.googleusercontent.com', scope: 'profile email' }).then(() => {
                const GAUTH = window.gapi.auth2.getAuthInstance();
                const CURRENT_USER = GAUTH.currentUser.get();
                const IS_SIGNED_IN = CURRENT_USER.isSignedIn();

                if (IS_SIGNED_IN) {
                    const profile = CURRENT_USER.getBasicProfile();
                    signIn({
                        id: profile.getId(),
                        name: profile.getName(),
                        givenName: profile.getGivenName(),
                        familyName: profile.getFamilyName(),
                        imageURL: profile.getImageUrl(),
                        email: profile.getEmail()
                    });
                } else {
                    initialized();
                }

                console.log(`IS_SIGNED_IN = ${IS_SIGNED_IN}`);
            })
        })
    }, [])

    if (initialized) {
        return (
            <div>{children}</div>
        )
    } else {
        return (<div>Loading...</div>)
    }
}

export default connect(mapStateToProps, { signIn, signOut, initialized })(Authentication)