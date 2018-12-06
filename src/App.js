import React, { Component } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <Header/>
        <BrowserRouter>
          <div>
              <Route path="/" exact render={()=>("home")}/>
              <Route path="/detail" render={()=>("detail")}/>
          </div>
        </BrowserRouter>
        </div>

      </Provider>
    );
  }
}

export default App;
