import React from 'react';

function ConditionalComponent(){
    const isLoggedIn=false;
    return(
        <div>
            { isLoggedIn && <p>Welcome User!</p>}
            {!isLoggedIn && <p>Please Log in</p>}
        </div>
    )
}
export default ConditionalComponent;