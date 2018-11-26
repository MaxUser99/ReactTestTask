import React from "react";
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
import PrivateRoute from "./components/PrivateRoute";

class _App extends React.Component {
  componentWillMount() {
    const { location, history } = this.props;
    if (location.pathname === "/") {
      history.push("/main");
    }
  }

  render() {
    const { isLogined, login, history } = this.props;
    console.log(isLogined);
    console.log(history.location.pathname);
  // && history.location.pathname === "/login"
  //   if (isLogined) {
      // return (<Redirect to="/main" />);
    // }

    return (
      <div>
        <Header login={login || ""} />
        <div className="container">
          <Switch>
            <Route exact path="/main/:id" component={InfoPage} />
            {/*
            <Route
              path="/main"
              render={() => (isLogined
                ? <Main />
                : <Redirect to="/login" />)}
            />
            */}
            <PrivateRoute path="/main/" myComponent={Main} />
            <Route path="/login" component={Login} />}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogined: state.isAuthentificated,
  login:     state.user.login
});

const App = connect(mapStateToProps)(_App);

export default App;
