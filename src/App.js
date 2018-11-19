import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login";
import Main from "./components/Main";
import InfoPage from "./components/InfoPage";
import Header from "./components/Header";

const mapStateToProps = state => ({
  isLogined: state.isAuthentificated,
  login:     state.user.login
});

class _App extends Component {
  componentWillMount() {
    const { location, history } = this.props;
    if (location.pathname === "/") {
      history.push("/main");
    }
  }

  render() {
    const { isLogined, login, history } = this.props;
    if (isLogined && history.location.pathname === "/login") {
      return (<Redirect to="/main" />);
    }

    return (
      <div>
        <Header login={login || ""} />
        <div className="container">
          <Switch>
            <Route path="/main/:id" component={InfoPage} />
            <Route
              path="/main"
              render={() => (isLogined
                ? <Main />
                : <Redirect to="/login" />)}
            />
            <Route path="/login" component={Login} />}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(_App);

export default App;
