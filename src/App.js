import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Account } from './Account';
import { CreateAccount } from './CreateAccount';
import { Connections } from './Connections';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import firebase from './firebase'
import { AddAccount } from './components/AddAccount'
import { AccountsList } from './components/AccountsList'

firebase.firestore().collection('accounts').add({
    username: 'jacob',
    address: '0x000000',
    imageUrl: 'accountImg',
    links: [
      "link1",
      "link2"
    ]
})

export const App = () => (
  <div style={{backgroundColor:"#1D1E1F", minHeight:"100vh"}}>
      <NavigationBar/>
      {/* <AddAccount/>
      <AccountsList/> */}
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Account} />
            <Route path="/create" component={CreateAccount} />
            <Route path="/connections" component={Connections} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
  </div>
)

