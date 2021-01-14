import React from "react";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// components
import Menu from "../components/menu"

const Upload = () => {
    return(
        <div>
            <Menu>
                <p>You are logged in!</p>
                <AmplifySignOut></AmplifySignOut>
            </Menu>
        </div>
    )
}

export default withAuthenticator(Upload);