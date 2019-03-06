import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import Detail from './pages/detail';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
        <Header/>
        <BrowserRouter>
          <Fragment>
              <Route path="/" exact component={Home}/>
              <Route path="/detail" component={Detail}/>
          </Fragment>
        </BrowserRouter>
        </Fragment>

      </Provider>
    );
  }
}

export default App;
