
import './App.css';
import ReactDOM from 'react-dom';
import {Routes,Route,Link} from "react-router-dom";
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import Home from './components/Home.jsx'
import Search from './components/Search';
function Empty()
{
  return <h1>There's Nothing to display</h1>
}
function App() {
  return (
    <>    <div className='main'>
      <h1>ProHooks</h1>

      <div className='nav'>
       <Link to='/' className='links'>Home</Link>
       <Link to='search' className='links'>Search</Link>
      
      </div>

    </div>
     
    
    <Security issuer={'https://dev-62898502.okta.com/oauth2/default'}
              clientId={'0oa3f89yt6zukAMfo5d7'}
              redirectUri={`http://${window.location.host}/search`}
              pkce={true}>
                <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="search" element={<Search/>}/>
 
      
        <Route path="*" element={<Empty/>}/>
        <Route path={`http://${window.location.host}/search`} element={<LoginCallback />} />
        </Routes>
      </Security>

    </>

   );
}

export default App;