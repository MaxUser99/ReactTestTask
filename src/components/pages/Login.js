import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../../reduxStuff/actions";

import FacebookBtn from "../LoginButtons/FacebookBtn";
import LinkedinBtn from "../LoginButtons/LinkedinBtn";

class _Login extends React.Component {
  state = {
    login:    "",
    password: ""
  };

  inputChanged = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    console.log(resultObject);
    const { isLogined, history } = this.props;
    if (loginStatus === true && !isLogined) {
      const { autenticate } = this.props;
      autenticate({ login: resultObject.user.name, password: "" });
      history.push("/");
    }
  };

  onLinkedInLogin = (login) => {
    const { history, autenticate } = this.props;
    autenticate({ login, password: "" });
    history.push("/");
  };

  render() {
    const { login, password } = this.state;
    return (
      <div className="d-flex justify-content-center align-items-center jumbotron">
        <div className="d-flex flex-column justify-content-between">
          <input
            name="login"
            className="form-control my-1"
            value={login}
            onChange={this.inputChanged}
            type="text"
            placeholder="Email"
          />
          <input
            name="password"
            className="form-control my-1"
            value={password}
            onChange={this.inputChanged}
            type="password"
            placeholder="Password"
          />
          <div className="row text-center my-1 p-1">
            <p className="col-12">Or continue as</p>
            <div className="col-sm">
              <LinkedinBtn onLogin={this.onLinkedInLogin}>
                <button type="button" className="btn btn-info  mx-auto">Linkedin</button>
              </LinkedinBtn>
            </div>
            <div className="col-sm">
              <FacebookBtn onLogin={this.onFacebookLogin}>
                <button type="button" className="btn btn-info  mx-auto">Facebook</button>
              </FacebookBtn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatcherToProps = dispatch => ({
  autenticate: credentials => dispatch(authenticate(credentials))
});

const mapStateToProps = state => ({
  isLogined: state.isAuthentificated
});

const Login = connect(mapStateToProps, mapDispatcherToProps)(_Login);

export default Login;
