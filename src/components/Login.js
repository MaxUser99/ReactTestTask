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
    const { isLogined, history } = this.props;
    console.log(isLogined);
    // if (isLogined) {
    // }
    if (loginStatus === true && !isLogined) {
      console.log("autenticate");
      const { autenticate } = this.props;
      autenticate({ login: resultObject.user.name, password: "" });
      history.push("/main");
    }
    // else {
    //   alert('Facebook login error, status: ' + loginStatus);
    // }
  };

  // componentDidMount() {
  //   const { isLogined, history } = this.props;
  //   if (isLogined) {
  //     console.log("Redirect to main");
  //     history.push("/main");
  //   }
  // }

  render() {
    // const { isLogined, history } = this.props;
    // if (isLogined) {
    //   console.log("Redirect to main");
    //   history.push("/main");
    // }
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

const mapStateToProps = state => ({
  isLogined: state.isAuthentificated
});

const Login = connect(mapStateToProps, mapDispatcherToProps)(_Login);

export default Login;
