import React, {Component} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'; 

import { renderRoutes } from 'react-router-config';

import routes from './routes';

class App extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return <Switch>
            
            {renderRoutes(routes)}

            
        </Switch>
        

    }
}

export default App;
