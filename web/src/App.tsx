import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Meeting from "./containers/Meeting/Meeting";
import {Main} from "./containers/Main";
import {CreateMeeting} from "./containers/CreateMeeting";
import {Account} from "./containers/Account";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route path="/create-meeting" exact>
          <CreateMeeting/>
        </Route>
        <Route path="/account">
          <Account/>
        </Route>
        <Route path="/@:meetingId" exact>
          <Meeting/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
