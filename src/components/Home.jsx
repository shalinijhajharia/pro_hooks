import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

function Home() {
    const {authService } = useOktaAuth();

    const login = () => { authService.login('search'); }
    return (
        <center>
        <div className='home'>
            <h1>Welcome to Books with Hooks</h1>
            <p>You need to sign in to use this application</p>
            <button onClick={login} className='but1'>Sign in</button>
        </div>
        </center>
    );
}

export default Home;