import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/pages/Home';
import { Unbound } from './components/pages/Unbound';
import ResetPassword from './components/pages/ResetPassword';
import VerifyEmail from './components/pages/VerifyEmail';
import { NoMatch } from './components/pages/NoMatch';
import { Client } from './components/pages/Client';
import { Layout } from './components/Layout';
import JumbotronFooter from './components/ui/JumbotronFooter';
import { NavigationBar } from './components/ui/NavigationBar';
import { Provider } from 'react-redux';
import store from './store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistStore} from 'redux-persist';

// Main App component where all other component are utilized in either this file directly or component within the below components.
class App extends Component {
  render() {
    const persistor = persistStore(store);
    return (
      <React.Fragment>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
          <NavigationBar/>
          <Layout>
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/unbound' component={Unbound} />
                <Route exact path='/client' component={Client} />
                <Route exact path="/reset/:token" component={ResetPassword} />
                <Route exact path="/verify/:token" component={VerifyEmail} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Layout>
          <JumbotronFooter/>
          </PersistGate>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;