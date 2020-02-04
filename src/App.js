import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
//CSS
import 'antd/dist/antd.css';

//Component
import home from './component/home';
import signUp from './component/signUp';
import signIn from './component/signIn';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route path="/" exact component={home} />
          <Route path="/signup" component={signUp} />
          <Route path="/signin" component={signIn} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
