import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Signing from './Signing'
import Signup from './Signup'

const Login = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/signin" component={Signing} />
                <Route exact path="/signup" component={Signup}/>
            </Switch>
        </Router>
    )
}

export default Login
