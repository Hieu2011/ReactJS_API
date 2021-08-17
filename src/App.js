import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Header from './components/Header';
import routers from './routers';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <div className="container" style={{'marginTop' :'210px','padding':'15px 15px 2500px'}}>
            <div className="row">
              {this.showContentMenu(routers)}
            </div>
        </div>
        
        
      </Router>
    );
  }
  showContentMenu = (routers) =>{
    var result = '';
    if (routers.length > 0 ) {
      result = routers.map((router,index) =>{
        console.log(router);
        return <Route
                key={index}
                path = {router.path}
                exact = {router.exact}
                component = {router.main}
        
              />
      });
    }


    return <Switch>{result}</Switch>
  }
}

export default App;
