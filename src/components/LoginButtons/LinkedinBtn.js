import React from "react";

class LinkedinBtn extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    window.IN.User.authorize(this.callbackFunction, "");
  };

  callbackFunction = () => {
    const { onLogin } = this.props;
    window.IN.API.Profile("me").result((r) => {
      const login = `${r.values[0].firstName} ${r.values[0].lastName}`;
      onLogin(login);
    });
  };

  render() {
    const { children } = this.props;
    return (
      <div onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default LinkedinBtn;
