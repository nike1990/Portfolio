import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes'
import Nav from './components/Navigation'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Nav/>
                    <div>
                        <Switch>
                            {
                                routes.map((item, index) => {
                                    return(

                                        <Route
                                            key={index}
                                            exact={item.exact}
                                            path={item.path}
                                            component={item.component}
                                        />
                                    )
                                })
                            }
                        </Switch>
                    </div>
                </div>
            </div>
    );
  }
}

export default App;
