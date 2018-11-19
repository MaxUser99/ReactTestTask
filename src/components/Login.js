import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../reduxStuff/actions";
import FacebookBtn from "./FacebookBtn";

class _Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login:    "",
      password: ""
    };
  }

  inputChanged = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      const { autenticate } = this.props;
      autenticate({ login: resultObject.user.name, password: "" });
    }
    // else {
    //   alert('Facebook login error, status: ' + loginStatus);
    // }
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
              <button type="button" className="btn btn-info  mx-auto">Linkedin</button>
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


const Login = connect(null, mapDispatcherToProps)(_Login);

export default Login;
